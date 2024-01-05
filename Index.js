let iKarta=0
let iSuma=0
let bKarta=0

let ispisKarteIgraca = document.getElementById("pCards-el")
let ispisSumeKarataIgraca = document.getElementById("pSumCard-el")
let ispisPoruke = document.getElementById("message-el")
let disebleNewCard = document.getElementById("newCard-b")

function slucajnaKarta(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function izvuciKartu () {
    iKarta=slucajnaKarta(2,14)
    
    //console.log(iKarta)
    
    if (bKarta===0){

        //console.log(bKarta)
        bKarta+=1
        //console.log(bKarta)

        //console.log(ispisKarteIgraca)
        ispisKarteIgraca.textContent = "PLAYER Cards: " + iKarta
    
    } else {
        ispisKarteIgraca.textContent += " - " + iKarta
        bKarta+=1
    }

    iSuma += iKarta
    ispisSumeKarataIgraca.textContent = "PLAYER Sum: " + iSuma

    provera()
}

function newGame() {
    iSuma=0
    bKarta=0

    disebleNewCard.removeAttribute('disabled')
    disebleNewCard.style.background='#daa520'

    ispisKarteIgraca.textContent = "PLAYER Cards: "
    ispisSumeKarataIgraca.textContent = "PLAYER Sum: " + iSuma

    izvuciKartu()
    izvuciKartu()
}

function newCard() {
    izvuciKartu()
}

function provera() {
    if (iSuma <=20) {
        ispisPoruke.textContent = "Da li zelize novi kartu?"
    } else if (iSuma === 21) {
        ispisPoruke.textContent = "BLACKJACK !!!"
    } else {
        ispisPoruke.textContent = "Izgubili ste !"
        disebleNewCard.setAttribute('disabled', 'disabled')
        disebleNewCard.style.background='#016f32'
    }
}