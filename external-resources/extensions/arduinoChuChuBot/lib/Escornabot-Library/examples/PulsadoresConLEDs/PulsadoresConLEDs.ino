
// Se incluye la libreria necesaria
#include <DHT.h>

// Definimos los pines de los diodos led
#define Led_rojo 5
#define Led_verde 6
#define Led_rojo_rgb 8
#define Led_verde_rgb 9

// Definimos el pin digital donde se conecta el sensor
#define DHTPIN D24

// Inicializamos el sensor DHT11
DHT dht(DHTPIN, DHT11);

// Se crean las variables para almacenar los datos
float T = 0;  // Temperatura
float H = 0;  // Humedad

void setup() {
  // Inicializamos el sensor DHT
  dht.begin();

  pinMode(Led_rojo, OUTPUT);
  pinMode(Led_verde, OUTPUT);
  pinMode(Led_rojo_rgb, OUTPUT);
  pinMode(Led_verde_rgb, OUTPUT);

  digitalWrite(Led_rojo, LOW);
  digitalWrite(Led_verde, LOW);
  digitalWrite(Led_rojo_rgb, LOW);
  digitalWrite(Led_verde_rgb, LOW);

  // Inicializamos el bus serial
  Serial.begin(9600);
}

void loop() {
  // Si se detecta que el sensor dht esta conectado
  if (!isnan(dht.readHumidity()) || !isnan(dht.readTemperature())) {
    // Leer y almacenar temperatura
    T = dht.readTemperature();
    // Leer y almacenar humedad
    H = dht.readHumidity();
    // Si la temperatura esta por debajo de los 30ºC
    if (T > 30) {
      digitalWrite(Led_rojo, HIGH);
      digitalWrite(Led_verde, HIGH);
    }
    if (T < 30 && T > 25) {
      digitalWrite(Led_rojo, LOW);
      digitalWrite(Led_verde, HIGH);
    }
    if (T < 25) {
      digitalWrite(Led_rojo, LOW);
      digitalWrite(Led_verde, LOW);
    }
    // Si la humedad esta por encima del 50 %
    if (H > 75) {
      digitalWrite(Led_rojo_rgb, HIGH);
      digitalWrite(Led_verde_rgb, LOW);
    }
    if(H < 75 && H > 50) {
      digitalWrite(Led_rojo_rgb, LOW);
      digitalWrite(Led_verde_rgb, HIGH);
    }
    if(H < 50) {
      digitalWrite(Led_rojo_rgb, LOW);
      digitalWrite(Led_verde_rgb, LOW);
    }
    // Imprimir valores por el bus serial
    Serial.print("Humedad relativa:  ");
    Serial.print(H);
    Serial.println(" %");
    Serial.print("Temperatura:  ");
    Serial.print(T);
    Serial.println("  Cº");

    // Esperar 5 segundos
    delay(5000);
  }
}



