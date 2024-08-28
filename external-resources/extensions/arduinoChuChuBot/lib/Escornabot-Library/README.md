
# Librería Escornabot

Esta librería está construida por Digital Codesign para utilizar junto con el robot educacional Escornabot. Permite utilizar los distintos componentes del robot con varias funciones y ejemplos.

Puedes encontrar nuestro Kit de Escornabot Singularis y mucho más material de electrónica y robótica en nuestra tienda oficial: https://digitalcodesign.com/shop

## Modo de empleo

Cuando tengas la librería instalada, incluye la librería al comienzo de tu sketch, antes del setup, con la siguiente línea:

```bash
    #include "Escornabot-Library.h"
```

### Constructor

Crea una instancia de la clase con el nombre que más te guste, nosotros usaremos el mismo nombre de la librería para evitar confusiones. Al constructor debemos pasarle como argumento la distancia en centímetros que queremos que avance el robot cuando se mueva linealmente hacia delante o hacia atrás:

```bash
    Escornabot Escornabot(DISTANCIA)
```

Ahora podemos emplear las propiedades y métodos de nuestro objeto Escornabot. La librería ya incluye la declaración de todos los pines y valores necesarios para utilizar el robot.

### Propiedades de la clase

A continuación, mostramos la lista de valores que vienen declarados en nuestra instancia y de los que podemos hacer uso en nuestro sketch:

| Variable | Tipo     | Descripción                | Valor
| :-------- | :------- | :------------------------- | :---------|
| `S1_valor_minimo` | `int` | Valor inferior del rango válido de lectura para el botón S1. | `431` |
| `S1_valor_maximo` | `int` | Valor superior del rango válido de lectura para el botón S1. | `593` |
| `S2_valor_minimo` | `int` | Valor inferior del rango válido de lectura para el botón S2. | `594` |
| `S2_valor_maximo` | `int` | Valor superior del rango válido de lectura para el botón S2. | `721` |
| `S3_valor_minimo` | `int` | Valor inferior del rango válido de lectura para el botón S3. | `722` |
| `S3_valor_maximo` | `int` | Valor superior del rango válido de lectura para el botón S3. | `792` |
| `S4_valor_minimo` | `int` | Valor inferior del rango válido de lectura para el botón S4. | `850` |
| `S4_valor_maximo` | `int` | Valor superior del rango válido de lectura para el botón S4. | `912` |
| `S5_valor_minimo` | `int` | Valor inferior del rango válido de lectura para el botón S5. | `793` |
| `S5_valor_maximo` | `int` | Valor superior del rango válido de lectura para el botón S5. | `849` |
| `numero_pasos_para_giro` | `int` | Número de pasos que deben ejecutar los motores para dar un giro de 90º, establecido en 125 pasos. | `125` |
| `numero_pasos_para_avance` | `int` | Número de pasos que deben ejecutar los motores para desplazarse en línea recta la distancia dada en el constructor al crear la instancia de la clase. | Calculado automáticamente |
| `motor_IN1_derecha` | `int` | Número de pin de la primera bobina del motor paso a paso del lado derecho. | `2` |
| `motor_IN2_derecha` | `int` | Número de pin de la segunda bobina del motor paso a paso del lado derecho. | `3` |
| `motor_IN3_derecha` | `int` | Número de pin de la tercera bobina del motor paso a paso del lado derecho. | `4` |
| `motor_IN4_derecha` | `int` | Número de pin de la cuarta bobina del motor paso a paso del lado derecho. | `5` |
| `motor_IN1_izquierda` | `int` | Número de pin de la primera bobina del motor paso a paso del lado izquierdo. | `9` |
| `motor_IN2_izquierda` | `int` | Número de pin de la segunda bobina del motor paso a paso del lado izquierdo. | `8` |
| `motor_IN3_izquierda` | `int` | Número de pin de la tercera bobina del motor paso a paso del lado izquierdo. | `7` |
| `motor_IN4_izquierda` | `int` | Número de pin de la cuarta bobina del motor paso a paso del lado izquierdo. | `6` |
| `LED_1` | `int` | Número de pin del LED azul de retroceso. | `A0` |
| `LED_2` | `int` | Número de pin del LED rojo de giro a la derecha. | `A1` |
| `LED_3` | `int` | Número de pin del LED amarillo de avance. | `A2` |
| `LED_4` | `int` | Número de pin del LED verde de giro a la izquierda. | `A3` |
| `zumbador` | `int` | Número de pin del zumbador. | `10` |
| `entrada_pulsadores` | `int` | Número de pin de lectura de pulsadores. | `A7` |

### Métodos de la clase

A continuación, mostramos los métodos disponibles en nuestra instancia que podemos utilizar:

| Función | Argumentos     | Descripción                |
| :-------- | :------- | :------------------------- |
| `Escornabot` | `distancia` | Constructor de la clase. Recibe la distancia que deseas recorrer en centímetros cuando el robot haga movimiento hacia adelante o atrás. |
| `mover_robot` | `dirección` | Ejecuta el movimiento indicado con un número entero pasado como argumento; 1 para retroceder, 2 para girar a la derecha, 3 para avanzar y 4 para girar a la izquierda. |
| `notifica_pulsador` | `LED, frecuencia, duración` | Emite un sonido al tiempo que enciende un LED en función del pulsador acionado. |
| `tono_fin` | `frecuencia, duración del sonido, intervalo` | Emite una pequeña melodía con unas características dadas para indicar que ha terminado de ejecutar la secuencia de movimientos. |

## Ejemplos incluidos en la librería

Dispones de ejemplos de diferentes dificultades para ir probando y experimentando con los distintos componentes del robot (LEDs, pulsadores, zumbador y motores). Aquí tienes una lista con todos los que hay y qué puedes hacer con ellos, ordenados de manera que los primeros sirven para probar componentes básicos del robot, añadiendo en cada ejemplo más funcionalidades hasta terminar con el código completo para que el robot funcione:

| Ejemplo | Descripción |
| :------- | :----------|
| `LEDs` | Permite probar los LEDs indicadores del robot. |
| `Pulsadores` | Permite probar los pulsadores del robot. |
| `Zumbador` | Permite probar el zumbador del robot. |
| `PulsadoresConLEDs` | Puedes utilizar conjuntamente con los LEDs indicadores y los pulsadores. |
| `PulsadoresConLEDsYZumbador` | Puedes utilizar conjuntamente con los LEDs, los pulsadores y el zumbador. |
| `NotificaPulsador` | Incluye una función para simplificar el uso de LEDs y zumbador. |
| `UnMotorPasoAPaso` | Enseña cómo utilizar uno de los motores del robot sin la librería. |
| `DosMotoresPasoAPaso` | Enseña cómo utilizar ambos motores del robot sin la librería. |
| `MotoresConFunciones` | Enseña cómo utilizar ambos motores empleando, ahora sí, la librería. |
| `MemorizarSecuenciaConArray` | Emplea arrays para incluir la memorización de la secuencia introducida al robot. |
| `EjecutaSecuencia` | Incluye una mejora en el código extrayendo la ejecución de la secuencia a una función y otra función para emitir una pequeña melodía al terminar la secuencia. Este ejemplo ya es el código final del robot. |
