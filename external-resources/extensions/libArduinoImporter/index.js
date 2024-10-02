const arduinoLibraryImporter = formatMessage => ({ 
    name: 'Arduino library importer',
    extensionId: 'arduinoLibraryImporter',
    version: '1.0.0',
    supportDevice:  ['arduinoUno', 'arduinoNano', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'Digital CodeSign',
    iconURL: 'assets/arduino.png',
    description: formatMessage({
        id: 'arduinoLibraryImporter.description',
        default: 'Extensión to download and import Arduino libraries stored in Github'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    library: 'lib',
    official: true,
    tags: ['library', 'arduino'],
    helpLink: 'https://api.github.com/repos/arduino/library-registry/contents/repositories.txt'
    
});

module.exports = arduinoLibraryImporter; // M
