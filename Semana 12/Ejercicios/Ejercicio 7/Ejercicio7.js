function positivoONegativo(numero) {
    if (numero >0) {
        return "Positivo";
    } else if (numero == 0) {
        return "Cero";
    } else {
        return "Negativo";
    }
}

console.log(positivoONegativo(-2));