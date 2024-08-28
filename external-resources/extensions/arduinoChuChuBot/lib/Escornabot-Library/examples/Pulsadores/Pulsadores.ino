/*
    Ejemplo para comprobar el funcionamiento de los pulsadores
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

    // En el setup no es necesario hacer nada más que
    // inicializar la comunicación Serial
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
        Serial.print("Lectura digital: ");
        Serial.println(lectura_pulsador);
        Serial.print("Lectura estimada en V: ");
        Serial.println(map(lectura_pulsador, 0, 1023, 0, 5));
        delay(1000);
    }

    // Comprobamos la lectura dentro del rango del boton S2
    else if (
      (Escornabot.S2_valor_minimo < lectura_pulsador) &&
      (lectura_pulsador < Escornabot.S2_valor_maximo)
    ) {
        Serial.println("Se ha pulsado el boton S2.");
        Serial.print("Lectura digital: ");
        Serial.println(lectura_pulsador);
        Serial.print("Lectura estimada en V: ");
        Serial.println(map(lectura_pulsador, 0, 1023, 0, 5));
        delay(1000);
    }

    // Comprobamos la lectura dentro del rango del boton S3
    else if (
      (Escornabot.S3_valor_minimo < lectura_pulsador) &&
      (lectura_pulsador < Escornabot.S3_valor_maximo)
    ) {
        Serial.println("Se ha pulsado el boton S3.");
        Serial.print("Lectura digital: ");
        Serial.println(lectura_pulsador);
        Serial.print("Lectura estimada en V: ");
        Serial.println(map(lectura_pulsador, 0, 1023, 0, 5));
        delay(1000);
    }

    // Comprobamos la lectura dentro del rango del boton S4
    else if (
      (Escornabot.S4_valor_minimo < lectura_pulsador) &&
      (lectura_pulsador < Escornabot.S4_valor_maximo)
    ) {
        Serial.println("Se ha pulsado el boton S4.");
        Serial.print("Lectura digital: ");
        Serial.println(lectura_pulsador);
        Serial.print("Lectura estimada en V: ");
        Serial.println(map(lectura_pulsador, 0, 1023, 0, 5));
        delay(1000);
    }

    // Comprobamos la lectura dentro del rango del boton S5 
    if (
      (Escornabot.S5_valor_minimo < lectura_pulsador) &&
      (lectura_pulsador < Escornabot.S5_valor_maximo)
    ) {
        Serial.println("Se ha pulsado el boton S5.");
        Serial.print("Lectura digital: ");
        Serial.println(lectura_pulsador);
        Serial.print("Lectura estimada en V: ");
        Serial.println(map(lectura_pulsador, 0, 1023, 0, 5));
        delay(1000);
    }

}
