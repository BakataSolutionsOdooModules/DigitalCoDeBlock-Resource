/*
    Ejemplo para comprobar el funcionamiento de funciones en el Escornabot
*/

// Incluimos la libreria con funciones y variables para Escornabot
#include "Escornabot-Library.h"

/*
    Inicializamos la clase en la variable de nombre Escornabot.
    Como en este ejemplo no vamos a utilizar los motores, podemos pasar
    el argumento para el constructor de la clase Escornabot con cualquier
    valor.
*/
Escornabot Escornabot(10);

// Funcion para notificar que se se ha pulsado el boton.
// Emite un sonido y enciende el LED que corresponde


//**************************** DECLARACION DE FUNCIONES **********************

void notifica_pulsador (
  const int pinLED,     // Pin donde tenemos conectado el LED
  const int pinBuzzer,  // Pin donde tenemos conectado el Zumbador
  const int frecuencia, // Frecuencia del tono a generar
  const int tiempo      // Duración del tono a generar
) {

  digitalWrite(pinLED, HIGH);
  tone(pinBuzzer, frecuencia);
  delay(tiempo);
  digitalWrite(pinLED, LOW);
  noTone(pinBuzzer);

}


// ***************************CODIGO PRINCIPAL********************************

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
        notifica_pulsador (Escornabot.LED_1, Escornabot.zumbador, 500, 500);
    }

    // Comprobamos la lectura dentro del rango del boton S2
    else if (
      (Escornabot.S2_valor_minimo < lectura_pulsador) &&
      (lectura_pulsador < Escornabot.S2_valor_maximo)
    ) {
        Serial.println("Se ha pulsado el boton S2.");
        notifica_pulsador (Escornabot.LED_2, Escornabot.zumbador, 1000, 500);
    }

    // Comprobamos la lectura dentro del rango del boton S3
    else if (
      (Escornabot.S3_valor_minimo < lectura_pulsador) &&
      (lectura_pulsador < Escornabot.S3_valor_maximo)
    ) {
        Serial.println("Se ha pulsado el boton S3.");
        notifica_pulsador (Escornabot.LED_3, Escornabot.zumbador, 2000, 500);
    }

    // Comprobamos la lectura dentro del rango del boton S4
    else if (
      (Escornabot.S4_valor_minimo < lectura_pulsador) &&
      (lectura_pulsador < Escornabot.S4_valor_maximo)
    ) {
        Serial.println("Se ha pulsado el boton S4.");
        notifica_pulsador (Escornabot.LED_4, Escornabot.zumbador, 3000, 500);
    }

    // Comprobamos la lectura dentro del rango del boton S5 
    if (
      (Escornabot.S5_valor_minimo < lectura_pulsador) &&
      (lectura_pulsador < Escornabot.S5_valor_maximo)
    ) {
        Serial.println("Se ha pulsado el boton S5.");
        notifica_pulsador (Escornabot.LED_1, Escornabot.zumbador, 500, 500);
        notifica_pulsador (Escornabot.LED_2, Escornabot.zumbador, 1000, 500);
        notifica_pulsador (Escornabot.LED_3, Escornabot.zumbador, 2000, 500);
        notifica_pulsador (Escornabot.LED_4, Escornabot.zumbador, 3000, 500);
    }

}
