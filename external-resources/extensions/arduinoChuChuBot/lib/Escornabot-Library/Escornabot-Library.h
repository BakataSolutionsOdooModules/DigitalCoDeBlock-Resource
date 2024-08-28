/*
    Escornabot.h - Librería para Escornabot
*/

#ifndef Escornabot_h
#define Escornabot_h

#include "Arduino.h"

class Escornabot
{

    public:

        Escornabot(const int distancia_tapete);
        void mover_robot(const int direccion);
        void notifica_pulsador(const int numero_LED, const int frecuencia, const int duracion);
        void tono_fin(const int frecuencia, const int duracion_sonido, const int intervalo);

        int S1_valor_minimo;
        int S1_valor_maximo;
        int S2_valor_minimo;
        int S2_valor_maximo;
        int S3_valor_minimo;
        int S3_valor_maximo;
        int S5_valor_minimo;
        int S5_valor_maximo;
        int S4_valor_minimo;
        int S4_valor_maximo;
        int numero_pasos_para_giro;
        int numero_pasos_para_avance;
        int motor_IN1_derecha;
        int motor_IN2_derecha;
        int motor_IN3_derecha;
        int motor_IN4_derecha;
        int motor_IN1_izquierda;
        int motor_IN2_izquierda;
        int motor_IN3_izquierda;
        int motor_IN4_izquierda;
        int LED_1;
        int LED_2;
        int LED_3;
        int LED_4;
        int zumbador;
        int entrada_pulsadores;

    private:

        int _obtener_pasos_avance(int distancia_a_recorrer);

        int _pasos_por_vuelta;
        float _perimetro_rueda;

};

#endif
