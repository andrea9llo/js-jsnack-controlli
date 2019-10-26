// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.
//  Esegui questo programma in due versioni, con il for e con il while.

// dichiaro le variabili
 var num,somma;

somma = 0;
// apro ciclo for
for (var i = 0; i < 5; i++) {
  num = parseInt(prompt("inserici  numero"));
  somma = somma + num;
}
console.log(somma);
// ciclo while

// var j = 0;
// while ( j < 5) {
//   num = parseInt(prompt("inserici  numero"));
//   somma = somma + num;
//   j++
// }
// console.log(somma);
