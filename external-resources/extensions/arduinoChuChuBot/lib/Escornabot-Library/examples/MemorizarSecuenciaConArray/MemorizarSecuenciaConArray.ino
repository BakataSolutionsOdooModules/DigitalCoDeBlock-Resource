/*
  Ejemplo [ MemorizarSecuenciaConArray.ino ] para comprobar el funcionamiento
  de arrays en el Escornabot
*/

// Incluimos la libreria con funciones y variables para Escornabot
#include "Escornabot-Library.h"

// Definimos las dos constantes que usaremos
#define MAXIMOS_MOVIMIENTOS 20 // Maximo numero de movimientos a memorizar
#define DISTANCIA_AVANCE 10    // Distancia en cm a recorrer en cada avance

/*
  Inicializamos la clase en la variable de nombre Escornabot.
  Como en este ejemplo no vamos a utilizar los motores, podemos
  pasar el argumento para el constructor de la clase Escornabot con
  cualquier valor.
*/
Escornabot Escornabot(DISTANCIA_AVANCE);

// Vector que almacena hasta 20 movimientos
int vector_movimientos[MAXIMOS_MOVIMIENTOS];
// Variable que guarda la posicion a almacenar en el vector
int indice_movimiento = 0;

// Rutina de Setup
void setup() {

    // En el setup no es necesario hacer nada más que inicializar la
    // comunicación Serial
    Serial.begin(9600);

}

void loop() {

    int lectura_pulsador = analogRead(Escornabot.entrada_pulsadores);

    // Comprobamos que el indice de movimientos no supere el máximo permitido
    if (indice_movimiento < MAXIMOS_MOVIMIENTOS) {

        // Comprobamos la lectura dentro del rango del boton S1
        if (
          (Escornabot.S1_valor_minimo < lectura_pulsador) &&
          (lectura_pulsador < Escornabot.S1_valor_maximo)
        ) {
            Serial.println("Se ha pulsado el boton S1.");
            Escornabot.notifica_pulsador (1, 500, 500);
            // Almacenamos un 1 en la secuencia de movimientos
            vector_movimientos[indice_movimiento] = 1;
            // Incrementamos la posición del vector (para almacenar siguiente
            // valor de la secuencia)
            indice_movimiento = indice_movimiento + 1;

        }

        // Comprobamos la lectura dentro del rango del boton S2
        else if (
          (Escornabot.S2_valor_minimo < lectura_pulsador) &&
          (lectura_pulsador < Escornabot.S2_valor_maximo)
        ) {
            Serial.println("Se ha pulsado el boton S2.");
            Escornabot.notifica_pulsador (2, 1000, 500);
            // Almacenamos un 2 en la secuencia de movimientos
            vector_movimientos[indice_movimiento] = 2;
            // Incrementamos la posición del vector (para almacenar siguiente
            // valor de la secuencia)
            indice_movimiento = indice_movimiento + 1;
        }

        // Comprobamos la lectura dentro del rango del boton S3
        else if (
          (Escornabot.S3_valor_minimo < lectura_pulsador) &&
          (lectura_pulsador < Escornabot.S3_valor_maximo)
        ) {
            Serial.println("Se ha pulsado el boton S3.");
            Escornabot.notifica_pulsador (3, 2000, 500);
            // Almacenamos un 3 en la secuencia de movimientos
            vector_movimientos[indice_movimiento] = 3;
            // Incrementamos la posición del vector (para almacenar siguiente
            // valor de la secuencia)
            indice_movimiento = indice_movimiento + 1;
        }

        // Comprobamos la lectura dentro del rango del boton S4
        else if (
          (Escornabot.S4_valor_minimo < lectura_pulsador) &&
          (lectura_pulsador < Escornabot.S4_valor_maximo)
        ) {
            Serial.println("Se ha pulsado el boton S4.");
            Escornabot.notifica_pulsador (4, 3000, 500);
            // Almacenamos un 4 en la secuencia de movimientos
            vector_movimientos[indice_movimiento] = 4;
            // Incrementamos la posición del vector (para almacenar siguiente
            // valor de la secuencia)
            indice_movimiento = indice_movimiento + 1;
        }

    }

    // Comprobamos la lectura dentro del rango del boton S5 
    if (
      (Escornabot.S5_valor_minimo < lectura_pulsador) &&
      (lectura_pulsador < Escornabot.S5_valor_maximo)
    ) {
        Serial.println("Se ha pulsado el boton S5.");

        for(int i = 0 ; i < indice_movimiento ; i++) {

            switch (vector_movimientos[i]) {

                case 1: // Realizamos secuencia 1

                    Escornabot.notifica_pulsador (1, 500, 500);
                    break;

                case 2: // Realizamos secuencia 2

                    Escornabot.notifica_pulsador (2, 1000, 500);
                    break;

                case 3: // Realizamos secuencia 3

                    Escornabot.notifica_pulsador (3, 2000, 500);
                    break;

                case 4: // Realizamos secuencia 4

                    Escornabot.notifica_pulsador (4, 3000, 500);
                    break;

                }

        }

        indice_movimiento = 0;

    }

}
