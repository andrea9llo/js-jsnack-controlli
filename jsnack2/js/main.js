// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

// dichiaro le variabili
var parolaUno,parolaDue;

// chiedo all utente di inserire due parole
parolaUno = prompt("Inserire una parola");
parolaDue = prompt("Inserire un altra parola");
// console.log(parolaDue + parolaUno);

// dichiaro le condizioni per trovare la parola più lunga
if (parolaUno.length > parolaDue.length) {
  console.log("la parola più lunga è : " + parolaUno.length + " " + parolaUno);
} else if (parolaUno.length < parolaDue.length) {
  console.log("la parola più lunga è : " + parolaDue.length + " " + parolaDue);
} else {
  console.log("le parole sono lunghe uguali ");
}
