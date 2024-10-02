/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {

    Blockly.Arduino.libArduinoImporter_Input = function(){

        const library = this.getFieldValue('libArduinoImporter_Input_Dropdown').split("/").reverse()[0];
        Blockly.Arduino.includes_[`${library}`] = `#include "${library}.h" //check name`;

        const code = ``;
        return code;
    }

    return Blockly;
}

exports = registerGenerators;
