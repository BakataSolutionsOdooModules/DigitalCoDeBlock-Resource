const MentorBit = formatMessage => ({ // M
    name: formatMessage({
        id: 'MentorBit.name', // M
        default: 'MentorBit' // M
    }),
    deviceId: 'mentorbit_arduino', // M
    manufactor: 'Digital Codesign', // M
    learnMore: '', // A link you can learn more about the device
    typeList: ['arduino'], // M
    iconURL: 'assets/deviceMentorBit.png', // M
    description: formatMessage({
        id: 'MentorBit.description', // M
        default: 'MentorBit desarrollado por Digital CodeSign.Incorpora bloques Scratch para manejar MentorBit.' // M
    }),
    featured: true,
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    pnpidList: [ // Valores visibles en Administrador dispositivos -> Puertos(COM y LPT) -> Propiedades( del puerto que interesa) -> Detalles -> Id. de hardware
        // https://github.com/arduino/Arduino/blob/1.8.0/hardware/arduino/avr/boards.txt#L51-L58
        'USB\\VID_10C4&PID_EA60', // CP2102
        'USB\\VID_1A86&PID_7523', // CH340
    ],
    connectionIconURL: 'assets/deviceMentorBit-illustration.svg', // M
    connectionSmallIconURL: 'assets/deviceMentorBit-small.svg', // M
    translations: 'translations.js',
    programMode: ['upload'],
    defaultProgramMode: 'upload',
    programLanguage: ['block', 'c', 'cpp'],
    tags: ['kit'],
    helpLink: 'https://github.com/DigitalCodesign/MentorBit-mBlock-Extension',
    deviceExtensionsCompatible: 'arduinoMega2560'
});

const MentorBitArduino = formatMessage => { // M
    const device = MentorBit(formatMessage);
    device.defaultBaudRate = '9600';
    device.deviceId = 'MentorBit_arduinoMega2560'; // M
    device.programMode = ['realtime','upload'];
    device.deviceExtensions = ['arduinoMentorBit']; // M // Encontrable en "./../../extensions/<device.deviceExtensiones>"
    device.deviceExtensionsCompatible = 'arduinoMega2560';
    device.hide = true;
    return device;
};


module.exports = formatMessage => ([
    MentorBit(formatMessage), // M
    MentorBitArduino(formatMessage), // M
]);



