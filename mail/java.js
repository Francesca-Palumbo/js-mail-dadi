// "Sono in lista?" Chiedi all'utente la sua email e controlla che sia nella lista di chi può accedere (ergo: la mail è presente in un array contenente le email "autorizzate") e stampa un messaggio appropriato (sei in lista/non sei in lista)

// creo l'array con 4email
var email_inlista = [ "francesca@gmail.com" , "sara.gmail@com" , "chiara.gmail@com" , "giulia.gmail@com" ];
    console.log( email_inlista );

 // all'ultimo si è aggiunta in lista un'altra ragazza
 email_inlista.push( "mara.gmail@com" );
    console.log( email_inlista );

// chiedo all'utente di inserire la sua email
var email_inserita = prompt ('gentile utente inserisca la sua email: ');

// prendo tutte le email sulla lista e le esamino una alla volta
for (var i = 0; i < email_inlista.length; i++) {
    // sto associando le email alla posizione assunta all'iterazione
    var email_da_verificare = email_inlista [i];
    console.log('iterazione' + i + ':' + email_da_verificare);
    // ora invece spunto email per email, se l'email che mi è stata fornita è tra quelle in lista
    if( email_inserita == email_da_verificare){;
    email_confermata = true;
    console.log("l'email inserita è questa della lista");
    } else {
        console.log("l'email inserita non è questa della lista");
    }
}

// per ora mi dice se è in lista solo l'email richiesta, ora vado a v
if (email_confermata == true) {
    console.log( "l'email è in lista, l'accesso è confermato");
} else {
    console.log( "l'email è in lista, l'accesso NON è confermato");
}
