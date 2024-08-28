/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {

    return `
    <category name="MentorBit Base" id="ARDUINO_MENTORBIT_BASE_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF">
        <block type="deviceMentorBit_LEDControl"></block>
        <block type="deviceMentorBit_LEDRGBControl"></block>
        <block type="deviceMentorBit_ZumbadorControl"></block>
        <block type="deviceMentorBit_PulsadorControl"></block>
        <block type="deviceMentorBit_PotenciometroControl"></block>
    </category>

    <category name="MentorBit Sensores" id="ARDUINO_MENTORBIT_SENSORS_CATEGORY" colour="#3869f8" secondaryColour="#3869f8">
        <block type="deviceMentorBit_LDRControl"></block>
        <block type="deviceMentorBit_MQControl"></block>
        <block type="deviceMentorBit_DHTControl"></block>
        <block type="deviceMentorBit_UltraSonidosControl"></block>
        <block type="deviceMentorBit_DS18B20Control"></block>
    </category>

    <category name="MentorBit Motores" id="ARDUINO_MENTORBIT_ENGINES_CATEGORY" colour="#b39ddb" secondaryColour="#b39ddb">
        <block type="deviceMentorBit_MotorDCControl"></block>
        <block type="deviceMentorBit_MotorStepsControl"></block>
        <block type="deviceMentorBit_MotorServoControl"></block>
    </category>

    <category name="MentorBit Pantallas" id="ARDUINO_MENTORBIT_ENGINES_CATEGORY" colour="#0aad80" secondaryColour="#0aad80">
        <block type="deviceMentorBit_LCDScreenControl" id="deviceMentorBit_LCDScreenControl">
            <value name="deviceMentorBit_LCDScreenControl_Message">
                <shadow type="text">
                    <field name="TEXT">Hello World</field>
                </shadow>
            </value>
        </block>
        <block type="deviceMentorBit_LCDScreenClear"></block>
        <block type="deviceMentorBit_OLEDScreenControl">
            <value name="deviceMentorBit_OLEDScreenControl_Message">
                <shadow type="text">
                    <field name="TEXT">Hello World</field>
                </shadow>
            </value>
        </block>
        <block type="deviceMentorBit_OLEDScreenClear"></block>
    </category>

    <category name="MentorBit Display" id="ARDUINO_MENTORBIT_DISPLAY_CATEGORY" colour="#4fd300" secondaryColour="#4fd300">
        <block type="deviceMentorBit_Display7Control"></block>
        <block type="deviceMentorBit_Display7Clear"></block>
    </category>

    <category name="MentorBit RTC y SD" id="ARDUINO_MENTORBIT_RTCySD_CATEGORY" colour="#ffd740" secondaryColour="#ffd740">
        <block type="deviceMentorBit_RTCControl"></block>
        <block type="deviceMentorBit_RTCRead"></block>
        <block type="deviceMentorBit_SDControl">
            <value name="deviceMentorBit_SDControl_Message">
                <shadow type="text">
                    <field name="TEXT">Hello World</field>
                </shadow>
            </value>
            <value name="deviceMentorBit_SDControl_File">
                <shadow type="text">
                    <field name="TEXT">Test.txt</field>
                </shadow>
            </value>
        </block>
        <block type="deviceMentorBit_SDRead">
            <value name="deviceMentorBit_SDRead_File">
                <shadow type="text">
                    <field name="TEXT">Test.txt</field>
                </shadow>
            </value>
        </block>
    </category>
    `;
    return `
<category name="%{BKY_ARDUINOCHUCHUBOT_CATEGORY}" id="ARDUINOCHUCHUBOT_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF">
    <block type="deviceDemo_button"></block>
    <block type="deviceDemo_ultrasonic"></block>
    <block type="deviceDemo_rgb">
        <value name="ALL">
            <shadow type="math_number">
                <field name="NUM">4</field>
            </shadow>
        </value>
        <value name="POS">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="R">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="G">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="B">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
</category>
`;

}

exports = registerToolboxs;
