/*
    Escornabot.h - Librería para Escornabot
*/

#include "Arduino.h"
#include "Escornabot-Library.h"

// Constructor de la clase
Escornabot::Escornabot (const int distancia_tapete)
{

    this->motor_IN1_derecha = 2;
    this->motor_IN2_derecha = 3;
    this->motor_IN3_derecha = 4;
    this->motor_IN4_derecha = 5;
    this->motor_IN1_izquierda = 9;
    this->motor_IN2_izquierda = 8;
    this->motor_IN3_izquierda = 7;
    this->motor_IN4_izquierda = 6;
    this->LED_1 = A0;
    this->LED_2 = A1;
    this->LED_3 = A2;
    this->LED_4 = A3;
    this->zumbador = 10;
    this->entrada_pulsadores = A7;

    pinMode(this->LED_1, OUTPUT);
    pinMode(this->LED_2, OUTPUT);
    pinMode(this->LED_3, OUTPUT);
    pinMode(this->LED_4, OUTPUT);
    pinMode(this->motor_IN1_derecha, OUTPUT);
    pinMode(this->motor_IN2_derecha, OUTPUT);
    pinMode(this->motor_IN3_derecha, OUTPUT);
    pinMode(this->motor_IN4_derecha, OUTPUT);
    pinMode(this->motor_IN1_izquierda, OUTPUT);
    pinMode(this->motor_IN2_izquierda, OUTPUT);
    pinMode(this->motor_IN3_izquierda, OUTPUT);
    pinMode(this->motor_IN4_izquierda, OUTPUT);

    this->numero_pasos_para_giro = 125;
    this->S1_valor_minimo = 431;
    this->S1_valor_maximo = 593;
    this->S2_valor_minimo = 594;
    this->S2_valor_maximo = 721;
    this->S3_valor_minimo = 722;
    this->S3_valor_maximo = 792;
    this->S5_valor_minimo = 793;
    this->S5_valor_maximo = 849;
    this->S4_valor_minimo = 850;
    this->S4_valor_maximo = 912;
    this->_pasos_por_vuelta = 512;
    this->_perimetro_rueda = 23.56;
    this->numero_pasos_para_avance = this->_obtener_pasos_avance(distancia_tapete);

}

