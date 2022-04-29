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

function OBJRopa() {
    function Ropa(articulo, talla, cantidad) {
        this.articulo = articulo,
            this.talla = talla,
            this.cantidad = cantidad;
    }

    var articuloNew = document.getElementById("articulos").value;
    var tallaNew = document.getElementById("talla").value;
    var cantidadNew = document.getElementById("cantidad").value;

    nuevaROPA = new Ropa(articuloNew, tallaNew, cantidadNew);
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