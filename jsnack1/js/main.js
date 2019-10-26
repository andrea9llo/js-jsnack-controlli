// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

// dichiaro le variabili
var utente1,utente2;
// chiedo all utente1 di inserire un numero
utente1 = parseInt(prompt("Utente1 inserire un numero"));

// chiedo all utente 2 di inserire un altro numero
utente2 = parseInt(prompt("Utente2 inserire un numero"));

// dichiaro la condizione per il numero maggiore
if (utente1 > utente2) {
  document.getElementById('mioid').innerHTML = "il numero maggiore è " + utente1;
  // console.log("il numero maggiore è " + utente1);
} else if (utente1 < utente2) {
  document.getElementById('mioid').innerHTML = "il numero maggiore è " + utente2;
  // console.log("il numero maggiore è " + utente2);
} else {
  document.getElementById('mioid').innerHTML = "il numero è uguale " + utente1;
  // console.log("avete pareggiato");
}
