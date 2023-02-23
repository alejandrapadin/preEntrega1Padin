//Datos del usuario (sexo, altura, peso):

let sexo = prompt('Indique su sexo, una h para hombre o una m para mujer:', '');

//La función parseInt permite convertir un string en número
let altura = parseInt(prompt('Indique su altura en centímetros:', ''));
let peso = parseInt(prompt('Indique su peso en kilógramos:', ''));

let resultado = CalcularIMC(sexo, altura, peso);
MostrarResultadoIMC(sexo, altura, peso, resultado);

//Función para calcular el índice de masa corporal (IMC):

function CalcularIMC(sexo, altura, peso) {
    //La función Math.roud sirve para redondear valores:
    altura = Math.round(altura) / 100;
    peso = Math.round(peso);
    //La función Math.pow sirve para calcular potencias:
    let indice = (peso / Math.pow(altura, 2));
    let resultado = '';

    //Sexo: si es 'm', mujer y si es 'h', hombre:

    switch (sexo) {
        case 'm':
            if (indice < 20) {
                resultado = 'Tu peso es inferior al normal.';
            } else if (indice >= 20 && indice < 24) {
                resultado = 'Tu peso es normal.';
            } else if (indice >= 24 && indice < 29) {
                resultado = 'Tu peso superior al normal.';
            } else {
                resultado = 'De acuerdo a tu IMC, poseés obesidad.';
            }
            break;
        case 'h':
            if (indice < 21) {
                resultado = 'Tu peso es inferior al normal.';
            } else if (indice >= 21 && indice < 25) {
                resultado = 'Tu peso es normal.';
            } else if (indice >= 25 && indice < 30) {
                resultado = 'Tu peso es superior al normal.';
            } else {
                resultado = 'De acuerdo a tu IMC, poseés obesidad.';
            }
            break;
        default:
            resultado = 'No se ha podido calcular. No ha indicado si m (mujer) u h (hombre).';
    }
    //Con toFixed reduciremos a 2 el número de decimales que vamos a mostrar:
    return 'Tu IMC es: ' + indice.toFixed(2) + ' y su clasificación es: ' + resultado;
}

//Función para mostrar el resultado:

function MostrarResultadoIMC(sexo, altura, peso, indice) {
    let mensaje = 'Tu altura es ' + altura / 100 + ' metros y pesás ' + peso + " Kgs. \n \n " + indice;
    alert(mensaje);
}