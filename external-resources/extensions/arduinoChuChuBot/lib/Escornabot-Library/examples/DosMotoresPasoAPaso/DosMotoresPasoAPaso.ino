/*
  Ejemplo [ DosMotoresPasoAPaso.ino ] para comprobar el funcionamiento de los
  Motores paso a paso en el Escornabot
*/

// Pines de control del motor derecho
#define IN1_drcha 2
#define IN2_drcha 3
#define IN3_drcha 4
#define IN4_drcha 5

// Pines de control del motor izquierdo
#define IN1_izda 9
#define IN2_izda 8
#define IN3_izda 7
#define IN4_izda 6

/*
    Debemos calcular los pasos que tiene que dar el motor para desplazarse
    10 cm. Hay que mencionar dos datos importantes:
        --> Para dar una vuelta son necesarios 512 pasos
        --> El perímetro de la rueda son 23.56 cm
    Por lo que para allar los pasos necesarios debemos hacer la siguiente
    conversión:

             1 vuelta     512 pasos
    10 cm x ---------- x ------------ = 217 pasos para recorrer 10 cm.
             23.56 cm      1 vuelta

    Por otro lado, para hacer un giro de 90º se ha estimado que los pasos
    óptimos son 125.
*/

int numero_pasos_para_avance = round((10 * 512) / 23.56);
int numero_pasos_para_giro = 125;

// Rutina de Setup
void setup() {

    // Inicializamos la comunicación Serial
    Serial.begin(9600);

    // Se indican los pines de los motores como salidas
    // Motor derecho
    pinMode(IN1_drcha, OUTPUT);
    pinMode(IN2_drcha, OUTPUT);
    pinMode(IN3_drcha, OUTPUT);
    pinMode(IN4_drcha, OUTPUT);

    // Motor Izquierdo
    pinMode(IN1_izda, OUTPUT);
    pinMode(IN2_izda, OUTPUT);
    pinMode(IN3_izda, OUTPUT);
    pinMode(IN4_izda, OUTPUT);

}

void loop() {

    // Matriz con la secuencia de excitacion de las bobinas
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

    // Hacemos que avance recorriendo la secuencia hacia delante
    for (int j = 0; j < numero_pasos_para_avance; j++) {
        for (int i = 0; i < 8; i++) {
            digitalWrite(IN1_drcha, paso[i][0]);
            digitalWrite(IN2_drcha, paso[i][1]);
            digitalWrite(IN3_drcha, paso[i][2]);
            digitalWrite(IN4_drcha, paso[i][3]);
            digitalWrite(IN1_izda, paso[i][0]);
            digitalWrite(IN2_izda, paso[i][1]);
            digitalWrite(IN3_izda, paso[i][2]);
            digitalWrite(IN4_izda, paso[i][3]);
            delay(1);
        }
    }

    // Hacemos que retroceda recorriendo la secuencia hacia atrás
    for (int j = 0; j < numero_pasos_para_avance; j++) {
        for (int i = 0; i < 8; i++) {
            digitalWrite(IN1_drcha, paso[i][3]);
            digitalWrite(IN2_drcha, paso[i][2]);
            digitalWrite(IN3_drcha, paso[i][1]);
            digitalWrite(IN4_drcha, paso[i][0]);
            digitalWrite(IN1_izda, paso[i][3]);
            digitalWrite(IN2_izda, paso[i][2]);
            digitalWrite(IN3_izda, paso[i][1]);
            digitalWrite(IN4_izda, paso[i][0]);
            delay(1);
        }
    }

    // Hacemos que gire a la derecha
    for (int j = 0; j < numero_pasos_para_giro; j++) {
        for (int i = 0; i < 8; i++) {
            digitalWrite(IN1_drcha, paso[i][0]);
            digitalWrite(IN2_drcha, paso[i][1]);
            digitalWrite(IN3_drcha, paso[i][2]);
            digitalWrite(IN4_drcha, paso[i][3]);
            digitalWrite(IN1_izda, paso[i][3]);
            digitalWrite(IN2_izda, paso[i][2]);
            digitalWrite(IN3_izda, paso[i][1]);
            digitalWrite(IN4_izda, paso[i][0]);
            delay(1);

        }
    }

    // Hacemos que gire a la izquierda
    for (int j = 0; j < numero_pasos_para_giro; j++) {
        for (int i = 0; i < 8; i++) {
            digitalWrite(IN1_drcha, paso[i][3]);
            digitalWrite(IN2_drcha, paso[i][2]);
            digitalWrite(IN3_drcha, paso[i][1]);
            digitalWrite(IN4_drcha, paso[i][0]);
            digitalWrite(IN1_izda, paso[i][0]);
            digitalWrite(IN2_izda, paso[i][1]);
            digitalWrite(IN3_izda, paso[i][2]);
            digitalWrite(IN4_izda, paso[i][3]);
            delay(1);
        }
    }

    digitalWrite(IN1_drcha, LOW);
    digitalWrite(IN2_drcha, LOW);
    digitalWrite(IN3_drcha, LOW);
    digitalWrite(IN4_drcha, LOW);
    digitalWrite(IN1_izda, LOW);
    digitalWrite(IN2_izda, LOW);
    digitalWrite(IN3_izda, LOW);
    digitalWrite(IN4_izda, LOW);

    delay(1000);

}
