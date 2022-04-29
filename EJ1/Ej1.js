    const n1 = document.getElementById("calculadora").value;
    const n2 = document.getElementById("calculadora2").value;

function resultado(dato)
{
    document.getElementById("res").innerHTML = dato;
}

// Operaciones
function suma() {
    
    let suma = parseFloat(n1) + parseFloat(n2);
    resultado(suma);
}

function multiplicar() 
{
    let multiplicar = parseFloat(n1) * parseFloat(n2);
    resultado(multiplicar);
}

function restar ()
{
    let restar = parseFloat(n1) - parseFloat(n2);
    resultado(restar);
}

function dividir() 
{
    let dividir = parseFloat(n1) / parseFloat(n2);
    resultado(dividir);
}