/*
  Ejemplo [ MotoresConFunciones.ino ] para comprobar el funcionamiento
  de los Motores paso a paso en el Escornabot
*/

// Incluimos la libreria con funciones y variables para Escornabot
#include "Escornabot-Library.h"

// Definimos las dos constantes que usaremos
#define DISTANCIA_AVANCE 10 // Distancia en cm a recorrer en cada avance

/*
    Inicializamos la clase en la variable de nombre Escornabot.
    Pasamos como argumento la distancia en cm a recorrer en cada avance.
*/
Escornabot Escornabot(DISTANCIA_AVANCE);

// Rutina de Setup
void setup() {

    // Inicializamos la comunicación Serial
    Serial.begin(9600);

}

void loop() {

    // Hacemos que avance recorriendo la secuencia hacia delante
    Escornabot.mover_robot(3);

    // Hacemos que retroceda recorriendo la secuencia hacia atrás
    Escornabot.mover_robot(1);

    // Hacemos que gire a la derecha
    Escornabot.mover_robot(2);

    // Hacemos que gire a la izquierda
    Escornabot.mover_robot(4);

    delay(1000);

}
