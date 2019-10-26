// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

var nomeUtente = prompt("inserisci il tuo nome");

var nomi = ["andrea","chiara","giulio","camilla"];

invitato = false;

for (var i = 0; i < nomi.length; i++) {
  if (nomeUtente === nomi[i]) {
    invitato = true;
  }
}

if (invitato === true) {
  console.log(nomeUtente + " sei invitato alla festa ");
} else {
  console.log(nomeUtente + " non sei invitato alla festa");
}
