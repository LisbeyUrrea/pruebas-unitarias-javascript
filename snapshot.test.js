const multiSum = require('./public/index');
// const boton = require('./public/boton');

test('Ver si mi body cambi', () => {
    expect("<body> Hola mundo </body>").toMatchSnapshot()
});

// test('Generar boton', () => {
//     //arrage
//     const nombre = 'Enviar';
//     const clase = 'Boton';
//     const id = 'Boton';
//     const evento = (event) => alert("Hola Mundo");
//     //act
//     const result = boton.generar(nombre, clase, id, evento);
//     //Assert

//     expect(result).toMatchSnapshot()
// });

test('Ver si los estilos del body cambiaron', () => {
    expect("body { background-color: aqua; }").toMatchSnapshot()
});

test('hacer pruebas a un objeto javaScrip', () => {
    //arrage
    const numeroDos = [3, 4, 5, 6];
    //act
    const sumaNotas = multiSum(...numeroDos)
    const result = {
        sumaNotas: sumaNotas,
        nombre: 'Ana',
        clase: 'JavaScrip'
    }
    //Assert

    expect(JSON.stringify(result)).toMatchSnapshot()
});