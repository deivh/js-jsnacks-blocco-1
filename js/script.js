function student() {
    var student = {
        'name': prompt("Inserisci il nome dello studente"),
        'lastname': prompt("Inserisci il cognome dello studente"),
        'age': parseInt(prompt("Inserisci l'età dello studente"))
    }

    console.log(student);
}


function init() {
    $('#startBtn').click(student);
}

$(document).ready(init);



// - Creare un oggetto che descriva uno studente con le
// seguenti proprietà: nome, cognome e età. Stampare a
// schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti. Ciclare su tutti gli
// studenti e stampare per ognuno nome e cognome
// - Dare la possibilità all'utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo
// nell'ordine: nome, cognome e età.