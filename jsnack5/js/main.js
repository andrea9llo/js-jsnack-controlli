// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
// un numero, se è dispari inseriscilo nell’array.

// creo un array vuoto

var array = [];

// creo ciclo per chiedere all' utente di inserire un numero
for (var i = 0; i < 6; i++) {
 var num = parseInt(prompt("Inserire un numero"));
 // creo una condizione per stampare i numeri dispari nell'array
 if (num % 2 !=0) {
   array.push(num);
 }
}

document.getElementById('mioid').innerHTML = "questi sono i numeri dispari " + array;
console.log(array);
