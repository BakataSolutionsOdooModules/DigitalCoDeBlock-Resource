/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {

    return `
    <category name="%{BKY_MENTORBIT_BASE_CATEGORY}" id="ARDUINO_MENTORBIT_BASE_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF">
        <block type="deviceMentorBit_LEDControl"></block>
        <block type="deviceMentorBit_LEDRGBControl"></block>
        <block type="deviceMentorBit_ZumbadorControl">
            <value name="deviceMentorBit_ZumbadorControl_Freq">
                <shadow type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
            <value name="deviceMentorBit_ZumbadorControl_Duration">
                <shadow type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
        </block>
        <block type="deviceMentorBit_PulsadorControl"></block>
        <block type="deviceMentorBit_PotenciometroControl"></block>
    </category>

    <category name="%{BKY_MENTORBIT_SENSOR_CATEGORY}" id="ARDUINO_MENTORBIT_SENSORS_CATEGORY" colour="#3869f8" secondaryColour="#3869f8">
        <block type="deviceMentorBit_LDRControl"></block>
        <block type="deviceMentorBit_MQControl"></block>
        <block type="deviceMentorBit_DHTControl"></block>
        <block type="deviceMentorBit_UltraSonidosControl"></block>
        <block type="deviceMentorBit_DS18B20Control"></block>
    </category>

    <category name="%{BKY_MENTORBIT_MOTOR_CATEGORY}" id="ARDUINO_MENTORBIT_ENGINES_CATEGORY" colour="#b39ddb" secondaryColour="#b39ddb">
        <block type="deviceMentorBit_MotorDCControl">
            <value name="deviceMentorBit_MotorDCControl_Intensity">
                <shadow type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
        </block>
        <block type="deviceMentorBit_MotorStepsControl">
            <value name="deviceMentorBit_MotorStepsControl_Steps">
                <shadow type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
        </block>
        <block type="deviceMentorBit_MotorServoControl">
            <value name="deviceMentorBit_MotorServoControl_Degrees">
                <shadow type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
        </block>
    </category>

    <category name="%{BKY_MENTORBIT_SCREENS_CATEGORY}" id="ARDUINO_MENTORBIT_ENGINES_CATEGORY" colour="#0aad80" secondaryColour="#0aad80">
        <block type="deviceMentorBit_LCDScreenControl" id="deviceMentorBit_LCDScreenControl">
            <value name="deviceMentorBit_LCDScreenControl_Message">
                <shadow type="text">
                    <field name="TEXT">Hello World</field>
                </shadow>
            </value>
            <value name="deviceMentorBit_LCDScreenControl_Column">
                <shadow type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
            <value name="deviceMentorBit_LCDScreenControl_Row">
                <shadow type="math_number">
                    <field name="NUM">0</field>
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
            <value name="deviceMentorBit_OLEDScreenControl_Column">
                <shadow type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
            <value name="deviceMentorBit_OLEDScreenControl_Row">
                <shadow type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
            <value name="deviceMentorBit_OLEDScreenControl_FontSize">
                <shadow type="math_number">
                    <field name="NUM">11</field>
                </shadow>
            </value>
        </block>
        <block type="deviceMentorBit_OLEDScreenClear"></block>
    </category>

    <category name="%{BKY_MENTORBIT_DISPLAY_CATEGORY}" id="ARDUINO_MENTORBIT_DISPLAY_CATEGORY" colour="#4fd300" secondaryColour="#4fd300">
        <block type="deviceMentorBit_Display7Control">
            <value name="deviceMentorBit_Display7Control_Number">
                <shadow type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
        </block>
        <block type="deviceMentorBit_Display7Clear"></block>
    </category>

    <category name="%{BKY_MENTORBIT_RTCSD_CATEGORY}" id="ARDUINO_MENTORBIT_RTCySD_CATEGORY" colour="#ffd740" secondaryColour="#ffd740">
        <block type="deviceMentorBit_RTCControl">
            <value name="deviceMentorBit_RTCControl_Hour">
                <shadow type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
            <value name="deviceMentorBit_RTCControl_Minutes">
                <shadow type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
            <value name="deviceMentorBit_RTCControl_Day">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
            <value name="deviceMentorBit_RTCControl_Year">
                <shadow type="math_number">
                    <field name="NUM">2024</field>
                </shadow>
            </value>
        </block>
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
}

exports = registerToolboxs;
