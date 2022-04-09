function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var dia = window.document.getElementById('dia')
    

    var data = new Date()

    const formatter = Intl.DateTimeFormat('pt-br',{
        weekday: "long", 
        year: "numeric", 
        month: "long",
        day: "numeric",

    });

    var hora = data.getHours()
    var min = data.getMinutes()

    dia.innerHTML = formatter.format(data)
    msg.innerHTML = `${hora}:${min}`
    
    if (hora > 0  && hora < 12 ){
        img.src = 'imagens/manha.png'

    } else if (hora >=12 && hora <= 18){
        img.src = 'imagens/tarde.png'

    } else{
        img.src = 'imagens/noite.png'

    }


}