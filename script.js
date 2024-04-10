const yesBut = document.getElementById("buttonYes")
const noBut = document.getElementById("buttonNo")

let isMoving = false

function moveRandom(){
    if(!isMoving){
        isMoving = true
        const maxX = window.innerWidth - noBut.clientWidth
        const maxY = window.innerHeight - noBut.clientHeight
        
        noBut.style.position = "absolute"
        const randomX = Math.floor(Math.random() * maxX)
        const randomY = Math.floor(Math.random() * maxY)

        noBut.style.left = randomX + "px"
        noBut.style.top = randomY + "px"

        setTimeout(() => {
            isMoving = false
        }, 100)
    }
}

function clickYes(){
    alert("tui cx the ><")
}
