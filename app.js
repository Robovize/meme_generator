const form = {
    self: document.querySelector('#meme-form'),
    top: document.querySelector('#form-top'),
    bot: document.querySelector('#form-bot'),
    img: document.querySelector('#form-image'),
    generateButton: document.querySelector('#generate-button'),
}


///////////////////////////////////
// Canvas meme functions
///////////////////////////////////

const canvas = document.querySelector('.meme-canvas')
const ctx = canvas.getContext('2d')

function initCanvas() {

    canvas.width = 600
    canvas.height = 480

}

function generateCanvasMeme() {


    initCanvas();


    const img = new Image()
    img.crossOrigin = "Anonymous"
    img.onload = function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        img.width = 600
        img.height = 480
        ctx.drawImage(img, 0, 0, img.width, img.height)

        ctx.lineWidth = 5 // text stroke so its visible even on low contrast background
        ctx.strokeStyle = 'black' // colour of stroke
        ctx.fillStyle = 'white' // colour of text
        ctx.textAlign = 'center' // position of text
        ctx.lineJoin = 'round' // default value can look weird on small text, round fixes that
        // const memeFont = `700 ${form.fontSize.value}px "${form.fontFamily.value}"`
        const memeFont = `700 42px Aria` // we set bold, font size and font family
        ctx.font = memeFont

        const topText = String(form.top.value).toUpperCase()  // create uppercase
        const botText = String(form.bot.value).toUpperCase()  // create uppercase

        const textX = canvas.width / 2 
        const topY = canvas.height - (canvas.height / 30) * 29
        const botY = canvas.height - (canvas.height / 30)

        ctx.textBaseline = 'top'
        ctx.strokeText(topText, textX, topY)
        ctx.fillText(topText, textX, topY)

        ctx.textBaseline = 'bottom'
        ctx.strokeText(botText, textX, botY)
        ctx.fillText(botText, textX, botY)
    }
    img.src = form.img.value
}
initCanvas()























///////////////////////////////////
// Event Listeners
///////////////////////////////////



form.generateButton.addEventListener('click', generateCanvasMeme)


