// function EJ1() {

//     const $FORM = document.getElementById('Ej1');
//     const $NAME = document.getElementById('nombre');
//     const $SURNAME = document.getElementById('apellido');
//     const $EMAIL = document.getElementById('email');
//     const $PASSWORD = document.getElementById('password');
//     const $COMMENTS = document.getElementById('comentario');
//     const $ACEPTED = document.getElementById('condiciones');

//     function handleSubmit(e) {
//         e.preventDefault();

//         const name = $NAME.value;
//         const surname = $SURNAME.value;
//         const email = $EMAIL.value;
//         const password = $PASSWORD.value;
//         const comentario = $COMMENTS.value;
//         const acepted = $ACEPTED.checked;

//         // if (name && isValidEmail(email) && comments && isValidPassword(password) && acepted) {
//         //     console.log("Todos los datos son válidos")
//         // }
//         // else {
//         //     alert('Error. Revise los datos introducidos')
//         // }

//         if (name == false || isValidName(name) == false) {
//             alert('El nombre debe ser un valor válido : \n -Debe estar relleno \n -Debe estar compuesto por 1 o 2 palabras');
//         }
//         else {
//             if (email == false || isValidEmail(email) == false) {
//                 alert('El email debe ser un valor válido : \n -Debe estar relleno \n -Debe estar compuesto por un @ y un ".algo"');
//             }
//             else {
//                 if (comentario == false || isValidComent(comentario) == false) {
//                     alert('El comentario tiene que tener un formato válido : \n -Debe estar relleno \n -Debe de tener un total de 50 caracteres');
//                 }
//                 else {
//                     if (isValidPassword(password) == false) {
//                         alert('El password debe tener una longitud mínima de 6 caracteres, y contener al menos una letra minúscula, una letra mayúscula y un dígito');
//                     }
//                 }
//             }
//         }

//     }

//     function isValidName(name) {
//         const validacion = /^(([\wáéíóúÁÉÍÓÚ]+)|([\wáéíóúÁÉÍÓÚ]+\s[\wáéíóúÁÉÍÓÚ]+))$/;
//         return validacion.test(name);
//     }

//     function isValidEmail(email) {
//         const validacion = /^(.+\@.+\..+)$/;
//         return validacion.test(email);
//     }

//     function isValidPassword(password) {
//         const validacion = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,}$/;
//         return validacion.test(password);
//     }

//     function isValidComent(comentario) {
//         const validacion = /^[\s\S]{1,50}$/;
//         return validacion.test(comentario);
//     }

//     $FORM.addEventListener('submit', handleSubmit);
// }

function EJ2() {

    var $FORM = document.getElementById('Ej2');
    var $n = document.getElementById('nombre2');
    var $SURNAME = document.getElementById('apellido2');
    var $DNI = document.getElementById('DNI');
    var $telef = document.getElementById('Telefono');
    var $COMMENTS = document.getElementById('comentario2');
    var $HORA = document.getElementById('hora');

    function validacion() {
        var validacion = /^(([\wáéíóúÁÉÍÓÚ]+)|([\wáéíóúÁÉÍÓÚ]+\s[\wáéíóúÁÉÍÓÚ]+))$/;




    }

    function handleSubmit(e) {
        e.preventDefault();

        var name = $n.value;
        var surname = $SURNAME.value;
        var D = $D.value;
        var phone = $telef.value;
        var comentario = $COMMENTS.value;
        var hora = $HORA.value;
        const nombre = "";

        if (name == false || isValidName(name) == false) {
            alert('El nombre debe ser un valor válido : \n -Debe estar relleno \n -Debe estar compuesto por 1 o 2 palabras');
        }
        else {
            if (surname == false || isValidName(surname) == false) {
                alert('El apellido debe ser un valor válido : \n -Debe estar relleno \n -Debe estar compuesto por 1 o 2 palabras');
            }
            else {
                if (D == false || isValidDNI(D) == false) {
                    alert('El DNI tiene que ser un valor válido')
                }
                else {
                    if (phone == false || isValidPHONE(phone) == false) {
                        alert('El número de teléfono tiene que ser válido')
                    }
                    else {
                        if (comentario == false || isValidComent(comentario) == false)
                            alert('El comentario tiene que tener un formato válido : \n -Debe estar relleno \n -Debe de tener un total de 250 caracteres');
                            else {

                            }
                    }
                }
            }
        }

        function P(name, surname, DNI, phone, comentario, hora) {
            this.name = name;
            this.surname = surname;
            this.D = D;
            this.phone = phone;
            this.comentario = comentario;
            this.hora = hora;
        }

        nuevaPersona = new P(name, surname, D, phone, comentario, hora);
        console.log(nuevaPersona);
    }

    function isValidName(name) {
        const validacion = /^(([\wáéíóúÁÉÍÓÚ]+)|([\wáéíóúÁÉÍÓÚ]+\s[\wáéíóúÁÉÍÓÚ]+))$/;
        return validacion.test(name);
    }

    function isValidDNI(D) {
        const validacion = /^\d{8}\w{1}$/
        return validacion.test(D);
    }

    function isValidPHONE(PHONE) {
        const validacion = /^\+34\s\d{9}$/;
        return validacion.test(PHONE);
    }

    function isValidComent(comentario) {
        const validacion = /^[\s\S]{1,250}$/;
        return validacion.test(comentario);
    }

    $FORM.addEventListener('submit', handleSubmit);

}

function EJ3() {

    const $FORM = document.getElementById('Ej3');
    const $NAME = document.getElementById('nombre3');
    const $SURNAME = document.getElementById('apellido3');
    const $EMAIL = document.getElementById('email3');
    const $WEB = document.getElementById('web');

    function handleSubmit(e) {
        e.preventDefault();

        const name = $NAME.value;
        const surname = $SURNAME.value;
        const email = $EMAIL.value;
        const web = $WEB.value;

        if (name == false || isValidName(name) == false) {
            alert('El nombre debe ser un valor válido : \n -Debe estar relleno \n -Debe estar compuesto por 1 o 2 palabras');
        }
        else {
            if (surname == false || isValidName(surname) == false) {
                alert('El apellido debe ser un valor válido : \n -Debe estar relleno \n -Debe estar compuesto por 1 o 2 palabras');
            }
            else {
                if (email == false || isValidEmail(email) == false) {
                    alert('El email debe ser un valor válido : \n -Debe estar relleno \n -Debe estar compuesto por un @ y un ".algo"');
                }
                else {
                    if (web == false || isValidWEB(web) == false) {
                        alert('La página web debe de tener un formato válido \n -No debe estar en blanco \n -Debe de tener el formato válido de una web')
                    }
                }
            }
        }

        function newPerson(name, surname, email, web) {
            this.name = name;
            this.surname = surname;
            this.email = email;
            this.web = web;
        }

        nuevaPersona = new newPerson(name, surname, web, email);
        console.log(nuevaPersona);

    }

    function isValidName(name) {
        const validacion = /^(([\wáéíóúÁÉÍÓÚ]+)|([\wáéíóúÁÉÍÓÚ]+\s[\wáéíóúÁÉÍÓÚ]+))$/;
        return validacion.test(name);
    }

    function isValidEmail(email) {
        const validacion = /^(.+\@.+\..+)$/;
        return validacion.test(email);
    }

    function isValidWEB(web) {
        const validacion = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/\/=]*)$/;
        return validacion.test(web);
    }

    $FORM.addEventListener('submit', handleSubmit);

}