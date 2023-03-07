function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
        msg.innerHTML = `Agora são ${hora} horas. </br>`
    if (hora >= 0 && hora < 12) {
        msg.innerHTML += 'BOM DIA!'
        img.src =' ../exercicio 014/imagens/manha500x333.png'
        document.body.style.background = '#7c8fad'
    } else if (hora >= 12 && hora < 18){
        msg.innerHTML += 'BOA TARDE!'
        img.src = '../exercicio 014/imagens/tarde500x333.png'
        document.body.style.background = '#f9ab60'
    } else {
        msg.innerHTML += 'BOA NOITE!'
        img.src = '../exercicio 014/imagens/noite 500x333.png'
        document.body.style.background = '#9776ab'
    }
        

}


