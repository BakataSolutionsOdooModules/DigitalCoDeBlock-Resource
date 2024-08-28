/*
  Ejemplo [PulsadoresConLEDsYZumbador] para comprobar el funcionamiento de
  los pulsadores, los LEDs y el Zumbador en el Escornabot
*/

// Incluimos la libreria con funciones y variables para Escornabot
#include "Escornabot-Library.h"

/*
    Inicializamos la clase en la variable de nombre Escornabot.
    Como en este ejemplo no vamos a utilizar los motores, podemos
    pasar el argumento para el constructor de la clase Escornabot
    con cualquier valor.
*/
Escornabot Escornabot(10);

// Rutina de Setup
void setup() {

    // En el setup no es necesario hacer nada más que inicializar la
    // comunicación Serial
    Serial.begin(9600);

}

void loop() {

    int lectura_pulsador = analogRead(Escornabot.entrada_pulsadores);

    // Comprobamos la lectura dentro del rango del boton S1
    if (
      (Escornabot.S1_valor_minimo < lectura_pulsador) &&
      (lectura_pulsador < Escornabot.S1_valor_maximo)
    ) {
        Serial.println("Se ha pulsado el boton S1.");
        digitalWrite(Escornabot.LED_1, HIGH);
        tone(Escornabot.zumbador, 500);
        delay(500);
        digitalWrite(Escornabot.LED_1, LOW);
        noTone(Escornabot.zumbador);
    }

    // Comprobamos la lectura dentro del rango del boton S2
    else if (
      (Escornabot.S2_valor_minimo < lectura_pulsador) &&
      (lectura_pulsador < Escornabot.S2_valor_maximo)
    ) {
        Serial.println("Se ha pulsado el boton S2.");
        digitalWrite(Escornabot.LED_2, HIGH);
        tone(Escornabot.zumbador, 1000);
        delay(500);
        digitalWrite(Escornabot.LED_2, LOW);
        noTone(Escornabot.zumbador);
    }

    // Comprobamos la lectura dentro del rango del boton S3
    else if (
      (Escornabot.S3_valor_minimo < lectura_pulsador) &&
      (lectura_pulsador < Escornabot.S3_valor_maximo)
    ) {
        Serial.println("Se ha pulsado el boton S3.");
        digitalWrite(Escornabot.LED_3, HIGH);
        tone(Escornabot.zumbador, 2000);
        delay(500);
        digitalWrite(Escornabot.LED_3, LOW);
        noTone(Escornabot.zumbador);
    }

    // Comprobamos la lectura dentro del rango del boton S4
    else if (
      (Escornabot.S4_valor_minimo < lectura_pulsador) &&
      (lectura_pulsador < Escornabot.S4_valor_maximo)
    ) {
        Serial.println("Se ha pulsado el boton S4.");
        digitalWrite(Escornabot.LED_4, HIGH);
        tone(Escornabot.zumbador, 3000);
        delay(500);
        digitalWrite(Escornabot.LED_4, LOW);
        noTone(Escornabot.zumbador);
    }

    // Comprobamos la lectura dentro del rango del boton S5 
    if (
      (Escornabot.S5_valor_minimo < lectura_pulsador) &&
      (lectura_pulsador < Escornabot.S5_valor_maximo)
    ) {
        Serial.println("Se ha pulsado el boton S5.");
        digitalWrite(Escornabot.LED_1, HIGH);
        delay(500);
        digitalWrite(Escornabot.LED_1, LOW);
        digitalWrite(Escornabot.LED_2, HIGH);
        delay(500);
        digitalWrite(Escornabot.LED_2, LOW);
        digitalWrite(Escornabot.LED_3, HIGH);
        delay(500);
        digitalWrite(Escornabot.LED_3, LOW);
        digitalWrite(Escornabot.LED_4, HIGH);
        delay(500);
        digitalWrite(Escornabot.LED_4, LOW);
    }

}

