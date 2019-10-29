// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo

// chiedo all'utende di inserire un numero
var num = parseInt(prompt("Inserisci un numero"));

pari(num);
console.log(pari(num));

function pari(numIns) {
  var risultato;
  if (numIns % 2 === 0) {
    risultato = numIns;
  } else {
    risultato = numIns + 1;
  }
  return risultato;
}
