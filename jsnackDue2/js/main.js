// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi
// Gatsby vuole generare una falsa lista di invitati.

// creo array di nomi
var nomi = ["andrea","chiara","giulio","camilla","valerio"];
// creo array di cognomi
var cognomi = ["novello","perrucci","cancelmo","canuto","appezzato"];

var listaInv = [];


for (var i = 0; i < 5; i++) {
  var nomiRandom = getRndInteger(0,nomi.length - 1);
  var cognRandom = getRndInteger(0,cognomi.length - 1);
  var arreyInvitati = nomi[nomiRandom] + " " +  cognomi[cognRandom];
  listaInv.push(arreyInvitati);

}
console.log(listaInv);
// funzione per generare un numero random
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
