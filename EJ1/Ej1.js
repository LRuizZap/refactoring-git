let x, y;

// Lectura y Envío
function lectura()
{
    x = document.getElementById("calculadora").value;
    y = document.getElementById("calculadora2").value;
}

function resultado(dato)
{
    document.getElementById("res").innerHTML = dato;
}

// Operaciones
function suma() {
    
    lectura();
    const s = parseFloat(x) + parseFloat(y);
    resultado(s);
}

function multiplicar() 
{
    lectura();
    const m = parseFloat(x) * parseFloat(y);
    resultado(m);
}

function restar ()
{
    lectura();
    const r = parseFloat(x) - parseFloat(y);
    resultado(r);
}

function dividir() 
{
    lectura();
    const d = parseFloat(x) / parseFloat(y);
    resultado(d);
}