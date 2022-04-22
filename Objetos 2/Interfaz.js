var $PERSON = document.getElementById("person");
var $PERSON_FORM = document.getElementById("personForm");
var $PERSON_NAME = document.getElementById("name");
var $PERSON_SURNAME = document.getElementById("surname");
var $PERSON_AGE = document.getElementById("age");
var person;

function dataToHTML(obj, element) {

    element.innerHTML += `
        <dl>
            <dt>Nombre</dt>
            <dd>${obj.name}</dd>

            <dt>Apellido</dt>
            <dd>${obj.surname}</dd>

            <dt><strong>Edad</strong></dt>
            <dd>${obj.age}</dd>
        </dl>
    `;

}

function handleSubmitPerson(e) {

    e.preventDefault(); //Al escribir esto el formulario no se envia

    var newName = $PERSON_NAME.value;
    var newSURNAME = $PERSON_SURNAME.value;
    var newAGE = $PERSON_AGE.value;

    person = NewPerson(newName, newSURNAME, newAGE);
    dataToHTML(person, $PERSON);

}

// esto es para hacer cosas cuando se envíe el formulario
$PERSON_FORM.addEventListener('submit', handleSubmitPerson);


// --------------------------------------------------------


// var $STUDENT = document.getElementById("student");
// var $STUDENT_FORM = document.getElementById("AlumnoForm");
// var $STUDENT_NAME = document.getElementById("Alumno");
// var $STUDENT_AGE = document.getElementById("AlumnoEdad");
// var $STUDENT_level = document.getElementById("Nivel_Ingles");
// var student;

// function dataToHTML(obj, element) {

//     element.innerHTML += `
//         <dl>
//             <dt><strong>Nombre</strong></dt>
//             <dd>${obj.name}</dd>

//             <dt><strong>Edad</strong></dt>
//             <dd>${obj.age}</dd>
            
//             <dt><strong>Nivel de Inglés</strong></dt>
//             <dd>${obj.level}</dd>
//         </dl>
//     `;

// }

// function handleSubmitstudent(e) {

//     e.preventDefault(); //Al escribir esto el formulario no se envia

//     var newName = $STUDENT_NAME.value;
//     var newAGE = $STUDENT_AGE.value;
//     var newLEVEL = $STUDENT_level.value;

//     student = NewStudent(newName, newAGE, newLEVEL);
//     dataToHTML(student, $STUDENT);

// }

// $STUDENT_FORM.addEventListener('submit', handleSubmitstudent);