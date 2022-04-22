// // Ejercicio clase

// function NewPerson(name, surname, age) {
//     var NewPerson = {
//         name: name,
//         surname: surname,
//         age: age,
//     };

//     return NewPerson;
// }




// Ejercicio Inventario

//dataOBJ --> sirve para crear el objeto con sus características y agregarlo a la tabla

function dataOBJ() {
    function Ropa(a, t, c) {
        this.a = a,
            this.t = t,
            this.c = c;
    }

    var x;
    var y;
    var tabla;
    var columna;
    var a2 = document.getElementById("articulos").value;
    var t2 = document.getElementById("talla").value;
    var c2 = document.getElementById("cantidad").value;

    nuevaROPA = new Ropa(a2, t2, c2);
    // console.log(nuevaROPA);
    Agregar();
}

// var in[];
var inv = [];

function Agregar() {
    inv.push(nuevaROPA);
    console.log(inv);
    document.getElementById("table").innerHTML += '<tr><td>' + nuevaROPA.articulo + '</td><td>' + nuevaROPA.talla + '</td><td>' + nuevaROPA.cantidad + '</td></tr>';
}

function Eliminar() {
    inv.pop(nuevaROPA)
    document.getElementById("table").deleteRow(-1);
    console.log(inv);
}