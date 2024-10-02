
const path = require('node:path'); 
const fs = require('node:fs');

class ResourceLibrary{

    static _loadedLibraries = new Map();

    constructor(resourcesPath, owner, library, api){
        
        this._library = library;
        this._api = api;
        this._LIBRARIES_LOCAL_PATH = path.join(resourcesPath,"extensions","libArduinoImporter", "lib");
        this._LIBRARIES_REMOTE_PATH = [ //Posibles lugares donde puede estar el codigo
            `https://api.github.com/repos/${owner}/${library}/contents/src`, //En directorio src
            `https://api.github.com/repos/${owner}/${library}/contents` // En raiz
        ]; // El orden importa, quiero empezar buscando por lo mas especifico para descargar menos.
        
        this._LIBRARY_WRITE_PATH = path.join(this._LIBRARIES_LOCAL_PATH, library);
        
    }

    getLoadedLibraries(dir){
        return new Promise((resolve, reject)=>{
            ResourceLibrary._loadedLibraries = {};
            fs.readdir(dir ? dir : this._LIBRARIES_LOCAL_PATH, {withFileTypes:true}, (err, entries) => {
                if(err)reject(err);
                entries.forEach(entry => {
                    ResourceLibrary._loadedLibraries[entry.name] = entry;
                });
                resolve(entries);
            });
        })
       
    }


    async start(){
        let result = [];
        try{
            await this.getLoadedLibraries(this._LIBRARIES_LOCAL_PATH);
            if(ResourceLibrary._loadedLibraries[this._library]){
                console.log(`La libreria "${this._library}" solicitada ya existe`);
                return ResourceLibrary._loadedLibraries;
            }

            for( const libraries_src of this._LIBRARIES_REMOTE_PATH){
                const apiInfo = await this.getAPiInfo(libraries_src);
                if(apiInfo.status != 200) continue;
                result = await this.writeRepoFiles( apiInfo, this._LIBRARY_WRITE_PATH );
                return ResourceLibrary._loadedLibraries; //Nos interesa salir al primer exito

            }
            await this.getLoadedLibraries(this._LIBRARIES_LOCAL_PATH);
        }
        catch(error){
            console.error(error);
            return {
                error : error
            };
        }
      
    }


    getAPiInfo = async function(apiURL){
        // for( const libraries_src of this._LIBRARIES_REMOTE_PATH){
            console.log(`Obteniendo de ${apiURL}`);
            const result = await fetch(apiURL,{
                headers : {
                    'Accept' : 'application/vnd.github+json',
                    'X-GitHub-Api-Version': '2022-11-28',
                    'Authorization' : `${this._api ? `Bearer ${this._api}` : '' }`
                }
            });
            // if(result.status != 200){
            //     lastError = result;
            //     continue;
            // };
            return result;
        // }
    }

    _getFilesLibraryFromRepo = async function*(info){
        const files = await info.json();
        for(const file of files){
            if(file.type === "dir"){
                yield {
                    name: file.name,
                    dir : true,
                    quota_limit : false,
                    apiInfo : file,
                    token : this._api
                }
            }
            let fileChunk = null;
            try{
                const response = await fetch(file.git_url,{
                    headers : {
                        'Accept' : 'application/vnd.github+json',
                        'X-GitHub-Api-Version': '2022-11-28',
                        'Authorization' : `${this._api ? `Bearer ${this._api}` : '' }`
                    }
                });
                if (response.status == undefined) 
                    yield {
                        quota_limit : true,
                        apiInfo : response,
                        token : this._api
                    };
                if(response.status != 200) throw new Error(`${JSON.stringify(response)}`);
                fileChunk = Buffer.from((
                    await (
                        response
                    ).json()
                ).content, 'base64');
            } 
            catch(error){//Es un directorio
                //NOPE
                console.error(`Ha ocurrido un error descargando ficheros. La información era:`);
                console.debug(info);
            }
            if(!fileChunk) continue;
            yield {
                name: file.name,
                dir: false,
                size: file.size,
                chunk: fileChunk,
                quota_limit : false,
                token : this._api
            }
        }
    }

    writeRepoFiles = async function(info, writePath){

        // Creamos el directorio por si no existe

        let totalBytes = 0;
        let filesWritten = 0;
        try{
            await fs.mkdir(writePath,
                { recursive: true },
                (err) => {
                    if (err) throw err;
                });
            for await(const fileData of this._getFilesLibraryFromRepo(info)){
                if(fileData.quota_limit) // Hemos alcanzado el limite, no se ha podido descargar la libreria
                    throw new Error("Quota limit reached");
                if(fileData.dir){
                    console.warn("Directorio encontrado, ejecutando recursividad...");
                    const apiInfo = await this.getAPiInfo(fileData.apiInfo.url)
                    const res = this.writeRepoFiles(apiInfo, writePath.concat(`/${fileData.name}`));
                    continue;
                }
                const targetPath = path.join(writePath, fileData.name);
                await fs.writeFile(targetPath, fileData.chunk, (error) => {
                    if(error) throw error;
                    console.log(`Written file in ${targetPath}`);
                });
                totalBytes += fileData.size;
                filesWritten += 1;
            }
        }
        catch(error){
            console.error(error);
            await fs.rmdir(writePath, { recursive: true, force: true });
            return {
                status: 500,
                existed: false,
                api_path : this._LIBRARIES_REMOTE_PATH,
                dir_content : writePath,
                bytes_written : totalBytes,
                files_written : filesWritten
            }
        }
        
        return {
            status : 200,
            existed: false,
            api_path : this._LIBRARIES_REMOTE_PATH,
            dir_content : writePath,
            bytes_written : totalBytes,
            files_written : filesWritten
        };
    }

    deleteRepoFiles = async function(){
        const TARGET_PATH_LIBRARY = path.join(this._LIBRARIES_LOCAL_PATH,this._library);
        await this.getLoadedLibraries()
        if (!ResourceLibrary._loadedLibraries[this._library]) 
            return {
                status : 200,
                exists : false
            };
        return await fs.rmdir(
            TARGET_PATH_LIBRARY,
            { recursive : true, force: true},
            async (error) => {
                try{
                    if(error) throw error;
                    
                    return {
                        status : 200,
                        remaining: ResourceLibrary._loadedLibraries
                    };
                }
                catch(error){
                    console.error(error);
                    return  {
                        status: 500,
                        reason: error
                    };
                }
            }); 
    }


}

module.exports = ResourceLibrary;