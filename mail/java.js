// "Sono in lista?" Chiedi all'utente la sua email e controlla che sia nella lista di chi può accedere (ergo: la mail è presente in un array contenente le email "autorizzate") e stampa un messaggio appropriato (sei in lista/non sei in lista)

// creo l'array con 4
var mail = [ "francesca@gmail.com" , "sara.gmail@com" , "chiara.gmail@com" , "giulia.gmail@com" ];
    console.log( mail );

 // all'ultimo si è aggiunta in lista un'altra ragazza
 mail.push( "mara.gmail@com" );
    console.log( mail );

var mail_giusta = prompt ('gentile utente inserisca la sua email: ');
    if ( isNaN( mail ) ) {
        console.log( 'l email inserita è in lista' )
    } else ( !isNaN( mail ) ){
        console.log( 'l email inserita non è in lista' )
    }
