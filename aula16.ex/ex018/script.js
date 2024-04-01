/* o começo eu  que nomeio a classe */
let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, valores) {
    if (valores.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {         /* !! a baixo serve para dizer "Não" esta inlista */
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = '' /* limpa o finalizar caso eu adicione mais numeros sem apaga os de antes ate eu finalizar novamente*/
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = '' /* esvazia a caixa para nao precisar ficar apagando oque ja foi adicionado na caixa */

    num.focus() /* serve para nao fica precisando seleciona a caixa denovo depois da primeira vez , ela ja volta pra la dai e so continua adicionando numeros */
}

function finalizar() {
    if (valores.length == 0)/* se o vetor estiver vazio */ {
        window.alert('Adicione valores antes de finalizar!')
    } else /* se não */ {
        let tot = valores.length /* total */
        let maior = valores[0] /* maior e o menor e o 0 */
        let menor = valores[0]
        let soma = 0 /* soma começa com 0*/
        let media = 0
        for(let pos in valores) {
            soma += valores[pos] /* vai somar os valores */
            if (valores[pos] > maior) /* qual o maior numero */
                maior = valores[pos]
            if (valores[pos] < menor) /*qual o menor numero  */
                menor = valores[pos]
            
        }
        media = soma / tot
        res.innerHTML = '' /* zera os valores */
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados </p>` /* adicionando o paragrafo */
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>` /* mostra o maior numero */
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>` /* mostra o menor numero */
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}

function limpar() {
    res.innerHTML = ''
    lista.innerHTML = '' // Limpa a lista
    valores = []
}