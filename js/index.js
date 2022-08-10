function load(){
    const msgDiv = document.getElementById('msg');
    const msgDiv2 = document.getElementById('msg2');
    const imgDiv = document.getElementById('img');
    const photo = document.getElementById('photo');
    const favicon = document.getElementById('favicon')
    const daymsg = document.getElementById('daymsg')
    const photoalte = document.getElementById('photoalte')
    const title = document.getElementById('title')
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let day = date.getDay();

    if(min == 0){
        min = "00"
    } else if(min == 1){
        min = "01"
    } else if(min == 2){
        min = "02"
    } else if(min == 3){
        min = "03"
    } else if(min == 4){
        min = "04"
    } else if(min == 5){
        min = "05"
    } else if(min == 6){
        min = "06"
    } else if(min == 7){
        min = "07"
    } else if(min == 8){
        min = "08"
    } else if(min == 9){
        min = "09"
    }

    msgDiv.innerHTML = ` ↻ AGORA SÃO ${hour}:${min} HORAS ↺ `

    if(day == 0){
        daymsg.innerHTML = " DOMINGO "
    } else if(day == 1){
        daymsg.innerHTML = " SEGUNDA-FEIRA "
    } else if(day == 2){
        daymsg.innerHTML = " TERÇA-FEIRA "
    } else if(day == 3){
        daymsg.innerHTML = " QUARTA-FEIRA "
    } else if(day == 4){
        daymsg.innerHTML = " QUINTA-FEIRA "
    } else if(day == 5){
        daymsg.innerHTML = " SEXTA-FEIRA "
    } else if(day == 6){
        daymsg.innerHTML = " SABADO "
    }

    if(hour <= 4) {
        //MADRUGA
        favicon.setAttribute('href', './img/faviconmadruga.png')
        photo.src = "./img/madrugadaphoto.png"
        photoalte.src = "./img/madruga-alte.png"
        document.body.style.background = "#002154"
        msgDiv2.innerHTML = "<p>~ TENHA UMA BOA MADRUGA ~</p>"
        title.innerHTML = "~ Hora do Dia: Madrugada"
    } else if(hour >= 5 && hour <= 11) {
        favicon.setAttribute('href', './img/faviconmoning.png')
        photo.src = "./img/manhaphoto.png"
        photoalte.src = "./img/dia-alte.png"
        document.body.style.background = "#6BA9D8"
        msgDiv2.innerHTML = "<p>~ TENHA UM BOM DIA ~</p>"
        title.innerHTML = "~ Hora do Dia: Manhã"
    } else if (hour >= 12 && hour <= 18) {
        favicon.setAttribute('href', './img/faviconafternoom.png')
        photo.src = "./img/tardephoto.png"
        photoalte.src = "./img/tarde-alte.png"
        document.body.style.background = "#E2B176"
        msgDiv2.innerHTML = "<p>~ TENHA UMA BOA TARDE ~</p>"
        title.innerHTML = "~ Hora do Dia: Tarde"
    } else if (hour >= 19 && hour <= 23) {
        favicon.setAttribute('href', './img/faviconnight.png')
        photo.src = "./img/noitephoto.png"
        photoalte.src = "./img/noite-alte.png"
        document.body.style.background = "#130E14"
        msgDiv2.innerHTML = "<p>~ TENHA UMA BOA NOITE ~</p>"
        title.innerHTML = "~ Hora do Dia: Noite"
    }
}