//Iteración #1: Variables

// 1.1 Crea una variable llamada myFavoriteHero, asigna el valor Hulk a ella.
// 1.2 Crea una variable llamada x, asigna el valor 50 a ella.
// 1.3 Crea una variable llamada 'h' con el valor 5 y otra 'y' con el valor 10. 
// 1.4 Crea una otra variable 'z' y asignale el valor de 'h' + 'y'.

const myFavoriteHero = "Hulk";
const x = 50;
const h = 5;
const y = 10;

const z = h + y;

//Iteración #2: Variables avanzadas

//1.1 Dado el siguiente javascript, cambia el valor de la propiedad age a 25.
//const character = {name: 'Jack Sparrow', age: 10};

let character = {
  name: 'Jack Sparrow',
    age: 10
};

character = {
  name: 'Jack Sparrow',
    age: 25
};

console.log(character);

//1.2 Declara 3 variables con los nombres y valores siguientes
// 	firstName = 'Jon';
// 	lastName = 'Snow';
// 	age = 24;
// Muestralos por consola de esta forma:
// 	'Soy Jon Snow, tengo 24 años y me gustan los lobos.'

const firstName = "Jon";
const lastName = "Snow";
const age = 24;

console.log("Soy " + firstName + " " + lastName + "," + " tengo " + age + " años y me gustan los lobos");

//1.3 Dado el siguiente javascript, imprime con un console.log la suma del precio de
//ambos juguetes.
//const toy1 = {name: 'Buss myYear', price: 19};
//const toy2 = {name: 'Rallo mcKing', price: 29};

const toy1 = {
  name: 'Buss myYear',
  price: 19
};

const toy2 = {
  name: 'Rallo mcKing',
  price: 29
};

console.log(toy1.price + toy2.price);

//1.4 Dado el siguiente javascript, actualiza el valor de la variable globalBasePrice a 25000
// y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad
// basePrice más el valor de la variable globalBasePrice.
// let globalBasePrice = 10000;
// const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
// const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

let globalBasePrice = 10000;

const car1 = {
      name: 'BMW m&m',
      basePrice: 50000,
      finalPrice: 60000
};

const car2 = {
      name: 'Chevrolet Corbina',
      basePrice: 70000,
      finalPrice: 80000
};

globalBasePrice = 25000;

car1.finalPrice=(car1.basePrice + globalBasePrice);
car2.finalPrice=(car2.basePrice + globalBasePrice);
console.log(car1);
console.log(car2);

//Iteración #3: Operadores


//1.1 Multiplica 10 por 5 y muestra el resultado mediante alert.

var x = 10;
var y = 5;
alert(x * y);

//1.2 Divide 10 por 2 y muestra el resultado en un alert.

var x = 10;
var y = 2;
alert(x / y);

//1.3 Muestra mediante un alert el resto de dividir 15 por 9.

var x = 15;
var y = 9;
alert(x % y);

//1.4 Usa el correcto operador de asignación que resultará en x = 15, teniendo dos variables y = 10 y z = 5.

var y = 10;
var z = 5;
x = y + z;

console.log(x);

//1.5 Usa el correcto operador de asignación que resultará en x = 50, teniendo dos variables y = 10 y z = 5.

var y = 10;
var z = 5;
x = y * z;

console.log(x);

//Iteración #4: Arrays


// 1.1 Consigue el valor "HULK" del array de cars y muestralo por consola.
// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
const avenger = avengers[0];
console.log(avenger);

// 1.2 Cambia el primer elemento de avengers a "IRONMAN"
// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

avengers.shift();
console.log(avengers);

// 1.3 Alert numero de elementos en el array usando la propiedad correcta de Array.
// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

console.log(avengers.length);

// 1.4 Añade 2 elementos al array: "Morty" y "Summer".
// Muestra en consola el último personaje del array
// const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

rickAndMortyCharacters.push("Morty");
console.log(rickAndMortyCharacters);

rickAndMortyCharacters.push("Summer");
console.log(rickAndMortyCharacters);

console.log(rickAndMortyCharacters[4]);

// 1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
// const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

rickAndMortyCharacters.push("Lapiz Lopez");
console.log(rickAndMortyCharacters);

rickAndMortyCharacters.pop();
console.log(rickAndMortyCharacters);

console.log(rickAndMortyCharacters[0]);
console.log(rickAndMortyCharacters[4]);

// 1.6 Elimina el segundo elemento del array y muestra el array por consola.
// const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

rickAndMortyCharacters.push("Lapiz Lopez");
rickAndMortyCharacters.splice(1, 1);
console.log(rickAndMortyCharacters);