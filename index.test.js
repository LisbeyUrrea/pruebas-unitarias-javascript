const multiSum = require('./public/index');

test('sumar 1 + 2 = 3', () => {
    expect(multiSum(1, 2)).toBe(3);
});

test('sumar todos los numeros que se pasen ', () => {
    expect(multiSum(1, 2, 3, 4, 5)).toBe(15);
});

test('Validar envio vacio devolver 0', () => {
    expect(multiSum()).toBe(0);
});

test('validar que multiplique los numeros', () => {
    expect(multiSum('M', 1, 2, 4)).toBe(8);
});

test('Cuando solo se envia un solo numero (Multiplicar)', () => {
    expect(multiSum('M', 5)).toBe(5);
    expect(multiSum('M')).toBe('M');
});

test('Cuando solo se envia un solo numero (sumar)', () => {
    expect(multiSum(5)).toBe(5);
});

test('Multiplicar 5 * -2.5 debria dar -12.5', () => {
    expect(multiSum('M', 5, -2.5)).toBe(-12.5);
});



