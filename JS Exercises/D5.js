/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']
console.log("Eser. 1:");
console.log("Il seguente sono gli elementi dell'array 'pets':");
console.log("1. ", pets[0]);
console.log("2. ", pets[1]);
console.log("3. ", pets[2]);
console.log("4. ", pets[3]);
console.log("*********************************");

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log("Eser. 2:");
console.log("Il seguente è l'ordine alfabetico degli elementi dell'array 'pets':")
console.log(pets.sort());
console.log("1. ", pets[0]);
console.log("2. ", pets[1]);
console.log("3. ", pets[2]);
console.log("4. ", pets[3]);
console.log("*********************************");

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log("Eser. 3:");
console.log("Il seguente è l'ordine alfabetico inverso degli elementi dell'array 'pets':")
console.log(pets.reverse());
console.log("1. ", pets[0]);
console.log("2. ", pets[1]);
console.log("3. ", pets[2]);
console.log("4. ", pets[3]);
console.log("*********************************");

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
console.log("Eser. 4:");
console.log("1. ", pets[0]);
console.log("2. ", pets[1]);
console.log("3. ", pets[2]);
console.log("4. ", pets[3]);
let i = pets[0];
pets.shift();
pets.push(i);
console.log(pets);
console.log("1. ", pets[0]);
console.log("2. ", pets[1]);
console.log("3. ", pets[2]);
console.log("4. ", pets[3]);
console.log("*********************************");

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/

console.log ("Eser. 5:");

const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]
  cars[0].licensePlate = "AA 1234 BB";
  cars[1].licensePlate = "CC 4567 DD";
  cars[2].licensePlate = "EE 8910 FF";
  console.log(cars);
  console.log("*********************************");

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
console.log("Eser. 6:");
console.log(cars);
let newCar = {brand: "Fiat", model: "Panda", color: "silver", trims: ["titanium", "st", "life"], licensePlate: "GG 1112 HH"}
cars.push(newCar);
console.log(cars[3]);
console.log(cars);
//cars.pop[trims];
console.log(cars);
console.log("*********************************");

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
console.log ("Eser. 7:");

const justTrims = []
// trims.push(justTrims);
console.log(justTrims);

console.log("*********************************");
/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
console.log("Eser. 8:");


/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

console.log("Eser. 9:");
let x = 0;

while (x<numericArray.length-4) {
  console.log(numericArray[x]);
  x++
}
console.log("*********************************");
/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']
/* const newArr=[];

switch (charactersArray) {
  case value:
    
    break;

  default:
    break;
}
*/
