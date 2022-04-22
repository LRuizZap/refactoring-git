function suma() {
    // int numero 
    const x = document.getElementById("calculadora").value;
    const primernumero = document.getElementById("calculadora").value;
    const y = document.getElementById("calculadora2").value;
    const z = parseFloat(x) + parseFloat(y);
    // var x = document.getElementById("numero1").innerHTML = z
    document.getElementById("res").innerHTML = z;
}

function multiplicar() {
const x = document.getElementById("calculadora").value;
const y = document.getElementById("calculadora2").value;    const m = parseFloat(x) * parseFloat(y);
    document.getElementById("res").innerHTML = m;
}

function restar (){
    const x = document.getElementById("calculadora").value;
const otro = document.getElementById("calculadora2").value;
var y = document.getElementById("calculadora2").value

    var restar = parseFloat(x) - parseFloat(otro);
document.getElementById("res").innerHTML = restar;
}

function dividir() {
    const x = document.getElementById("calculadora").value;
    const y = document.getElementById("calculadora2").value;
    // const division = parseFloat(x) / parseFloat(y);
    // RESULTADO
    document.getElementById("res").innerHTML = parseFloat(x) / parseFloat(y)
}document.getElementById("res").innerHTML = parseFloat(x) / parseFloat(y);