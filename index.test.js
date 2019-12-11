const multiSum = require('./public/index');

test('sumar 2 numeros', () => {
    expect(multiSum(1, 2)).toBe(3);
});

test('suma mas de 3 o mas numeros', () => {
    expect(multiSum(1, 2, 3, 4, 5)).toBe(15);
});

test('Valida enviar a sumar sin parametros devuelve 0', () => {
    expect(multiSum()).toBe(0);
});

test('vMultiplica los numeros que se pasen', () => {
    expect(multiSum('M', 1, 2, 4)).toBe(8);
});

test('cuando solo se envia un numero debe devolverlo (Multiplicacion)', () => {
    expect(multiSum('M', 5)).toBe(5);
    expect(multiSum('M')).toBe('M');
});

test('cuando solo se envia un numero debe devolverlo (sumar)', () => {
    expect(multiSum(5)).toBe(5);
});

test('Multiplica numeros negativos', () => {
    expect(multiSum('M', 5, -2.5)).toBe(-12.5);
});

test('si envio string en vez de numeros debe ignorar el string y hacer la multiplicacion', () => {
    expect(multiSum('M', 5, 2, '6')).toBe(10);
});
test('si envio string en vez de numeros debe ignorar el string y hacer la suma', () => {
    expect(multiSum(5, 2, '6', 3, 's')).toBe(10);
});


