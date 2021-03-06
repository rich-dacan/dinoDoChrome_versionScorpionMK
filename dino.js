const dino = document.querySelector('.dino')
const background = document.querySelector('.background')
let isJumping = false
let position = 0

function handleKeyUp(event) {
    if (event.keyCode === 32) {
        if (!isJumping){
        jump()
        }
    }
}



function jump() {
    isJumping = true
    let upInterval = setInterval(() => {
        if (position >= 350) {   /* Aumentei de 150 pra 350 pois tem momento em que aparece 2 cactos lado-a-lado e torna-se impossível de pulá-los apenas com 150 */
            clearInterval(upInterval)

            let downInterval = setInterval(() => {
                if (position <= 0){
                    clearInterval(downInterval)
                    isJumping = false
                }else{
                    position -= 20
                    dino.style.bottom = position + 'px'
                }
        })

        } else {
        //Subindo
        position += 30 /* Aumentei de 20 pra 30 pois faz com que o homer caia mais rápido */
        dino.style.bottom = position + 'px'
        }
    },20)  
}

function createCactus() {
    const cactus = document.createElement('div')
    let cactusPosition = 1000
    let randomTime = Math.random() * 3000

    cactus.classList.add('cactus')
    cactus.style.left = 1000 + 'px'
    background.appendChild(cactus)

    let leftInterval = setInterval(() => {
        if (cactusPosition < -60){
            clearInterval(leftInterval)
            background.removeChild(cactus)
        } else if (cactusPosition > 0 && cactusPosition < 30 && position < 60){ //GAME OVER
            clearInterval(leftInterval)
            document.body.innerHTML = '<h1 class="game-over">Game Over!</h1>'
        }else {
            cactusPosition -= 10
            cactus.style.left = cactusPosition + 'px'
        }
    }, 20)

    setTimeout(createCactus, randomTime) /* Gerar cactus de maneira infinita*/
}




createCactus()
document.addEventListener('keyup', handleKeyUp
)