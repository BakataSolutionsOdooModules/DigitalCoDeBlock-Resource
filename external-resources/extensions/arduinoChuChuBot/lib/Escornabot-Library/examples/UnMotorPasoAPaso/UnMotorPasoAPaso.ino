/*
  Ejemplo [UnMotorPasoAPaso.ino] para comprobar el funcionamiento de los
  Motores paso a paso en el Escornabot
*/

// Vamos a utilizar, por ejemplo, el motor derecho
// Pines de control del motor derecho
#define IN1_drcha 2
#define IN2_drcha 3
#define IN3_drcha 4
#define IN4_drcha 5

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
*/

int numero_pasos_para_avance = round((10 * 512) / 23.56);

// Rutina de Setup
void setup() {

    // Inicializamos la comunicación Serial
    Serial.begin(9600);

    // Se indican los pines de los motores como salidas
    pinMode(IN1_drcha, OUTPUT);
    pinMode(IN2_drcha, OUTPUT);
    pinMode(IN3_drcha, OUTPUT);
    pinMode(IN4_drcha, OUTPUT);

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
            delay(1);
        }
    }

    digitalWrite(IN1_drcha, LOW);
    digitalWrite(IN2_drcha, LOW);
    digitalWrite(IN3_drcha, LOW);
    digitalWrite(IN4_drcha, LOW);

    delay(1000);

}
