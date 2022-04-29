function EJ2() {

    const $FORM = document.getElementById('Ej2');
    const $NAME = document.getElementById('nombre2');
    const $SURNAME = document.getElementById('apellido2');
    const $DNI = document.getElementById('DNI');
    const $PHONE = document.getElementById('Telefono');
    const $COMMENTS = document.getElementById('comentario2');
    const $HORA = document.getElementById('hora');

    function validacion() {
        const validacion = /^(([\wáéíóúÁÉÍÓÚ]+)|([\wáéíóúÁÉÍÓÚ]+\s[\wáéíóúÁÉÍÓÚ]+))$/;
    }

    function handleSubmit(e) {
        e.preventDefault();

        const name = $NAME.value;
        const surname = $SURNAME.value;
        const nif = $DNI.value;
        const phone = $PHONE.value;
        const comentario = $COMMENTS.value;
        const hora = $HORA.value;

        if (name == false || isValidName(name) == false) {
            alert('El nombre debe ser un valor válido : \n -Debe estar relleno \n -Debe estar compuesto por 1 o 2 palabras');
        }
        else if (surname == false || isValidName(surname) == false) {
            alert('El apellido debe ser un valor válido : \n -Debe estar relleno \n -Debe estar compuesto por 1 o 2 palabras');
        }
        else if (nif == false || isValidDNI(nif) == false) {
            alert('El DNI tiene que ser un valor válido')
        }
        else if (phone == false || isValidPHONE(phone) == false) {
            alert('El número de teléfono tiene que ser válido')
        }
        else if (comentario == false || isValidComent(comentario) == false){
            alert('El comentario tiene que tener un formato válido : \n -Debe estar relleno \n -Debe de tener un total de 250 caracteres');
        }

        function Persona(name, surname, nif, phone, comentario, hora) {
            this.name = name;
            this.surname = surname;
            this.nif = nif;
            this.phone = phone;
            this.comentario = comentario;
            this.hora = hora;
        }

        nuevaPersona = new Persona(name, surname, nif, phone, comentario, hora);
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