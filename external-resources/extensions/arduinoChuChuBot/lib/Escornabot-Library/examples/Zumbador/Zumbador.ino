/*
  Ejemplo [ Zumbador.ino ] para comprobar el funcionamiento del zumbador
  en el Escornabot
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

    // En el setup no es necesario hacer nada en este ejemplo

}

void loop() {

    tone(Escornabot.zumbador, 100);
    delay(250);
    noTone(Escornabot.zumbador);
    tone(Escornabot.zumbador, 500);
    delay(250);
    noTone(Escornabot.zumbador);
    tone(Escornabot.zumbador, 1000);
    delay(250);
    noTone(Escornabot.zumbador);
    tone(Escornabot.zumbador, 5000);
    delay(250);
    noTone(Escornabot.zumbador);
    delay(1000);

}
