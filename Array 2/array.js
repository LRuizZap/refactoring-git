function cargararray() {
    document.getElementById("ej1txt").value.split(/,/);
}

function Reiniciar() {
    location.reload();
}

function calcular() {
    let array = document.getElementById("ej1txt").value.split(/,/);
    var mayor = -Infinity, sum = 0, med = 0, men = +Infinity;

    // sum

    for (i = 0; i < array.length; i++) {
        sum = parseInt(array[i]) + sum;
    }

    // med

    var a = array.length
    med = sum / a;

    // men

    for (i = 0; i < a; i++) {
        if (parseInt(a) < men) {
            men = array[i];
        }
    }

    // mayor

    for (i = 0; i < a; i++) {
        if (parseInt(array[i]) > mayor) {
            mayor = array[i];
        }
    }

    //RESULTADO
    document.getElementById("resultado1").innerHTML = "La sum es:" + sum + "<br>" +
        "La med es:" + med + "<br>" +
        "El mayor es:" + mayor + "<br>" +
        "El men es:" + men + "<br>";
}