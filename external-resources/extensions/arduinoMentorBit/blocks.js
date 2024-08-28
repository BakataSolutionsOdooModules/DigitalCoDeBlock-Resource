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
      others : "#ffd740",
    }


    Blockly.Blocks.deviceMentorBit_LEDControl = {
      init: function() {
        this.jsonInit({
          "message0": '%2 LED de color %1',
          "args0": [
            {
              "type": "field_dropdown",
              "name": "deviceMentorBit_LEDControl_LED",
              "options": [
                ['Rojo', '5'],
                ['Verde', '6'],
                ['Azul', '7']
              ]
            },
            {
              "type": "field_dropdown",
              "name": "deviceMentorBit_LEDControl_LED_STATE",
              "options": [
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
          "message0": 'Fijar LED RGB con Rojo %1, Verde %2 y Azul %3',
          "args0": [
            {
              "type": "field_slider",
              "name": "deviceMentorBit_LEDRGBControl_Red",
              "value": "0",
              "precision": 1,
              "min": "0",
              "max": "255"
            },
            {
              "type": "field_slider",
              "name": "deviceMentorBit_LEDRGBControl_Green",
              "value": "0",
              "precision": 1,
              "min": "0",
              "max": "255"
            },
            {
              "type": "field_slider",
              "name": "deviceMentorBit_LEDRGBControl_Blue",
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
        this.appendDummyInput('Zumbador')
          .appendField('Hacer sonar zumbador con frecuencia')
          .appendField(new Blockly.FieldNumber(0, 0, Infinity, 1), 'deviceMentorBit_ZumbadorControl_Freq')
          .appendField('durante')
          .appendField(new Blockly.FieldNumber(0, 0, Infinity, 1), 'deviceMentorBit_ZumbadorControl_Duration')
          .appendField('millisegundos');
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
          message0: 'Lectura pulsador conectado a pin %1 en configuración normalmente %2',
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
          message0: 'Lectura potenciometro',
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
          message0: 'Lectura del LDR',
          colour: COLOR.sensor,
          extensions: ['output_number']
        });
      }
    }

    Blockly.Blocks.deviceMentorBit_MQControl = {
      init: function() {
        this.jsonInit({
          message0: 'Lectura del MQ',
          colour: COLOR.sensor,
          extensions: ['output_number']
        });
      }
    }
    
    Blockly.Blocks.deviceMentorBit_DHTControl = {
      init: function() {
        this.jsonInit({
          message0: 'Lectura de %1 del DHT',
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
          message0: 'Distancia del ultrasonidos HC-SR04 en cm',
          colour: COLOR.sensor,
          extensions: ['output_number']
        });
      }
    }

    Blockly.Blocks.deviceMentorBit_DS18B20Control = {
      init: function() {
        this.jsonInit({
          message0: 'Lectura del DS18B20',
          colour: COLOR.sensor,
          extensions: ['output_number']
        });
      }
    }

    ///////////////////////////////////////////////////////////////////////
    /// Motores

    Blockly.Blocks.deviceMentorBit_MotorDCControl = {
      init: function() {

        this.appendDummyInput('MotorDC')
          .appendField('Mover motor de Corriente Continua con intensidad')
          .appendField(new Blockly.FieldNumber(0, -Infinity, Infinity), 'deviceMentorBit_MotorDCControl_Intensity')
          .appendField('en sentido')
          .appendField(new Blockly.FieldDropdown([
              ['HORARIO', '1'],
              ['ANTIHORARIO', '2']
            ]), 'deviceMentorBit_MotorDCControl_Orientation');
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
        this.appendDummyInput('MotorSteps')
          .appendField('Mover motor de Paso a Paso')
          .appendField(new Blockly.FieldNumber(0, -Infinity, Infinity), 'deviceMentorBit_MotorStepsControl_Steps')
          .appendField('pasos en sentido')
          .appendField(new Blockly.FieldDropdown([
              ['HORARIO', '1'],
              ['ANTIHORARIO', '2']
            ]), 'deviceMentorBit_MotorStepsControl_Orientation');
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Para controlar motor de corriente continua');
        this.setHelpUrl('www.google.es');
        this.setColour(COLOR.engine);
      }
    }

    Blockly.Blocks.deviceMentorBit_MotorServoControl = {
      init: function() {
        this.appendDummyInput('MotorServo')
          .appendField('Mover motor servo')
          .appendField(new Blockly.FieldNumber(0, -Infinity, Infinity), 'deviceMentorBit_MotorServoControl_Degrees')
          .appendField('grados')
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
          "message0": 'Mostrar %1 en pantalla LCD en la columna %2 y fila %3 %4',
          "args0": [
            {
              "type": "input_value",
              "name": "deviceMentorBit_LCDScreenControl_Message",
            },
            {
              "type": "field_number",
              "name": "deviceMentorBit_LCDScreenControl_Column"
            },
            {
              "type": "field_number",
              "name": "deviceMentorBit_LCDScreenControl_Row"
            },
            {
              "type": "field_dropdown",
              "name": "deviceMentorBit_LCDScreenControl_Cleaning",
              "options": [
                ['LIMPIANDO ANTES DE MOSTRAR', '0'],
                ['DEJANDO MENSAJES ACTUALES', '1']
              ]
            },
          ],
           "colour" : COLOR.screen
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
        this.appendDummyInput('LCDScreenClear')
          .appendField('Limpiar pantalla LCD');
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
          "message0": 'Mostrar %1 en pantalla OLED en la columna %2 y fila %3 %4, con tamaño de letra %5',
          "args0": [
            {
              "type": "input_value",
              "name": "deviceMentorBit_OLEDScreenControl_Message",
            },
            {
              "type": "field_number",
              "name": "deviceMentorBit_OLEDScreenControl_Column"
            },
            {
              "type": "field_number",
              "name": "deviceMentorBit_OLEDScreenControl_Row"
            },
            {
              "type": "field_dropdown",
              "name": "deviceMentorBit_OLEDScreenControl_Cleaning",
              "options": [
                ['LIMPIANDO ANTES DE MOSTRAR', '0'],
                ['DEJANDO MENSAJES ACTUALES', '1']
              ]
            },
            {
              "type": "field_number",
              "name": "deviceMentorBit_OLEDScreenControl_FontSize"
            }
          ],
           "colour" : COLOR.screen
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
        this.appendDummyInput('OLEDScreenClear')
          .appendField('Limpiar pantalla OLED');
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
        this.appendDummyInput('Display7')
          .appendField('Mostrar')
          .appendField(new Blockly.FieldNumber(0,0, 9999), 'deviceMentorBit_Display7Control_Number')
          .appendField('en el display 7 segmentos');
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
        this.appendDummyInput('Display7Clear')
          .appendField('Limpiar display 7 segmentos');
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Para limpiar display 7 segmentos');
        this.setHelpUrl('www.google.es');
        this.setColour(COLOR.display);
      }
    }
    
    ///////////////////////////////////////////////////////////////////////
    /// RTC y SD

    Blockly.Blocks.deviceMentorBit_RTCControl = {
      init: function() {
        //field_date
        this.appendDummyInput('RTC')
          .appendField('Ajustar hora del RTC a las')
          .appendField(new Blockly.FieldNumber(0,0, 23), 'deviceMentorBit_RTCControl_Hour')
          .appendField(':')
          .appendField(new Blockly.FieldNumber(0,0, 59), 'deviceMentorBit_RTCControl_Minutes')
          .appendField('del')
          .appendField(new Blockly.FieldNumber(1,1, 31), 'deviceMentorBit_RTCControl_Day')
          .appendField('/')
          .appendField(new Blockly.FieldDropdown([
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
          ]), 'deviceMentorBit_RTCControl_Month')
          .appendField('/')
          .appendField(new Blockly.FieldNumber(0,0, Infinity), 'deviceMentorBit_RTCControl_Year');
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
          message0: 'Obtener fecha y hora del RTC',
          colour: COLOR.others,
          extensions: ['output_string']
        });
      }
    }

    Blockly.Blocks.deviceMentorBit_SDControl = {
      init: function(){
        this.jsonInit({
          message0: 'Guardar %1 en archivo %2 de la tarjeta MicroSD',
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
          "message0": 'Leer del archivo %1 de la tarjeta MicroSD',
          "args0": [
            {
              "type": "input_value",
              "name": "deviceMentorBit_SDRead_File",
            }
          ],
           "colour" : COLOR.others,
           extensions: ['output_string']
           
        });
      }
    }

    return Blockly;
}

exports = registerBlocks;
