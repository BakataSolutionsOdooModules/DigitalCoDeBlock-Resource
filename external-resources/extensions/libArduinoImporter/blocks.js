/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */

// const { _loadedLibraries } = require("../../../src/library");

var options = [['Loading...', 'Loading...']];
var loadedLibraries =  [['Empty', '']];
(async function(){
  options = await getRepositories();

  const _libraries = await getLoadedLibraries();
  console.log(_libraries);
  if(_libraries.length) loadedLibraries = _libraries;
})();


async function getLoadedLibraries(){
  const LIBRARY_LIST_GET = "http://localhost:20112/library";
  const loadedLibraries = await fetch(LIBRARY_LIST_GET);

  return (await loadedLibraries.json()).map((value) => {
    return [value.name,value.name];
  });

}

var GITHUB_USER_TOKEN_API = "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";
var askedAPI = window.prompt("[Opcional] Para peticiones ilimitadas, introduzca API Token Github valido ( https://github.com/settings/tokens ):");
if(askedAPI && askedAPI.length)
  GITHUB_USER_TOKEN_API = askedAPI;

function registerBlocks (Blockly) {
    Blockly.Blocks.libArduinoImporter_Input = {
      init: async function(){
        this.appendDummyInput()
        .appendField('Buscar libreria:')
        .appendField(new Blockly.FieldTextInput(''), 'libArduinoImporter_Input_Search');
        
        this.appendDummyInput()
          .appendField('Importar:')
          .appendField(new Blockly.FieldDropdown(
            this.dynamicDropdown.bind(this),
            this.dynamicDropdownValidator.bind(this)),
            'libArduinoImporter_Input_Dropdown');

        this.appendDummyInput()
          .appendField('. Eliminar libreria cargada:')
          .appendField(new Blockly.FieldDropdown(
            this.dynamicDropdownLibraries.bind(this),
            this.dynamicDropdownLibrariesValidator.bind(this)
          ), 'libArduinoImporter_Input_LoadedLibraries');

        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
            
      },
      dynamicDropdown: function() {
        const inputText = this.getFieldValue('libArduinoImporter_Input_Search') || ''; // Obtener el valor del input text
      
        // Obtener lista de todas las librerias disponibles en Arduino
        // https://github.com/arduino/library-registry/blob/main/repositories.txt
    
        // Filtrar las opciones según el input de texto
        const filteredOptions = options.filter(option => {
          //console.log(option);
          return option[0].toLowerCase().includes(inputText.toLowerCase());
        });
    
        // Si no hay coincidencias, mostrar una opción vacía
        return filteredOptions.length ? filteredOptions : [['No matches', '']];
      },
      dynamicDropdownValidator: function(value){
        if(value.length){
          const API_LIBRARY_ADD = `http://localhost:20112/library/add/${GITHUB_USER_TOKEN_API}${value}`;  //`https://api.github.com/repos${value.pathname}/contents/src`
          fetch(API_LIBRARY_ADD) //añadimos la libreria
          .then((_) => {
            const libraryName = value.split("/").reverse()[0];
            loadedLibraries.push([libraryName, libraryName]) // Lo añadimos al array de librerias cargadas
          })
          .catch( (_) => {

          });
        }
      },

      dynamicDropdownLibraries: function(){
        return loadedLibraries;
         
      },

      dynamicDropdownLibrariesValidator : function(value){
        const indexToRemove = loadedLibraries.findIndex((key) => key[0] == value);
        console.log(`Hay que eliminar el indice --> ${indexToRemove}`);
        fetch(`http://localhost:20112/library/remove/${value}`)
          .then((_) => {
            const temp = [];
            for(let i= 0; i < loadedLibraries.length; i++){
              if(i == indexToRemove) continue;
              temp.push(loadedLibraries[i]);
            }

            loadedLibraries = temp.length ? temp :  [['Empty', '']];
          });

        
      }
    }


    return Blockly;
}

var allOptions = null;
async function getRepositories(){
  if(!allOptions){
    const ARDUINO_REPOSITORIES_LIST_URL = "https://api.github.com/repos/arduino/library-registry/contents/repositories.txt"
    const res = await fetch(ARDUINO_REPOSITORIES_LIST_URL, {
      headers : {
        //'Accept': 'application/vnd.github.v3.raw',
        'Authorization' : `${GITHUB_USER_TOKEN_API ? `Bearer ${GITHUB_USER_TOKEN_API}` : '' }`
      }
    });
    if(res.status != 200)
      return reject(`Got status code ${res.status}: ${res.statusText}`);
  
    const repos = Base64.decode(JSON.parse(new TextDecoder()
      .decode(
        await readAll(
          res.body.getReader()
        )
      )
    ).content).split('\n');
  
    allOptions = repos
      .filter((repo) =>{
        return repo.trim().length > 0;
      })
      .map((value, index) => {
        try{
          const url = new URL(value);
          return [url.pathname.split("/").reverse()[0],url.pathname]
        }
        catch(error){
          return;
        }
    });
    console.info("Loaded all Arduino libraries repositories")
  }
  return allOptions;
  
}

async function readAll(reader){
    let content = new Uint8Array();
    let res;

    do{
      res = await reader.read();
      if(res.done) continue;

      let merged = new Uint8Array(content.length+ res.value.length);
      merged.set(content);
      merged.set(res.value, content.length);
      content = merged;
    } while(!res.done);

    return content;
 
}



exports = registerBlocks;
