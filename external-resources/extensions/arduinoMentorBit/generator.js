/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {

    function defineHeaders(){
        Blockly.Arduino.definitions_.define_Wire = '#include <Wire.h>';
        Blockly.Arduino.definitions_.define_SoftwareSerial = '#include <SoftwareSerial.h>';
    }

    Blockly.Arduino.deviceMentorBit_LEDControl = function(){
        defineHeaders();
        const dropdown_led = this.getFieldValue('deviceMentorBit_LEDControl_LED');
        const dropdown_estado = this.getFieldValue('deviceMentorBit_LEDControl_LED_STATE');
        
        Blockly.Arduino.setups_[`setup_input_${dropdown_led}`] = `pinMode(${dropdown_led}, OUTPUT);`;
        const code = 
`
digitalWrite(${dropdown_led}, ${dropdown_estado});
`;
        return code;
    }
   
    Blockly.Arduino.deviceMentorBit_LEDRGBControl = function(){
        Blockly.Arduino.definitions_.define_constants_LEDRGB = 
`
uint8_t rgbRojo = 8;
uint8_t rgbVerde = 9;
uint8_t rgbAzul = 10;
`;

        Blockly.Arduino.setups_[`deviceMentorBit_LEDRGBControl`] = 
`
pinMode(rgbRojo, OUTPUT);
pinMode(rgbVerde, OUTPUT);
pinMode(rgbAzul, OUTPUT);
`;

        const value_led_red = this.getFieldValue('deviceMentorBit_LEDRGBControl_Red');
        const value_led_green = this.getFieldValue('deviceMentorBit_LEDRGBControl_Green');
        const value_led_blue = this.getFieldValue('deviceMentorBit_LEDRGBControl_Blue');
        
        const code = 
`
analogWrite(rgbRojo, ${value_led_red});
analogWrite(rgbVerde, ${value_led_green});
analogWrite(rgbAzul, ${value_led_blue});
`;

        return code;
    }

    Blockly.Arduino.deviceMentorBit_ZumbadorControl = function(){
        defineHeaders();
        Blockly.Arduino.definitions_.define_constants_Zumbador = `uint8_t zumbador = 25;`;

        const value_zumb_freq = this.getFieldValue('deviceMentorBit_ZumbadorControl_Freq');
        const value_zumb_time = this.getFieldValue('deviceMentorBit_ZumbadorControl_Duration');

        const code = 
`
tone(zumbador, ${value_zumb_freq});
delay(${value_zumb_time});
noTone(zumbador);
`;

        return code;
        
    }

    Blockly.Arduino.deviceMentorBit_PulsadorControl = function(){
        defineHeaders();
        Blockly.Arduino.definitions_.define_constants_Pulsador = 
`
uint8_t digitalPinUp = 22;
uint8_t digitalPinDown = 23;
uint8_t analogPinUp = A3;
uint8_t analogPinDown = A2;
`;
        Blockly.Arduino.setups_[`deviceMentorBit_SerialInit`] = `Serial.begin(115200);`;
        
        const value_pulsador_signal = this.getFieldValue('deviceMentorBit_PulsadorControl_Señal');
        const value_pulsador_stateSignal = this.getFieldValue('deviceMentorBit_PulsadorControl_EstadoSeñal');

        const read = value_pulsador_signal == '1' ? 'digitalRead' : 'analogRead';
        const pin = value_pulsador_signal == '1'  
            ? value_pulsador_stateSignal == '0' ? 'digitalPinDown' : 'digitalPinUp'
            : value_pulsador_stateSignal == '0' ? 'analogPinDown' : 'analogPinUp';
        const code = `${read}(${pin})`;

        return [code, Blockly.Arduino.ORDER_ATOMIC];
    }

    Blockly.Arduino.deviceMentorBit_PotenciometroControl = function(){
        defineHeaders();
        Blockly.Arduino.definitions_.define_constants_Pulsador = `int8_t potenciometro = A0;`;
        Blockly.Arduino.setups_[`deviceMentorBit_SerialInit`] = `Serial.begin(115200);`;

        const code = `analogRead(potenciometro)`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    }

    ///////////////////////////////////////////////////////////////////////
    /// Sensores
    
    Blockly.Arduino.deviceMentorBit_LDRControl = function(){
        defineHeaders();
        Blockly.Arduino.definitions_.define_constants_Pulsador = `uint8_t ldr = A1;`;
        Blockly.Arduino.setups_[`deviceMentorBit_SerialInit`] = `Serial.begin(115200);`;

        const code = `analogRead(ldr)`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    }

    Blockly.Arduino.deviceMentorBit_MQControl = function(){
        defineHeaders();
        Blockly.Arduino.definitions_.define_constants_Pulsador = `uint8_t mq = A4;`;
        Blockly.Arduino.setups_[`deviceMentorBit_SerialInit`] = `Serial.begin(115200);`;

        const code = `analogRead(mq)`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    }

    Blockly.Arduino.deviceMentorBit_DHTControl = function(){
        defineHeaders();
        Blockly.Arduino.definitions_.define_library_DHT = `#include "DHT.h"`;
        Blockly.Arduino.definitions_.define_constants_DHT = `DHT myDHT(24, DHT11);`;

        Blockly.Arduino.setups_[`deviceMentorBit_DHTInit`] = `myDHT.begin();`;
        Blockly.Arduino.setups_[`deviceMentorBit_SerialInit`] = `Serial.begin(115200);`;

        const value_dht_lectura = this.getFieldValue('deviceMentorBit_DHTControl_Unit');

        const lectura = value_dht_lectura == '1' ? 'readTemperature' : 'readHumidity';

        const code = `myDHT.${lectura}()`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    }

    Blockly.Arduino.deviceMentorBit_UltraSonidosControl = function(){
        defineHeaders();
        Blockly.Arduino.definitions_.define_constants_UltraSonidos = `uint8_t echo = 2;\nuint8_t trigger = 26;`
        Blockly.Arduino.definitions_.define_function_obtenerDistancia_UltraSonidos = 
`
uint16_t obtenerDistancia(){
    digitalWrite(trigger, LOW);
    delayMicroseconds(4);
    digitalWrite(trigger, HIGH);
    delayMicroseconds(10);
    digitalWrite(trigger, LOW);

    long duracion = pulseIn(echo, HIGH);
    long distancia = duracion * 10 / 292 / 2;
    return distancia;
}`;

        Blockly.Arduino.setups_[`deviceMentorBit_SerialInit`] = `Serial.begin(115200);`;
        Blockly.Arduino.setups_[`deviceMentorBit_UltraSonidosInit`] = `pinMode(echo, INPUT);pinMode(trigger, OUTPUT);`;

        const code = `obtenerDistancia()`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    }

    Blockly.Arduino.deviceMentorBit_DS18B20Control = function(){
        defineHeaders();
        Blockly.Arduino.definitions_.define_library_DHT = `#include "DallasTemperature.h"`;
        Blockly.Arduino.definitions_.define_constants_DS18B20 = `DallasTemperature myDS18B20(new OneWire(27));`;
        Blockly.Arduino.definitions_.define_function_obtenerTemperatura_DS18B20 = 
`
uint16_t obtenerTemperatura(){
    myDS18B20.requestTemperatures();
    return myDS18B20.getTempCByIndex(0);
}`;

        Blockly.Arduino.setups_[`deviceMentorBit_SerialInit`] = `Serial.begin(115200);`;

        const code = `obtenerTemperatura()`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    }

    ///////////////////////////////////////////////////////////////////////
    /// Motores

    Blockly.Arduino.deviceMentorBit_MotorDCControl = function(){
        defineHeaders();
        Blockly.Arduino.definitions_.define_constants_MotorDC = `uint8_t enable = 4;\nuint8_t dcinput1 = 28;\nuint8_t dcinput2 = 29;`;
        Blockly.Arduino.setups_[`deviceMentorBit_MotorDCInit`] = `pinMode(enable, OUTPUT);\npinMode(dcinput1, OUTPUT);\npinMode(dcinput2, OUTPUT);`
        
        const intensidad = this.getFieldValue("deviceMentorBit_MotorDCControl_Intensity");
        const sentido = this.getFieldValue("deviceMentorBit_MotorDCControl_Orientation");
        const digitalWrites = sentido == '1' 
            ? 
`
digitalWrite(dcinput1, HIGH);
digitalWrite(dcinput2, LOW);
`
            : 
`
digitalWrite(dcinput1, LOW);
digitalWrite(dcinput2, HIGH);
`
        const code = 
`
${digitalWrites}
analogWrite(enable, ${intensidad});
`;
        return code;
    }

    Blockly.Arduino.deviceMentorBit_MotorStepsControl = function(){
        defineHeaders();
        Blockly.Arduino.definitions_.define_constants_MotorSteps = 
`
uint8_t bobina1 = 30;
uint8_t bobina2 = 31;
uint8_t bobina3 = 32;
uint8_t bobina4 = 33;
uint8_t secuencia[8][4] = {
    {1, 0, 0, 0},
    {1, 1, 0, 0},
    {0, 1, 0, 0},
    {0, 1, 1, 0},
    {0, 0, 1, 0},
    {0, 0, 1, 1},
    {0, 0, 0, 1},
    {1, 0, 0, 1}
};
`;
        Blockly.Arduino.setups_[`deviceMentorBit_MotorStepsInit`] = 
`
pinMode(bobina1, OUTPUT);
pinMode(bobina2, OUTPUT);
pinMode(bobina3, OUTPUT);
pinMode(bobina4, OUTPUT);
`;


        const steps = this.getFieldValue("deviceMentorBit_MotorStepsControl_Steps");
        const sentido = this.getFieldValue("deviceMentorBit_MotorStepsControl_Orientation");

        const digitalWrites = sentido == '1' 
            ? 
`
digitalWrite(bobina1, secuencia[j][0]);
digitalWrite(bobina2, secuencia[j][1]);
digitalWrite(bobina3, secuencia[j][2]);
digitalWrite(bobina4, secuencia[j][3]);
delay(1);
`
            :
`
digitalWrite(bobina1, secuencia[j][3]);
digitalWrite(bobina2, secuencia[j][2]);
digitalWrite(bobina3, secuencia[j][1]);
digitalWrite(bobina4, secuencia[j][0]);
delay(1);
`;

        const code = 
`
for(uint16_t i = 0 ; i < ${steps} ; i++) {
    for(uint16_t j = 0 ; j < 8 ; j++) {
        ${digitalWrites}
    }
}
digitalWrite(bobina1, LOW);
digitalWrite(bobina2, LOW);
digitalWrite(bobina3, LOW);
digitalWrite(bobina4, LOW);
`;
        return code;
    }

    Blockly.Arduino.deviceMentorBit_MotorServoControl = function(){
        defineHeaders();
        Blockly.Arduino.definitions_.define_library_Servo = `#include "Servo.h"`;
        Blockly.Arduino.definitions_.define_constants_MotorServo = `Servo myServo;`;
        Blockly.Arduino.setups_[`deviceMentorBit_MotorServoInit`] = `myServo.attach(3);`


        const degrees = this.getFieldValue("deviceMentorBit_MotorServoControl_Degrees");
        const code = 
`
myServo.write(${degrees});
`;
        return code;
    }

    ///////////////////////////////////////////////////////////////////////
    /// Screens

    Blockly.Arduino.deviceMentorBit_LCDScreenControl = function(block){
        defineHeaders();
        Blockly.Arduino.definitions_.define_library_LiquidCrystal_I2C = `#include "LiquidCrystal_I2C.h"`;
        Blockly.Arduino.definitions_.define_constants_LCDScreen = `LiquidCrystal_I2C lcd(0x3F, 16, 2);`;

        Blockly.Arduino.setups_[`deviceMentorBit_LCDScreenInit`] = 
`
lcd.init();
lcd.backlight();
`;
        const order = Blockly.Arduino.ORDER_UNARY_PREFIX;
        const message = Blockly.Arduino.valueToCode(block, 'deviceMentorBit_LCDScreenControl_Message', order) || '';
        const col = Blockly.Arduino.valueToCode(block, 'deviceMentorBit_LCDScreenControl_Column', order);
        const row = Blockly.Arduino.valueToCode(block, 'deviceMentorBit_LCDScreenControl_Row', order);
        const cleaning = this.getFieldValue("deviceMentorBit_LCDScreenControl_Cleaning");

        const code_clean = cleaning == '0'
        ? 'lcd.clear();'
        : '';

        const code = 
`
${code_clean}
lcd.setCursor(${col}, ${row});
lcd.print(${message});
`;

        return code;
    }

    Blockly.Arduino.deviceMentorBit_LCDScreenClear = function(){
        defineHeaders();
         Blockly.Arduino.definitions_.define_library_LiquidCrystal_I2C = `#include "LiquidCrystal_I2C.h"`;
        Blockly.Arduino.definitions_.define_constants_LCDScreen = `LiquidCrystal_I2C lcd(0x3F, 16, 2);`;

        Blockly.Arduino.setups_[`deviceMentorBit_LCDScreenInit`] = 
`
lcd.init();
`;
        const code =
`
lcd.clear();
lcd.noDisplay();
lcd.noBacklight();
`
        return code;
    }
    
    Blockly.Arduino.deviceMentorBit_OLEDScreenControl = function(block){
        defineHeaders();
        Blockly.Arduino.definitions_.define_library_SPI = `#include "SPI.h"`;
        Blockly.Arduino.definitions_.define_library_Adafruit_GFX = `#include "Adafruit_GFX.h"`;
        Blockly.Arduino.definitions_.define_library_splash = `#include "splash.h"`;
        Blockly.Arduino.definitions_.define_library_Adafruit_SSD1306 = `#include "Adafruit_SSD1306.h"`;

        Blockly.Arduino.definitions_.define_constants_OLEDScreen = `Adafruit_SSD1306 oled(-1);`;
        Blockly.Arduino.setups_[`deviceMentorBit_LCDScreenInit`] =
`
oled.begin(SSD1306_SWITCHCAPVCC, 0x3C);
oled.clearDisplay();
`;

        const order = Blockly.Arduino.ORDER_UNARY_PREFIX;
        const message = Blockly.Arduino.valueToCode(block, "deviceMentorBit_OLEDScreenControl_Message", order) || '';
        const col = this.getFieldValue("deviceMentorBit_OLEDScreenControl_Column");
        const row = this.getFieldValue("deviceMentorBit_OLEDScreenControl_Row");
        const cleaning = this.getFieldValue("deviceMentorBit_OLEDScreenControl_Cleaning");
        const fontSize = this.getFieldValue("deviceMentorBit_OLEDScreenControl_FontSize");

        const code =
`
${cleaning == '0' ? 'oled.clearDisplay();' : ''}
oled.setTextSize(${fontSize});
oled.setTextColor(SSD1306_WHITE);
oled.setCursor(${col}, ${row});
oled.println(${message});
oled.display();
`;
        return code;
    }

    Blockly.Arduino.deviceMentorBit_OLEDScreenClear = function(){
        defineHeaders();
        Blockly.Arduino.definitions_.define_library_SPI = `#include "SPI.h"`;
        Blockly.Arduino.definitions_.define_library_Adafruit_GFX = `#include "Adafruit_GFX.h"`;
        Blockly.Arduino.definitions_.define_library_splash = `#include "splash.h"`;
        Blockly.Arduino.definitions_.define_library_Adafruit_SSD1306 = `#include "Adafruit_SSD1306.h"`;

        Blockly.Arduino.definitions_.define_constants_OLEDScreen = `Adafruit_SSD1306 oled(-1);`;
        Blockly.Arduino.setups_[`deviceMentorBit_LCDScreenInit`] = `oled.begin(SSD1306_SWITCHCAPVCC, 0x3C);\n`;
        const code = `oled.clearDisplay();\noled.display();\n`;

        return code;
    }

    ///////////////////////////////////////////////////////////////////////
    /// Displays

    Blockly.Arduino.deviceMentorBit_Display7Control = function(block){
        defineHeaders();
        Blockly.Arduino.definitions_.define_library_Adafruit_GFX = `#include "Adafruit_GFX.h"`;
        Blockly.Arduino.definitions_.define_library_Adafruit_LEDBackpack = `#include "Adafruit_LEDBackpack.h"`;

        Blockly.Arduino.definitions_.define_constants_Display7Control = 
`
Adafruit_7segment myDisplay;
uint8_t dots[] = {false, false, false, false};
`;
        Blockly.Arduino.definitions_.define_function_imprimirDisplay = 
`
void imprimirDisplay(char valor)
{
    myDisplay.clear();
    myDisplay.writeDigitAscii(3, valor);
    myDisplay.writeDisplay();
}
void imprimirDisplay(String valor)
{

    myDisplay.clear();

    if(valor.length() > 4)
    {

        valor = valor.substring(0, 4);

    }

    uint8_t correccionPosicion = 4 - valor.length();

    for(uint8_t i = 0 ; i < valor.length() ; i++)
    {

        myDisplay.writeDigitAscii(i + correccionPosicion, valor[i], dots[i]);

    }

    myDisplay.writeDisplay();
    dots[0] = false;
    dots[1] = false;
    dots[2] = false;
    dots[3] = false;

}
void imprimirDisplay(int valor)
{
    String valorString = String(valor);
    imprimirDisplay(valorString);

}

void imprimirDisplay(double valor)
{
    String valorString = String(valor, 3);

    uint8_t indiceComa = valorString.indexOf('.');
    uint8_t decimales = (valorString.length() - indiceComa) - 1;

    String parteEntera = valorString.substring(0, indiceComa);
    String parteDecimal = valorString.substring(indiceComa + 1);

    valorString = parteEntera + parteDecimal;

    if(valorString.length() > 4)
    {
        valorString = valorString.substring(0, 4);
    }
    dots[indiceComa - 1] = true;
    imprimirDisplay(valorString);
}
`;
             
        Blockly.Arduino.setups_[`deviceMentorBit_Display7Control_Number`] = `myDisplay.begin(0x77);`;
        
        const order = Blockly.Arduino.ORDER_UNARY_PREFIX;
        const number = Blockly.Arduino.valueToCode(block, "deviceMentorBit_Display7Control_Number", order);
        const code = `imprimirDisplay(${number});\n`;

        return code;
    }

    Blockly.Arduino.deviceMentorBit_Display7Clear = function(){
        defineHeaders();
        Blockly.Arduino.definitions_.define_library_Adafruit_GFX = `#include "Adafruit_GFX.h"`;
        Blockly.Arduino.definitions_.define_library_Adafruit_LEDBackpack = `#include "Adafruit_LEDBackpack.h"`;

        Blockly.Arduino.definitions_.define_constants_Display7Control = 'Adafruit_7segment myDisplay;';
        Blockly.Arduino.setups_[`deviceMentorBit_Display7Control_Number`] = `myDisplay.begin(0x77);`;
        const code = `myDisplay.clear();\n`;

        return code;
    }

    Blockly.Arduino.deviceMentorBit_RTCControl = function(block){
        defineHeaders();
        Blockly.Arduino.definitions_.define_library_RTClib = `#include "RTClib.h"`;
        Blockly.Arduino.definitions_.define_constants_RTCControl = 'RTC_DS1307 rtc;';
        Blockly.Arduino.setups_[`deviceMentorBit_RTCInit`] =  'rtc.begin();';


        const order = Blockly.Arduino.ORDER_UNARY_PREFIX;
        const year =Blockly.Arduino.valueToCode(block, 'deviceMentorBit_RTCControl_Year', order);
        const month = this.getFieldValue('deviceMentorBit_RTCControl_Month');
        const dayMonth = Blockly.Arduino.valueToCode(block, 'deviceMentorBit_RTCControl_Day', order);
        const hour = Blockly.Arduino.valueToCode(block, 'deviceMentorBit_RTCControl_Hour', order);
        const minute = Blockly.Arduino.valueToCode(block, 'deviceMentorBit_RTCControl_Minutes', order);

        const code = `rtc.adjust(
          DateTime(
              ${year},
              ${month},
              ${dayMonth},
              ${hour},
              ${minute},
              0
          )
        );\n`

        return code;
    }

    Blockly.Arduino.deviceMentorBit_RTCRead = function(){
        defineHeaders();
        Blockly.Arduino.definitions_.define_library_RTClib = `#include "RTClib.h"`;
        Blockly.Arduino.definitions_.define_constants_RTCControl = 'RTC_DS1307 rtc;';
        Blockly.Arduino.setups_[`deviceMentorBit_RTCInit`] =  'rtc.begin();';

        const code = `String(rtc.now().timestamp(DateTime::TIMESTAMP_FULL))`;

        return [code, Blockly.Arduino.ORDER_ATOMIC];
    }

    Blockly.Arduino.deviceMentorBit_SDControl = function(block){
        defineHeaders();
        Blockly.Arduino.definitions_.define_library_SD = `#include "SD.h"`;
        Blockly.Arduino.definitions_.define_function_saveInSD = 
`
void saveInSD(String fileName, String message){
    fileName += ".txt";
    File data_file = SD.open(fileName, FILE_WRITE);
    if(data_file) {
        data_file.println(message);
        delay(100);
        data_file.close();
    }
}
`;

        Blockly.Arduino.setups_[`deviceMentorBit_SDInit`] = `SD.begin(A6);`; 


        const order = Blockly.Arduino.ORDER_UNARY_PREFIX;
        const message = Blockly.Arduino.valueToCode(block, "deviceMentorBit_SDControl_Message", order);
        const file = Blockly.Arduino.valueToCode(block, "deviceMentorBit_SDControl_File", order);

        const code = `saveInSD(${message}, ${file});\n`;

        return code;
    }

    Blockly.Arduino.deviceMentorBit_SDRead = function(block){
        defineHeaders();
        Blockly.Arduino.definitions_.define_library_SD = `#include "SD.h"`;
        Blockly.Arduino.definitions_.define_function_readFromSD =
`
String readFromSD(String filename) {

    filename += ".txt";
    File data_file = SD.open(filename, FILE_READ);
    String data_from_file = "";

    if(data_file) {

        char incoming_char = NULL;

        while(data_file.available()) {
            incoming_char = data_file.read();
            data_from_file += incoming_char;
        }

        data_file.close();
        data_from_file = data_from_file.substring(0, data_from_file.length() - 2);
        int index_last_newline = data_from_file.lastIndexOf("\\n");
        data_from_file = data_from_file.substring(index_last_newline + 1);
    }

    return data_from_file;

}
`;
        Blockly.Arduino.setups_[`deviceMentorBit_SDInit`] = `SD.begin(A6);`; 

        const order = Blockly.Arduino.ORDER_UNARY_PREFIX;
        const file = Blockly.Arduino.valueToCode(block, "deviceMentorBit_SDRead_File", order);


        const code = `readFromSD(${file})`;

        return [code, Blockly.Arduino.ORDER_ATOMIC];
    }
    return Blockly;
}


exports = registerGenerators;
