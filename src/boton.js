function generar(nombre, clase, id, evento) {

    return "<button class=`${clase}` id=`${id}` onclick=`${id}`>`${evento}`</button>"

}

module.exports = generar;