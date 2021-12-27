//Iteración #5: Condicionales**

//En base al código siguiente, muestra los mensajes correctos por consola.

const number1 = 10;
const number2 = 20;
const number3 = 2;


if (number1 === 10) {
    console.log("number1 es estrictamente igual a 10");
}

if (number2 / number1 === number3) {
    console.log("number2 dividido entre number1 es igual a 2");
}

if (number1 !== number2) {
    console.log("number1 es estrictamente distinto a number2");
}

if (number3 != number1) {
    console.log("number3 es distinto number1");
}

if (number3 * 5 == number1) {
    console.log("number3 por 5 es igual a number1");
}

if (number3 * 5 == number1 && number1 * 2 == number2) {
    console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
    
}
if (number2 / 2 == number1 || number1 / 5 == number3) {
    console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}

//Iteración #6: Bucles**

// 1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.

for (let i = 0; i <= 9; i++){
    console.log(i);
}

// 1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo
// cuando el resto del numero dividido entre 2 sea 0.

for (let i = 0; i <= 9; i++){
    if (i % 2 == 0) {
        console.log(i);
    }
}

// 1.3 Crea un bucle para conseguir dormir contando ovejas.
// Este bucle empieza en 0 y termina en 10.
// Muestra por consola un mensaje diciendo 'Intentando dormir' en cada vuelta del bucle
// y cambia el mensaje en la última vuelta a 'Dormido!'.

for (let i = 0; i <= 10; i++){
    if (i <= 9) {
        console.log("Intentando dormir");
    } else {
        console.log("Dormido");
    }
}


