//object literal
const notebook = {
    led: true,
    weight: 3.5,
    lightMode: function() {
        if(cpuTemperature >= 89) {
            lightMode()
        }
    },
    blackTheme: () => {
        document.querySelector('body').style.background = "black;"
    }
}
//Factory
function microfoneMaker(colorChoice, modelChoice, ledChoice ) {
    //initial values
    if(ledChoice == undefined ) {
        ledChoice = false;
    }

    const ledVerifier = ledChoice

    function micDuration(ledVerifier) {
        if(ledVerifier == true) {
            return 3;
        } else {
            return 1.5;
        }
    }

    return {
        color: colorChoice,
        model: modelChoice,
        led: ledChoice,
        Duration: micDuration(ledVerifier)
    }

}

let newMic = microfoneMaker('white', 'AKR-15', true);
let gamerMic = microfoneMaker('pink','MWZ-99')
let defaultMic = microfoneMaker()

////console.log(newMic, defaultMic)
//PROTOTYPE
function protoMic(color, model, led) {
    this.color = color;
    this.model = model;
    this.led = led
}

protoMic.prototype.ledVerifier = function() {
    if(this.led == undefined){
        led = false; 
   } else {
       led = 'risos'
   }
}

protoMic.prototype.favoriteNumber = () => {
    return 4
}

const myMic2 = new protoMic('white', 'AWP-570')

console.log(myMic2.favoriteNumber())