const multiSum = require('./public/index');

test('sumar 2 numeros', () => {
    //arrage
    const numeroUno = 1;
    const numeroDos = 2;
    //act
    const resultado = multiSum(numeroUno, numeroDos)
    //Assert
    expect(resultado).toBe(3);
});

test('suma mas de 3 o mas numeros', () => {
    //arrage
    const numeros = [1, 2, 3, 4, 5];
    //act
    const resultado = multiSum(numeros)
    //Assert
    expect(resultado).toBe(15);
});

test('Valida enviar a sumar sin parametros devuelve 0', () => {
    //arrage
    const numeros = null;
    //act
    const resultado = multiSum(numeros)
    //Assert
    expect(resultado).toBe(0);
});

test('vMultiplica los numeros que se pasen', () => {
    const resultado = multiSum('M', 1, 2, 4)
    expect(resultado).toBe(8);
});

test('cuando solo se envia un numero debe devolverlo (Multiplicacion)', () => {
    const resultadoUno = multiSum('M', 5)
    const resultadoDos = multiSum('M')
    expect(resultadoUno).toBe(5);
    expect(resultadoDos).toBe('M');
});

test('cuando solo se envia un numero debe devolverlo (sumar)', () => {
    const resultado = multiSum(5)
    expect(resultado).toBe(5);
});

test('Multiplica numeros negativos', () => {
    const resultado = multiSum('M', 5, -2.5)
    expect(resultado).toBe(-12.5);
});

test('si envio string en vez de numeros debe ignorar el string y hacer la multiplicacion', () => {
    const resultado = multiSum('M', 5, 2, '6')
    expect(resultado).toBe(10);
});
test('si envio string en vez de numeros debe ignorar el string y hacer la suma', () => {
    const resultado = multiSum(5, 2, '6', 3, 's')
    expect(resultado).toBe(10);
});


