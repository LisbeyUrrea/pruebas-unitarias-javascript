function suma(operacion, ...numeros) {

    // Valida que no envian los parametros
    if (operacion == undefined)
        return 0;

    //validamos que lo que venga en operacion sea un strin
    const esOperacionUnString = (typeof operacion === 'string');

    // Miramos que operacion matematica se puede hacer.
    const tipoOperacion = esOperacionUnString ? operacion : 'S';

    // concatenamos el array numeros con el primer numero en caso de ser suma
    const numerosOperacion = esOperacionUnString ? numeros : [].concat(operacion, numeros);

    // Si el nuevo array esta vacio devuelve el tipo de operacion
    if (numerosOperacion.length == 0)
        return operacion;

    // Verificamos que el nuevo array tenga mas de 2 numeros
    var tieneElArrayMasDeDosNumeros = numerosOperacion.length > 1;

    // creamos la suma, verificando que la cantidad de numeros sea mayor a 1, en caso de serlo devuelve el numero que enviaron
    const suma = tieneElArrayMasDeDosNumeros ? numerosOperacion.reduce((suma, valor) => (typeof valor === 'string') ? suma : suma + valor) : numerosOperacion[0];
    // creamos la multiplicacion, verificando que la cantidad de numeros sea mayor a 1, en caso de serlo devuelve el numero que enviaron
    const multiplicacion = tieneElArrayMasDeDosNumeros ? numerosOperacion.reduce((multiplicacion, valor) => (typeof valor === 'string') ? multiplicacion : multiplicacion * valor) : numerosOperacion[0];

    //Verificamos si el ejercicio nos pedia suma o multiplicacion y devolvemos los ralores requeridos
    return (tipoOperacion === 'S') ? suma : multiplicacion;

}

module.exports = suma;