// Funcion para realizar moviemientos del robot con motores paso a paso
void Escornabot::mover_robot (const int direccion)
{

    //Matriz con la secuencia de excitacion de las bobinas
    int paso[8][4] = {
        {1, 0, 0, 0},
        {1, 1, 0, 0},
        {0, 1, 0, 0},
        {0, 1, 1, 0},
        {0, 0, 1, 0},
        {0, 0, 1, 1},
        {0, 0, 0, 1},
        {1, 0, 0, 1}
    };

    switch (direccion) {

        case 1: // Retroceder

            for (int j = 0; j < this->numero_pasos_para_avance; j++) {
                for (int i = 0; i < 8; i++) {
                    digitalWrite(this->motor_IN1_derecha, paso[i][3]);
                    digitalWrite(this->motor_IN1_izquierda, paso[i][3]);
                    digitalWrite(this->motor_IN2_derecha, paso[i][2]);
                    digitalWrite(this->motor_IN2_izquierda, paso[i][2]);
                    digitalWrite(this->motor_IN3_derecha, paso[i][1]);
                    digitalWrite(this->motor_IN3_izquierda, paso[i][1]);
                    digitalWrite(this->motor_IN4_derecha, paso[i][0]);
                    digitalWrite(this->motor_IN4_izquierda, paso[i][0]);
                    delay(1);
                }
            }

            break;

        case 2: // Ir a derecha

            for (int j = 0; j < this->numero_pasos_para_giro; j++) {
                for (int i = 0; i < 8; i++) {
                    digitalWrite(this->motor_IN1_derecha, paso[i][0]);
                    digitalWrite(this->motor_IN1_izquierda, paso[i][3]);
                    digitalWrite(this->motor_IN2_derecha, paso[i][1]);
                    digitalWrite(this->motor_IN2_izquierda, paso[i][2]);
                    digitalWrite(this->motor_IN3_derecha, paso[i][2]);
                    digitalWrite(this->motor_IN3_izquierda, paso[i][1]);
                    digitalWrite(this->motor_IN4_derecha, paso[i][3]);
                    digitalWrite(this->motor_IN4_izquierda, paso[i][0]);
                    delay(1);

                }
            }

            break;

        case 3: // Avanzar

            for (int j = 0; j < this->numero_pasos_para_avance; j++) {
                for (int i = 0; i < 8; i++) {
                    digitalWrite(this->motor_IN1_derecha, paso[i][0]);
                    digitalWrite(this->motor_IN1_izquierda, paso[i][0]);
                    digitalWrite(this->motor_IN2_derecha, paso[i][1]);
                    digitalWrite(this->motor_IN2_izquierda, paso[i][1]);
                    digitalWrite(this->motor_IN3_derecha, paso[i][2]);
                    digitalWrite(this->motor_IN3_izquierda, paso[i][2]);
                    digitalWrite(this->motor_IN4_derecha, paso[i][3]);
                    digitalWrite(this->motor_IN4_izquierda, paso[i][3]);
                    delay(1);
                }
            }

            break;

        case 4: // Ir a izquierda

            for (int j = 0; j < this->numero_pasos_para_giro; j++) {
                for (int i = 0; i < 8; i++) {
                    digitalWrite(this->motor_IN1_derecha, paso[i][3]);
                    digitalWrite(this->motor_IN1_izquierda, paso[i][0]);
                    digitalWrite(this->motor_IN2_derecha, paso[i][2]);
                    digitalWrite(this->motor_IN2_izquierda, paso[i][1]);
                    digitalWrite(this->motor_IN3_derecha, paso[i][1]);
                    digitalWrite(this->motor_IN3_izquierda, paso[i][2]);
                    digitalWrite(this->motor_IN4_derecha, paso[i][0]);
                    digitalWrite(this->motor_IN4_izquierda, paso[i][3]);
                    delay(1);
                }
            }

            break;

    }

    digitalWrite(this->motor_IN1_derecha, LOW);
    digitalWrite(this->motor_IN1_izquierda, LOW);
    digitalWrite(this->motor_IN2_derecha, LOW);
    digitalWrite(this->motor_IN2_izquierda, LOW);
    digitalWrite(this->motor_IN3_derecha, LOW);
    digitalWrite(this->motor_IN3_izquierda, LOW);
    digitalWrite(this->motor_IN4_derecha, LOW);
    digitalWrite(this->motor_IN4_izquierda, LOW);

}

// Función privada para calcular los pasos necesarios para recorrer una distancia dada
int Escornabot::_obtener_pasos_avance (int distancia_a_recorrer)
{

    return round((distancia_a_recorrer * this->_pasos_por_vuelta) / this->_perimetro_rueda);

}

// Función para notificar que se se ha pulsado el boton
void Escornabot::notifica_pulsador(const int numero_LED, const int frecuencia, const int duracion)
{

    int pin_LED = 0;

    switch (numero_LED)
    {

    case 1:
        pin_LED = this->LED_1;
        break;

    case 2:
        pin_LED = this->LED_2;
        break;

    case 3:
        pin_LED = this->LED_3;
        break;

    case 4:
        pin_LED = this->LED_4;
        break;

    default:
        break;

    }

    digitalWrite(pin_LED, HIGH);
    tone(this->zumbador, frecuencia);
    delay(duracion);
    digitalWrite(pin_LED, LOW);
    noTone(this->zumbador);

}

// Funcion para notificar que se ha terminado de realizar la secuencia
void Escornabot::tono_fin(const int frecuencia, const int duracion_sonido, const int intervalo)
{

    for (int i = 0; i < 3; i++)
    {

        tone(this->zumbador, frecuencia , duracion_sonido);
        delay(intervalo);
        noTone(this->zumbador);
        delay(intervalo);

    }

}
