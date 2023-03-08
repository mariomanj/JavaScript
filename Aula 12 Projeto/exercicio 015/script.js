function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked) {
         genero = 'Homem'
        if (idade >=0 && idade <10){
           // Criança
           img.setAttribute('src', 'imagens/bebe-mas.png')  
        } else if (idade < 21) {
            // Jovem
            img.setAttribute('src', 'imagens/jovem-mas.png')
        } else if (idade <50) {
            // Adulto
            img.setAttribute('src', 'imagens/adulto-mas.png')
        } else {
            // Idoso
            img.setAttribute('src', 'imagens/idoso-mas.png')
        }
         }   
     else {
         genero = 'Mulher'
         if (idade >=0 && idade <10){
            // Criança
            img.setAttribute('src', 'imagens/bebe-fem.png')  
         } else if (idade < 21) {
             // Jovem
             img.setAttribute('src', 'imagens/jovem-fem.png')
         } else if (idade <50) {
             // Adulto
             img.setAttribute('src', 'imagens/adulto-fem.png')
         } else {
             // Idoso
             img.setAttribute('src', 'imagens/idoso-fem.png')
         }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos</br>`
        res.appendChild(img)
    } 
}
