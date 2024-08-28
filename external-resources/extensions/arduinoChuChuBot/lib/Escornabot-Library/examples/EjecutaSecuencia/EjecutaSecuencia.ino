/*
    Versión completa del robot escornabot sin comunicación Bluetooth. Se
    selecciona la secuencia mediante los pulsadores y esta es ejecutada al
    presionar el botón central (S5).
    Lecturas esperadas:
        S1: 512
        S2: 675
        S3: 767
        S4: 881
        S5: 818
        Reposo: 1023
*/

// Incluimos la libreria con funciones y variables para Escornabot
#include "Escornabot-Library.h"

// Definimos las dos constantes que usaremos
// Maximo numero de movimientos a memorizar por el robot
#define MAXIMOS_MOVIMIENTOS 20
// Distancia en cm a recorrer en cada avance
#define DISTANCIA_AVANCE 10

// Inicializamos la clase Escornabot para hacer uso de sus funciones
// y variables
Escornabot Escornabot(10);

// Vector que almacena hasta 20 movimientos
int vector_movimientos[MAXIMOS_MOVIMIENTOS];
// Variable que guarda la posicion a almacenar en el vector
int indice_movimiento = 0;


//**************************** DECLARACION DE FUNCIONES ******************

// Funcion para ejecutar la secuencia memorizada
// Recibe la lista de movimientos y la recorre ejecutando cada uno de ellos

void ejecuta_secuencia(
  const int vector_movimientos[MAXIMOS_MOVIMIENTOS],
  int indice_movimiento
) {

    // Emitimos un sonido indicando el inicio de la ejecución
    tone(Escornabot.zumbador, 5000, 100);
    delay(2000);

    // Recorremos el array de movimientos
    for (int i = 0 ; i < indice_movimiento ; i++) {

        switch (vector_movimientos[i]) {

            case 1: // Mover ambos motores hacia atras

                tone(Escornabot.zumbador, 500 , 100); // Iniciamos pitido
                digitalWrite(Escornabot.LED_1, HIGH); // Encendemos LED
                Escornabot.mover_robot(1);            // Movemos el robot
                digitalWrite(Escornabot.LED_1, LOW);  // Apagamos LED
                break;

            case 2: // Mover a la derecha (rueda izda adelante, drcha atras)

                tone(Escornabot.zumbador, 1000 , 100);// Iniciamos pitido
                digitalWrite(Escornabot.LED_2, HIGH); // Encendemos LED
                Escornabot.mover_robot(2);            // Movemos el robot
                digitalWrite(Escornabot.LED_2, LOW);  // Apagamos LED
                break;

            case 3: // Avanzar (ambos motores hacia adelante)

                tone(Escornabot.zumbador, 2000 , 100);// Iniciamos pitido
                digitalWrite(Escornabot.LED_3, HIGH); // Encendemos LED
                Escornabot.mover_robot(3);            // Movemos el robot
                digitalWrite(Escornabot.LED_3, LOW);  // Apagamos LED
                break;

            case 4: // Mover a izda (rueda derecha adelante, rueda izda atras)

                tone(Escornabot.zumbador, 3000 , 100);// Iniciamos pitido
                digitalWrite(Escornabot.LED_4, HIGH); // Encendemos LED
                Escornabot.mover_robot(4);            // Movemos el robot
                digitalWrite(Escornabot.LED_4, LOW);  // Apagamos LED
                break;

        }

    }

}


// ***************************CODIGO PRINCIPAL****************************

// Rutina de Setup
void setup() {

    // En el setup no es necesario hacer nada más que inicializar
    // la comunicación Serial
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
        // Ejecutamos toda la secuencia de movimientos
        ejecuta_secuencia(vector_movimientos, indice_movimiento);
        // Reiniciamos la secuencia de movimientos
        indice_movimiento = 0;
        Escornabot.tono_fin (8000, 100, 100);
    }

}
