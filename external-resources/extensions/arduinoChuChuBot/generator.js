/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {

    Blockly.Arduino.deviceChuChuBot_OpenBlueLed = function(){
        const dropdown_led = this.getFieldValue('LED');
        const dropdown_estado = this.getFieldValue('ESTADO');
        Blockly.Arduino.setups_[`setup_input_${dropdown_led}`] = `pinMode(${dropdown_led}, OUTPUT);`;
        const code = `digitalWrite(${dropdown_led}, ${dropdown_estado});\n`;
        return code;
    }
   
    return Blockly;
}


exports = registerGenerators;
