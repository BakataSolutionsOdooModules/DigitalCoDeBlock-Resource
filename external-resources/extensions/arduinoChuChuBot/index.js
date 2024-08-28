const arduinoChuChuBot = () => ({ // M
    name: 'EscornaBot variant designed by Digital CodeSign',
    extensionId: 'arduinoChuChuBot', // M
    version: '1.0.0',
    supportDevice: ['chuchubot_arduinoUno'],
    author: 'Digital CodeSign',
    hide: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    library: 'lib',
    helpLink: 'https://google.github.io/blockly-samples/examples/developer-tools/index.html'
});

module.exports = arduinoChuChuBot; // M
