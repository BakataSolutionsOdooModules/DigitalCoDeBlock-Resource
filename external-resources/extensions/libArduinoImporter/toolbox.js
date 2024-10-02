/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {

    return `
    <category name="%{BKY_ARDUINO_IMPORTER_CATEGORY}" id="ARDUINO_LIBRARY_IMPORTER_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF">
        <block type="libArduinoImporter_Input"></block>
    </category>
    `;
}

exports = registerToolboxs;
