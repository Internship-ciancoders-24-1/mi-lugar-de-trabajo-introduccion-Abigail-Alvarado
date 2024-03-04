function calcular(cadena) {
    if (cadena.length > 20) {
        return "La longitud máxima es de 20 caracteres";
    }

    let numeros = [];
    let operadores = [];
    let numeroActual = '';

    for (let i = 0; i < cadena.length; i++) {
        if (['+', '-', '*', '/'].includes(cadena[i])) {
            if (numeroActual !== '') {
                numeros.push(parseFloat(numeroActual));
                numeroActual = '';
            }
            operadores.push(cadena[i]);
        } else {
            numeroActual += cadena[i];
        }
    }
    if (numeroActual !== '') {
        numeros.push(parseFloat(numeroActual));
    }

    for (let i = 0; i < operadores.length; i++) {
        if (operadores[i] === '*' || operadores[i] === '/') {
            let resultado;
            if (operadores[i] === '*') {
                resultado = numeros[i] * numeros[i + 1];
            } else {
                if (numeros[i + 1] === 0) {
                    return "Error: División por cero.";
                }
                resultado = numeros[i] / numeros[i + 1];
            }
            numeros.splice(i, 2, resultado);
            operadores.splice(i, 1);
            i--;
        }
    }

    let resultado = numeros[0];
    for (let i = 0; i < operadores.length; i++) {
        if (operadores[i] === '+') {
            resultado += numeros[i + 1];
        } else if (operadores[i] === '-') {
            resultado -= numeros[i + 1];
        }
    }

    return resultado;
}

console.log(calcular("4-7+8+9/2*3"));
