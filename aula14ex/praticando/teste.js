let c = 0
function somar() {
    let mais = document.getElementById('txtmais')
    let menos = document.getElementById('txtmais1')

    if (mais.value.length === 0 || menos.value.length === 0) {
        window.alert ('Tente somar valores maiores')
        document.getElementById('resultado').innerHTML = 'Impossivel Calcular'
    }else {
        let maisNum = Number(mais.value)
        let menosNum = Number(menos.value)
        document.getElementById('resultado').innerHTML = 'Essa foi facil'

        let item = document.createElement('p')
        item.textContent = `${maisNum} + ${c} = ${maisNum + c}`
        document.getElementById('res').appendChild(item)

        item = document.createElement('p')
        item.textContent = `${menosNum} - ${c} = ${menosNum - c}`
        document.getElementById('res').appendChild(item)
        c++
    }
}
function opcao1() {
    document.getElementById('txtmais')
    document.getElementById('resultado').innerHTML = `Opção 1 selecionada. Valor: ${valor}`
}
function opcao2() {
    let valor = document.getElementById('txtmais1')
    document.getElementById('resultado').innerHTML = `Opção 2 selecionada. Valor: ${valor}`
}


