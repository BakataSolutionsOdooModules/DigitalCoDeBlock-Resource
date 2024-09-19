/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {

    const COLOR = {
      base : "#42ccff",
      sensor : "#3869f8",
      engine : "#b39ddb",
      screen : "#0aad80",
      display : "#4fd300",
      ports : "#fd3af2",
      others : "#ffd740",
    }


    Blockly.Blocks.deviceMentorBit_LEDControl = {
      init: function() {
        this.jsonInit({
          message0: Blockly.Msg.LEDControl,
          args0: [
            {
              type: "field_dropdown",
              name: "deviceMentorBit_LEDControl_LED",
              options: [
                ['Rojo', '5'],
                ['Verde', '6'],
                ['Azul', '7']
              ]
            },
            {
              type: "field_dropdown",
              name: "deviceMentorBit_LEDControl_LED_STATE",
              options: [
                  ['ENCENDIDO', '1'],
                  ['APAGADO', '0']
              ]
            },
          ]
        });
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Para controlar estado de los LED');
        this.setHelpUrl('www.google.es');
        this.setColour(COLOR.base);
      }
    }

    Blockly.Blocks.deviceMentorBit_LEDRGBControl = {
      init: function() {
        this.jsonInit({
          message0: Blockly.Msg.LEDRGBControl,
          args0: [
            {
              type: "field_slider",
              name: "deviceMentorBit_LEDRGBControl_Red",
              "value": "0",
              "precision": 1,
              "min": "0",
              "max": "255"
            },
            {
              type: "field_slider",
              name: "deviceMentorBit_LEDRGBControl_Green",
              "value": "0",
              "precision": 1,
              "min": "0",
              "max": "255"
            },
            {
              type: "field_slider",
              name: "deviceMentorBit_LEDRGBControl_Blue",
              "value": "0",
              "precision": 1,
              "min": "0",
              "max": "255"
            }
          ]
        });
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Para controlar color del LED RGB');
        this.setHelpUrl('www.google.es');
        this.setColour(COLOR.base);
      }
    }

    Blockly.Blocks.deviceMentorBit_ZumbadorControl = {
      init: function() {
        this.jsonInit({
          message0: Blockly.Msg.ZumbadorControl,
          args0: [
            {
              type: "input_value",
              name: "deviceMentorBit_ZumbadorControl_Freq",
            },
            {
              type: "input_value",
              name: "deviceMentorBit_ZumbadorControl_Duration"
            }
          ]
        });
        // this.appendDummyInput('Zumbador')
        //   .appendField('Hacer sonar zumbador con frecuencia')
        //   .appendField(new Blockly.FieldNumber(0, 0, Infinity, 1), 'deviceMentorBit_ZumbadorControl_Freq')
        //   .appendField('durante')
        //   .appendField(new Blockly.FieldNumber(0, 0, Infinity, 1), 'deviceMentorBit_ZumbadorControl_Duration')
        //   .appendField('millisegundos');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Para controlar color del LED RGB');
        this.setHelpUrl('www.google.es');
        this.setColour(COLOR.base);
      }
    }

    Blockly.Blocks.deviceMentorBit_PulsadorControl = {
      init: function() {
        this.jsonInit({
          message0: Blockly.Msg.PulsadorControl,
          args0: [
            {
              type: 'field_dropdown',
              name: 'deviceMentorBit_PulsadorControl_Señal',
              options: [
                ['Digital', '1'],
                ['Analógico', '2']
              ]
            },
            {
              type: 'field_dropdown',
              name: 'deviceMentorBit_PulsadorControl_Señal',
              options: [
                ['Baja', '0'],
                ['Alta', '1']
              ]
            }
          ],
          colour: COLOR.base,
          extensions: ['output_number']
        });

        // this.appendValueInput('Pulsador')
        //   .appendField('Lectura pulsador conectado a pin')
        //   .appendField(new Blockly.FieldDropdown([
        //       ['Digital', '1'],
        //       ['Analógico', '2']
        //     ]), 'deviceMentorBit_PulsadorControl_Señal')
        //   .appendField('en configuración normalmente')
        //   .appendField(new Blockly.FieldDropdown([
        //       ['Baja', '0'],
        //       ['Alta', '1']
        //     ]), 'deviceMentorBit_PulsadorControl_EstadoSeñal');
        // this.setOutput(true, "Number");
        // this.setTooltip('Para controlar cuando el botón Rst ESP');
        // this.setHelpUrl('www.google.es');
        // this.setColour(COLOR);
      }
    }

    Blockly.Blocks.deviceMentorBit_PotenciometroControl = {
      init: function() {
        this.jsonInit({
          message0: Blockly.Msg.PotenciometroControl,
          colour: COLOR.base,
          extensions: ['output_number']
        });
      }
    }

    ///////////////////////////////////////////////////////////////////////
    /// Sensores

    Blockly.Blocks.deviceMentorBit_LDRControl = {
      init: function() {
        this.jsonInit({
          message0: Blockly.Msg.LDRControl,
          colour: COLOR.sensor,
          extensions: ['output_number']
        });
      }
    }

    Blockly.Blocks.deviceMentorBit_MQControl = {
      init: function() {
        this.jsonInit({
          message0: Blockly.Msg.MQControl,
          colour: COLOR.sensor,
          extensions: ['output_number']
        });
      }
    }
    
    Blockly.Blocks.deviceMentorBit_DHTControl = {
      init: function() {
        this.jsonInit({
          message0: Blockly.Msg.DHTControl,
          args0: [
            {
              type: 'field_dropdown',
              name: 'deviceMentorBit_DHTControl_Unit',
              options: [
                ['Temperatura', '1'],
                ['Humedad Ambiental', '2']
              ]
            }
          ],
          colour: COLOR.sensor,
          extensions: ['output_number']
        });
      }
    }

    Blockly.Blocks.deviceMentorBit_UltraSonidosControl = {
      init: function() {
        this.jsonInit({
          message0: Blockly.Msg.UltraSonidosControl,
          colour: COLOR.sensor,
          extensions: ['output_number']
        });
      }
    }

    Blockly.Blocks.deviceMentorBit_DS18B20Control = {
      init: function() {
        this.jsonInit({
          message0: Blockly.Msg.DS18B20Control,
          colour: COLOR.sensor,
          extensions: ['output_number']
        });
      }
    }

    ///////////////////////////////////////////////////////////////////////
    /// Motores

    Blockly.Blocks.deviceMentorBit_MotorDCControl = {
      init: function() {
        this.jsonInit({
          message0: Blockly.Msg.MotorDCControl,
          args0 : [
            {
              type: "input_value",
              name: "deviceMentorBit_MotorDCControl_Intensity",
            },
            {
              type: "field_dropdown",
              name: "deviceMentorBit_MotorDCControl_Orientation",
              options: [
                ['HORARIO', '1'],
                ['ANTIHORARIO', '2']
              ]
            },
          ]
        });
        // this.appendDummyInput('MotorDC')
        //   .appendField('Mover motor de Corriente Continua con intensidad')
        //   .appendField(new Blockly.FieldNumber(0, -Infinity, Infinity), 'deviceMentorBit_MotorDCControl_Intensity')
        //   .appendField('en sentido')
        //   .appendField(new Blockly.FieldDropdown([
        //       ['HORARIO', '1'],
        //       ['ANTIHORARIO', '2']
        //     ]), 'deviceMentorBit_MotorDCControl_Orientation');
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Para controlar motor de corriente continua');
        this.setHelpUrl('www.google.es');
        this.setColour(COLOR.engine);
      }
    }

    Blockly.Blocks.deviceMentorBit_MotorStepsControl = {
      init: function() {
        this.jsonInit({
          message0: Blockly.Msg.MotorStepsControl,
          args0 : [
            {
              type: "input_value",
              name: "deviceMentorBit_MotorStepsControl_Steps",
            },
            {
              type: "field_dropdown",
              name: "deviceMentorBit_MotorStepsControl_Orientation",
              options: [
                ['HORARIO', '1'],
                ['ANTIHORARIO', '2']
              ]
            },
          ]
        });
        // this.appendDummyInput('MotorSteps')
        //   .appendField('Mover motor de Paso a Paso')
        //   .appendField(new Blockly.FieldNumber(0, -Infinity, Infinity), 'deviceMentorBit_MotorStepsControl_Steps')
        //   .appendField('pasos en sentido')
        //   .appendField(new Blockly.FieldDropdown([
        //       ['HORARIO', '1'],
        //       ['ANTIHORARIO', '2']
        //     ]), 'deviceMentorBit_MotorStepsControl_Orientation');
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Para controlar motor de paso a paso');
        this.setHelpUrl('www.google.es');
        this.setColour(COLOR.engine);
      }
    }

    Blockly.Blocks.deviceMentorBit_MotorServoControl = {
      init: function() {
        this.jsonInit({
          message0: Blockly.Msg.MotorServoControl,
          args0 : [
            {
              type: "input_value",
              name: "deviceMentorBit_MotorServoControl_Degrees",
            },
          ]
        });
        // this.appendDummyInput('MotorServo')
        //   .appendField('Mover motor servo')
        //   .appendField(new Blockly.FieldNumber(0, -Infinity, Infinity), 'deviceMentorBit_MotorServoControl_Degrees')
        //   .appendField('grados');
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Para controlar motor servo');
        this.setHelpUrl('www.google.es');
        this.setColour(COLOR.engine);
      }
    }


    ///////////////////////////////////////////////////////////////////////
    /// Pantallas

    Blockly.Blocks.deviceMentorBit_LCDScreenControl = {

      init : function(){
        this.jsonInit({
          message0: Blockly.Msg.LCDScreenControl,
          args0: [
            {
              type: "input_value",
              name: "deviceMentorBit_LCDScreenControl_Message",
            },
            {
              type: "input_value",
              name: "deviceMentorBit_LCDScreenControl_Column"
            },
            {
              type: "input_value",
              name: "deviceMentorBit_LCDScreenControl_Row"
            },
            {
              type: "field_dropdown",
              name: "deviceMentorBit_LCDScreenControl_Cleaning",
              options: [
                [ Blockly.Msg.LCDSCreenControl_Opt1, '0'],
                [ Blockly.Msg.LCDSCreenControl_Opt2, '1']
              ]
            },
          ],
           colour : COLOR.screen
        });
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Para controlar pantalla LCD');
        this.setHelpUrl('www.google.es');
        this.setColour(COLOR.screen);
      }
      /*init: function() {
        this.appendDummyInput('LCDScreen')
          .appendField('Mostrar')
          .appendField(new Blockly.FieldTextInput('Hello World'), 'deviceMentorBit_LCDScreenControl_Message')
          .appendField('en pantalla LCD en la columna')
          .appendField(new Blockly.FieldNumber(0), 'deviceMentorBit_LCDScreenControl_Column')
          .appendField('y fila')
          .appendField(new Blockly.FieldNumber(0), 'deviceMentorBit_LCDScreenControl_Row')
          .appendField(new Blockly.FieldDropdown([
              ['LIMPIANDO ANTES DE MOSTRAR', '0'],
              ['DEJANDO MENSAJES ACTUALES', '1']
            ]), 'deviceMentorBit_LCDScreenControl_Cleaning');
      }*/
    }
    Blockly.Blocks.deviceMentorBit_LCDScreenClear = {
      init: function() {
        this.jsonInit({
          message0: Blockly.Msg.LCDScreenClear
        })
        // this.appendDummyInput('LCDScreenClear')
        //   .appendField('Limpiar pantalla LCD');
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Para limpiar pantalla LCD');
        this.setHelpUrl('www.google.es');
        this.setColour(COLOR.screen);
      }
    }

    Blockly.Blocks.deviceMentorBit_OLEDScreenControl = {
      init: function() {
        this.jsonInit({
          message0: Blockly.Msg.OLEDScreenControl,
          args0: [
            {
              type: "input_value",
              name: "deviceMentorBit_OLEDScreenControl_Message",
            },
            {
              type: "input_value",
              name: "deviceMentorBit_OLEDScreenControl_Column"
            },
            {
              type: "input_value",
              name: "deviceMentorBit_OLEDScreenControl_Row"
            },
            {
              type: "field_dropdown",
              name: "deviceMentorBit_OLEDScreenControl_Cleaning",
              options: [
                [ Blockly.Msg.LCDSCreenControl_Opt1, '0'],
                [ Blockly.Msg.LCDSCreenControl_Opt2, '1']
              ]
            },
            {
              type: "input_value",
              name: "deviceMentorBit_OLEDScreenControl_FontSize"
            }
          ],
           colour : COLOR.screen
        });
        //this.appendDummyInput('OLEDScreen')
        //   .appendField('Mostrar')
        //   .appendField(new Blockly.FieldTextInput('Hello World'), 'deviceMentorBit_OLEDScreenControl_Message')
        //   .appendField('en pantalla OLED en la columna')
        //   .appendField(new Blockly.FieldNumber(0), 'deviceMentorBit_OLEDScreenControl_Column')
        //   .appendField('y fila')
        //   .appendField(new Blockly.FieldNumber(0), 'deviceMentorBit_OLEDScreenControl_Row')
        //   .appendField(new Blockly.FieldDropdown([
        //       ['LIMPIANDO ANTES DE MOSTRAR', '0'],
        //       ['DEJANDO MENSAJES ACTUALES', '1']
        //     ]), 'deviceMentorBit_OLEDScreenControl_Cleaning')
        //   .appendField('con tamaño de letra')
        //   .appendField(new Blockly.FieldNumber(1), 'deviceMentorBit_OLEDScreenControl_FontSize');
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Para controlar pantalla OLED');
        this.setHelpUrl('www.google.es');
      }
    }

    Blockly.Blocks.deviceMentorBit_OLEDScreenClear = {
      init: function() {
        this.jsonInit({
          message0 : Blockly.Msg.OLEDScreenClear
        });
        // this.appendDummyInput('OLEDScreenClear')
        //   .appendField('Limpiar pantalla OLED');
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Para limpiar pantalla OLED');
        this.setHelpUrl('www.google.es');
        this.setColour(COLOR.screen);
      }
    }

    ///////////////////////////////////////////////////////////////////////
    /// Display

    Blockly.Blocks.deviceMentorBit_Display7Control = {
      init: function() {
        this.jsonInit({
          message0 : Blockly.Msg.Display7Control,
          args0 : [
            {
              type: "input_value",
              name: "deviceMentorBit_Display7Control_Number",
            }
          ]
        });
        // this.appendDummyInput('Display7')
        //   .appendField('Mostrar')
        //   .appendField(new Blockly.FieldNumber(0,0, 9999), 'deviceMentorBit_Display7Control_Number')
        //   .appendField('en el display 7 segmentos');
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Para controlar display 7 segmentos');
        this.setHelpUrl('www.google.es');
        this.setColour(COLOR.display);
      }

    }

    Blockly.Blocks.deviceMentorBit_Display7Clear = {
      init: function() {
        this.jsonInit({
          message0 : Blockly.Msg.Display7Clear
        });
        // this.appendDummyInput('Display7Clear')
        //   .appendField('Limpiar display 7 segmentos');
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Para limpiar display 7 segmentos');
        this.setHelpUrl('www.google.es');
        this.setColour(COLOR.display);
      }
    }

    ///////////////////////////////////////////////////////////////////////
    /// Puertos

    // Blockly.Blocks.deviceMentorBit_PortsControl = {
    //   init: function(){
    //     this.jsonInit({
    //       message0: Blockly.Msg.PortsControl,
    //       args0 : [
    //         {
    //           type: "field_dropdown",
    //           name: "deviceMentorBit_PortsControl_Pin",
    //           options: [
    //             [ Blockly.Msg.deviceMentorBit_PortsControl_Pin_Opt1, '0'],
    //             [ Blockly.Msg.deviceMentorBit_PortsControl_Pin_Opt2, '1']
    //             [ Blockly.Msg.deviceMentorBit_PortsControl_Pin_Opt3, '2']
    //             [ Blockly.Msg.deviceMentorBit_PortsControl_Pin_Opt4, '3']
    //             [ Blockly.Msg.deviceMentorBit_PortsControl_Pin_Opt5, '4']
    //             [ Blockly.Msg.deviceMentorBit_PortsControl_Pin_Opt6, '5']
    //           ]
    //         },
    //         {
    //           type: "field_dropdown",
    //           name: "deviceMentorBit_PortsControl_Port",
    //           options: [
    //             [ Blockly.Msg.deviceMentorBit_PortsControl_Pin_Opt1, '0'],
    //             [ Blockly.Msg.deviceMentorBit_PortsControl_Pin_Opt2, '1']
    //             [ Blockly.Msg.deviceMentorBit_PortsControl_Pin_Opt3, '2']
    //           ]
    //         },
    //         {
    //           type: "field_dropdown",
    //           name: "deviceMentorBit_PortsControl_State",
    //           options: [
    //             [ Blockly.Msg.deviceMentorBit_PortsControl_State1, '0'],
    //             [ Blockly.Msg.deviceMentorBit_PortsControl_State2, '1']
    //           ]
    //         }
    //       ]
    //     });

    //     this.setInputsInline(true);
    //     this.setPreviousStatement(true, null);
    //     this.setNextStatement(true, null);
    //     this.setTooltip('Para controlar los puertos genéricos y establecerlos en encendido o apagado');
    //     this.setHelpUrl('www.google.es');
    //     this.setColour(COLOR.ports);
    //   }
    // }

    // Blockly.Blocks.deviceMentorBit_PortsRead = {
    //   init: function(){
    //     this.jsonInit({
    //       message0: Blockly.Msg.PortsRead,
    //       args0 : [
    //         {
    //           type: "field_dropdown",
    //           name: "deviceMentorBit_PortsRead_Pin",
    //           options: [
    //             [ Blockly.Msg.deviceMentorBit_PortsControl_Pin_Opt1, '0'],
    //             [ Blockly.Msg.deviceMentorBit_PortsControl_Pin_Opt2, '1']
    //             [ Blockly.Msg.deviceMentorBit_PortsControl_Pin_Opt3, '2']
    //             [ Blockly.Msg.deviceMentorBit_PortsControl_Pin_Opt4, '3']
    //             [ Blockly.Msg.deviceMentorBit_PortsControl_Pin_Opt5, '4']
    //             [ Blockly.Msg.deviceMentorBit_PortsControl_Pin_Opt6, '5']
    //           ]
    //         },
    //         {
    //           type: "field_dropdown",
    //           name: "deviceMentorBit_PortsRead_Port",
    //           options: [
    //             [ Blockly.Msg.deviceMentorBit_PortsControl_Pin_Opt1, '0'],
    //             [ Blockly.Msg.deviceMentorBit_PortsControl_Pin_Opt2, '1']
    //             [ Blockly.Msg.deviceMentorBit_PortsControl_Pin_Opt3, '2']
    //           ]
    //         }
    //       ],
    //       colour : COLOR.ports,
    //       extensions: ['output_number']
    //     });
    //   }
    // }

    // Blockly.Blocks.deviceMentorBit_PortsToPWM = {
    //   init: function(){
    //     this.jsonInit({
    //       message0: Blockly.Msg.PortsToPWM,
    //       args0 : [
    //         {
    //           type: "field_dropdown",
    //           name: "deviceMentorBit_PortsToPWM_Pin",
    //           options: [
    //             [ Blockly.Msg.deviceMentorBit_PortsControl_Pin_Opt1, '0'],
    //             [ Blockly.Msg.deviceMentorBit_PortsControl_Pin_Opt2, '1']
    //             [ Blockly.Msg.deviceMentorBit_PortsControl_Pin_Opt3, '2']
    //             [ Blockly.Msg.deviceMentorBit_PortsControl_Pin_Opt4, '3']
    //             [ Blockly.Msg.deviceMentorBit_PortsControl_Pin_Opt5, '4']
    //             [ Blockly.Msg.deviceMentorBit_PortsControl_Pin_Opt6, '5']
    //           ]
    //         },
    //         {
    //           type: "field_dropdown",
    //           name: "deviceMentorBit_PortsToPWM_Port",
    //           options: [
    //             [ Blockly.Msg.deviceMentorBit_PortsControl_Pin_Opt1, '0'],
    //             [ Blockly.Msg.deviceMentorBit_PortsControl_Pin_Opt2, '1']
    //             [ Blockly.Msg.deviceMentorBit_PortsControl_Pin_Opt3, '2']
    //           ]
    //         },
    //         {
    //           type: "input_field",
    //           name: "deviceMentorBit_PortstoPWM_Value"
    //         }
    //       ]
    //     });

    //     this.setInputsInline(true);
    //     this.setPreviousStatement(true, null);
    //     this.setNextStatement(true, null);
    //     this.setTooltip('Para mandar los datos de los puertos a PWM');
    //     this.setHelpUrl('www.google.es');
    //     this.setColour(COLOR.ports);
    //   }
    // }

    // Blockly.Blocks.deviceMentorBit_PortsReadAnalog = {
    //   init: function(){
    //     this.jsonInit({
    //       message0: Blockly.Msg.PortsReadAnalog,
    //       args0 : [
    //         {
    //           type: "field_dropdown",
    //           name: "deviceMentorBit_PortsRead_Pin",
    //           options: [
    //             [ Blockly.Msg.deviceMentorBit_PortsControl_Pin_Opt1, '0'],
    //             [ Blockly.Msg.deviceMentorBit_PortsControl_Pin_Opt2, '1']
    //             [ Blockly.Msg.deviceMentorBit_PortsControl_Pin_Opt3, '2']
    //             [ Blockly.Msg.deviceMentorBit_PortsControl_Pin_Opt4, '3']
    //             [ Blockly.Msg.deviceMentorBit_PortsControl_Pin_Opt5, '4']
    //             [ Blockly.Msg.deviceMentorBit_PortsControl_Pin_Opt6, '5']
    //           ]
    //         },
    //         {
    //           type: "field_dropdown",
    //           name: "deviceMentorBit_PortsRead_Port",
    //           options: [
    //             [ Blockly.Msg.deviceMentorBit_PortsControl_Pin_Opt1, '0'],
    //             [ Blockly.Msg.deviceMentorBit_PortsControl_Pin_Opt2, '1']
    //             [ Blockly.Msg.deviceMentorBit_PortsControl_Pin_Opt3, '2']
    //           ]
    //         }
    //       ],
    //       colour : COLOR.ports,
    //       extensions: ['output_number']
    //     })
    //   }
    // }


    ///////////////////////////////////////////////////////////////////////
    /// RTC y SD

    Blockly.Blocks.deviceMentorBit_RTCControl = {
      init: function() {
        //field_date
        this.jsonInit({
          message0: Blockly.Msg.RTCControl,
          args0: [
            {
              type : "input_value",
              name : "deviceMentorBit_RTCControl_Hour",
            },
            {
              type : "input_value",
              name : "deviceMentorBit_RTCControl_Minutes",
            },
            {
              type : "input_value",
              name : "deviceMentorBit_RTCControl_Day",
            },
            {
              type: 'field_dropdown',
              name: 'MODEL',
              options: [
                ['ENERO', '1'],
                ['FEBRERO', '2'],
                ['MARZO', '3'],
                ['ABRIL', '4'],
                ['MAYO', '5'],
                ['JUNIO', '6'],
                ['JULIO', '7'],
                ['AGOSTO', '8'],
                ['SEPTIEMBRE', '9'],
                ['OCTUBRE', '10'],
                ['NOVIEMBRE', '11'],
                ['DICIEMBRE', '12']
              ]
            },
            {
              type : "input_value",
              name : "deviceMentorBit_RTCControl_Year",
            },
          ]
        })
        // this.appendDummyInput('RTC')
        //   .appendField('Ajustar hora del RTC a las')
        //   .appendField(new Blockly.FieldNumber(0,0, 23), 'deviceMentorBit_RTCControl_Hour')
        //   .appendField(':')
        //   .appendField(new Blockly.FieldNumber(0,0, 59), 'deviceMentorBit_RTCControl_Minutes')
        //   .appendField('del')
        //   .appendField(new Blockly.FieldNumber(1,1, 31), 'deviceMentorBit_RTCControl_Day')
        //   .appendField('/')
        //   .appendField(new Blockly.FieldDropdown([
        //     ['ENERO', '1'],
        //     ['FEBRERO', '2'],
        //     ['MARZO', '3'],
        //     ['ABRIL', '4'],
        //     ['MAYO', '5'],
        //     ['JUNIO', '6'],
        //     ['JULIO', '7'],
        //     ['AGOSTO', '8'],
        //     ['SEPTIEMBRE', '9'],
        //     ['OCTUBRE', '10'],
        //     ['NOVIEMBRE', '11'],
        //     ['DICIEMBRE', '12']
        //   ]), 'deviceMentorBit_RTCControl_Month')
        //   .appendField('/')
        //   .appendField(new Blockly.FieldNumber(0,0, Infinity), 'deviceMentorBit_RTCControl_Year');
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Para definir la fecha del RTC');
        this.setHelpUrl('www.google.es');
        this.setColour(COLOR.others);
      }
    }

    Blockly.Blocks.deviceMentorBit_RTCRead = {
      init: function() {
        this.jsonInit({
          message0: Blockly.Msg.RTCRead,
          colour: COLOR.others,
          extensions: ['output_string']
        });
      }
    }

    Blockly.Blocks.deviceMentorBit_SDControl = {
      init: function(){
        this.jsonInit({
          message0: Blockly.Msg.SDControl,
          args0: [
            {
              type: "input_value",
              name : "deviceMentorBit_SDControl_Message",
            },
            {
              type: "input_value",
              name: "deviceMentorBit_SDControl_File"
            },
          ],
           colour : COLOR.others
        });
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Para guardar texto en un fichero en la tarjeta SD');
        this.setHelpUrl('www.google.es');
      }
    }

    Blockly.Blocks.deviceMentorBit_SDRead = {
      init: function(){
        this.jsonInit({
          message0: Blockly.Msg.SDRead,
          args0: [
            {
              type: "input_value",
              name: "deviceMentorBit_SDRead_File",
            }
          ],
           colour : COLOR.others,
           extensions: ['output_string']
           
        });
      }
    }

    return Blockly;
}

exports = registerBlocks;
