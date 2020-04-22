// "Gioco dei dadi" PC vs. Human: chiedi un numero all'utente tra 1 e 6 (giocata human) e estrai un numero casuale tra 1 e 6 (giocata PC). Chi fa il numero più alto vince!

// chiedo all'utente  un numero casuale da 1 a 6
var numero_utente = parseInt(prompt (" inserisci un numero tra 1 e 6"));
console.log(" numero inserito dall'utente: " + numero_utente);

//  ora faccio estrarre dal computer un numero casuale da 1 a 6
var numero_pc = Math.floor(Math.random()*6) + 1;
console.log("numero estratto dal pc: " + numero_pc);

// ora li emtto a confronto per vedere quale è più alto
if (numero_utente > numero_pc) {
    // se questa condizione è verificata, vince l'utente
    console.log("l'utente ha vinto");
} else if (numero_utente == numero_pc) {
    // se questa condizione è verificata, c'è pareggio
    console.log("nessuno ha vinto, c'è pareggio")
} else {
    // se nessuna delle condizioni precedenti si è verificata, vince il PC
    console.log("l'utente ha perso, vince il PC");
}
