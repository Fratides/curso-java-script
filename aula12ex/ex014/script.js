function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minute = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minute} minutos `
    if (hora >=0 && hora <12){
        //Bom dia
        img.src = 'imagens/manha.png'
        document.body.style.background = '#52ADF3' //consigo mudar a cor do fundo pelo javascript
    } else if (hora >=12 && hora < 18) {
        //Boa Tarde
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#F4997E'
    } else {
        //Boa Noite
        img.src = 'imagens/noite.png'
        document.body.style.background = '#04264B'
    }
}
