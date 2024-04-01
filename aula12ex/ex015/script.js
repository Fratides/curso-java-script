function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')//as duas formas
    var res = document.querySelector('div#res')//realiza iguais
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'imagens/crianca-masculino.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovem-masculino.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adulto-masculino.png')
            } else {
                img.setAttribute('src', 'imagens/idoso-masculino.png')
            }
        }else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'imagens/crianca-feminina.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovem-feminina.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adulto-feminina.png')
            } else {
                img.setAttribute('src', 'imagens/idoso-feminina.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }

}