function student() {
    var student = {
        'name': prompt("Inserisci il nome dello studente"),
        'lastname': prompt("Inserisci il cognome dello studente"),
        'age': parseInt(prompt("Inserisci l'età dello studente"))
    }

    console.log(student);
    return student;
}

function printClassroom(){
    for (var i=0; i<students.length; i++){
        console.log(students[i]['name'], students[i]['lastname']);
    }
}

function arrAddStudent(){
    var classroom = parseInt(prompt("Quanti studenti vuoi inserire in classe?"));
    for (var i=0; i<classroom; i++)  {
        var stud = student()
        students.push(stud)
    }

    console.log(students);
}

function init() {
    students = [
        {
            'name': 'Pasqualino',
            'lastname': 'Vanità',
            'età': 45
        },
        {
            'name': 'Gennaro',
            'lastname': 'Bullo',
            'età': 45
        },
        {
            'name': 'Ezio',
            'lastname': 'Greggio',
            'età': 45
        },
        {
            'name': 'Gengis',
            'lastname': 'Khan',
            'età': 45
        }
    ]
    $('#startBtn1').click(student);
    $('#startBtn2').click(printClassroom);
    $('#startBtn3').click(arrAddStudent);

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