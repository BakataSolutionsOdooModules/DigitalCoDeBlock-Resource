const ChuChubot = formatMessage => ({ // M
    name: formatMessage({
        id: 'ChuChubot.name', // M
        default: 'EscornaBot' // M
    }),
    deviceId: 'chuchubot_arduino', // M
    manufactor: 'Digital CodeSign', // M
    learnMore: '', // A link you can learn more about the device
    typeList: ['arduino'], // M
    iconURL: 'assets/deviceChuChubot.png', // M
    description: formatMessage({
        id: 'ChuChubot.description', // M
        default: 'EscornaBot desarrollado por Digital CodeSign.Incorpora bloques Scratch para manejar ChuChubot.' // M
    }),
    featured: true,
    disabled: false,
    bluetoothRequired: true,
    serialportRequired: true,
    pnpidList: [ // Valores visibles en Administrador dispositivos -> Puertos(COM y LPT) -> Propiedades( del puerto que interesa) -> Detalles -> Id. de hardware
        // https://github.com/arduino/Arduino/blob/1.8.0/hardware/arduino/avr/boards.txt#L51-L58
        'USB\\VID_10C4&PID_EA60', // CP2102
        'USB\\VID_1A86&PID_7523', // CH340
    ],
    connectionIconURL: 'assets/deviceChuChubot-illustration.svg', // M
    connectionSmallIconURL: 'assets/deviceChuChubot-small.svg', // M
    translations: 'translations.js',
    programMode: ['upload'],
    defaultProgramMode: 'upload',
    programLanguage: ['block', 'c', 'cpp'],
    tags: ['kit'],
    helpLink: 'https://github.com/DigitalCodesign/Escornabot-Library'
});

const ChuChuBotArduino = formatMessage => { // M
    const device = ChuChubot(formatMessage);
    device.defaultBaudRate = '9600';
    device.deviceId = 'chuchubot_arduinoUno'; // M
    device.programMode = ['upload'];
    device.deviceExtensions = ['arduinoChuChuBot']; // M // Encontrable en "./../../extensions/<device.deviceExtensiones>"
    device.deviceExtensionsCompatible = 'arduinoUno';
    device.hide = true;
    return device;
};


module.exports = formatMessage => ([
    ChuChubot(formatMessage), // M
    ChuChuBotArduino(formatMessage), // M
]);



