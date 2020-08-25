const form = {
    top: document.querySelector('#form-top'),
    bot: document.querySelector('#form-bot'),
    img: document.querySelector('#form-image'),
    generateButton: document.querySelector('#generate-button'),
}


///////////////////////////////////
// Canvas meme functions
///////////////////////////////////




i = 0;


function generateCanvasMeme() {

    body = document.querySelector('body');
    var x = document.createElement("canvas");
    x.setAttribute("id", i);



    x.width = 600;
    x.height = 480;


    const ctx = x.getContext('2d');

    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.onload = function () {
        ctx.clearRect(0, 0, x.width, x.height);
        img.width = 600;
        img.height = 480;
        ctx.drawImage(img, 0, 0, img.width, img.height);

        // ***********
        // TEXT DESIGN
        // ************
        ctx.lineWidth = 5; // text stroke so its visible even on low contrast background
        ctx.strokeStyle = 'black'; // colour of stroke
        ctx.fillStyle = 'white'; // colour of text
        ctx.textAlign = 'center'; // position of text
        ctx.lineJoin = 'round'; // default value can look weird on small text, round fixes that
        ctx.font = `700 42px Aria`; // we set bold, font size and font family



        const topText = String(form.top.value).toUpperCase(); // create uppercase
        const botText = String(form.bot.value).toUpperCase(); // create uppercase
        const textX = x.width / 2; // center text
        const topY = x.height - (x.height / 30) * 29; // put top text on the top of its baseline
        const botY = x.height - (x.height / 30); // put bottom text on the bottom of its baseline



        ctx.textBaseline = 'top'; // set baseline to the top
        ctx.strokeText(topText, textX, topY);
        ctx.fillText(topText, textX, topY);

        ctx.textBaseline = 'bottom'; // set baseline to the bottom
        ctx.strokeText(botText, textX, botY); // write text
        ctx.fillText(botText, textX, botY);
    }
    img.src = form.img.value;

    body.appendChild(x);

    i++;
}





///////////////////////////////////
// Event Listeners
///////////////////////////////////



form.generateButton.addEventListener('click', generateCanvasMeme);