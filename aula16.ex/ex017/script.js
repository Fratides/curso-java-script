function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value) /* numero que a pessoa escolheu */
        let c = 1 /*numero que começa a tabuada*/
        tab.innerHTML = '' /*Limpar a Tabuada */
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}` /* para saber o item que foi selecionao (no resultado da tabuada) */
            tab.appendChild(item) /* tabuada */
            c++ /* tenho que coloca o c++ para ele seguir a tabuaba em numeros diferentes */
        }
    }


}
