// This file was automatically generated. Do not modify.
/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
/* eslint-disable quotes */
/* eslint-disable quote-props */
/* eslint-disable dot-notation */
/* eslint-disable max-len */
function getInterfaceTranslations () {
    return {}
    ;
}

function registerScratchExtensionTranslations () {
    return {};
}

function registerBlocksMessages (Blockly) {

    Object.assign(Blockly.ScratchMsgs.locales["es"],
        {
            "ARDUINO_IMPORTER_CATEGORY" : "Importar librerias Arduino",
            "ARDUINO_IMPORTER_INPUT" : "%1 %2"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["en"],
        {
            "ARDUINO_IMPORTER_CATEGORY" : "Import Arduino libraries",
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["ru"],
        {
            "ARDUINO_IMPORTER_CATEGORY" : "Импорт библиотек Arduino",
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
        {
            "ARDUINO_IMPORTER_CATEGORY" : "導入 Arduino 函式庫",
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "ARDUINO_IMPORTER_CATEGORY" : "导入 Arduino 函数库",
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
