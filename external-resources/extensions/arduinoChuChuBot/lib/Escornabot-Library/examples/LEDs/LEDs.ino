/*
  Ejemplo [ LEDs.ino ] para comprobar el funcionamiento de los LEDs en
  el Escornabot
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

// Rutina de Setup
void setup() {

    // En el setup no es necesario hacer nada en este ejemplo

}

void loop() {

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
