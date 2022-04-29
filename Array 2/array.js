function cargararray() {
    document.getElementById("ej1txt").value.split(/,/);
}

function Reiniciar() {
    location.reload();
}

function calcular() {
    let array = document.getElementById("ej1txt").value.split(/,/);
    let mayor = -Infinity, sum = 0, med = 0, men = +Infinity;

    // suma

    for (i = 0; i < array.length; i++) {
        sum = parseInt(array[i]) + sum;
    }

    // media

    let a = array.length
    med = sum / a;

    // menor

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
    document.getElementById("resultado1").innerHTML = "La suma es:" + sum + "<p>" +
        "La media es:" + med + "<p>" +
        "El mayor es:" + mayor + "<p>" +
        "El menor es:" + men + "<p>";
}