const $RESULTADOS = document.getElementById("ResultadoFibonacci")
console.log($RESULTADOS)

// function pulsar() {
//     var array = [];
//     array = document.formulario.textarea.value.split(" ");
//     var numpal = array.length;
//     var primpal = array[0];
//     document.getElementById("resultado4").innerHTML = "El número de palabras es de: " + numpal + "<br> La primera palabra es: " + primpal;
// }

function fibonacci() {
    var array = [0, 1];
    for (i = 2; i <= 100; i++) {
        //push para añadir 
        array.push(array[i - 1] + array[i - 2]);
    }
    $RESULTADOS.innerText = array;
}
$RESULTADOS.innerText = array;

// function na1(){
//     var n = document.getElementById("N").value;
//     var a = [];
//   
//         for(i = n, i > 1; i--;)
//         {
//             array.push(n)
//             n = n - 1;
//         }
//         document.getElementById("resultado6").innerHTML = array;
//     }
// }