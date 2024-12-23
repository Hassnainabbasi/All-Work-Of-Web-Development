var minutes = document.getElementById('min')
var seconds = document.getElementById('sec')
var miliSeconds = document.getElementById('mili-sec')
var clock = document.getElementById('clock')
var min = 0
var sec = 0
var mlSec = 0

var ruk;

function start() {

    ruk = setInterval(() => {
        mlSec++
        miliSeconds.innerText = mlSec
        if (mlSec >= 100) {
            sec++
            seconds.innerText = sec + " :"
            mlSec = 0
        }
        else if (sec >= 60) {
            min++
            minutes.innerText = min + " :"
            sec = 0
        }

    }, 10);

    document.getElementById('srt').disabled = true

}

function stop() {
    clearInterval(ruk)
    document.getElementById('srt').disabled = false

}

function reset() {
    
    minutes.innerText = 0 + " :"
    seconds.innerText = 0 + " :"
    miliSeconds.innerText = "00"
    clearInterval(ruk)
    document.getElementById('srt').disabled = false

}


setInterval(() => {
    var timer = new Date ().toLocaleTimeString()
    clock.innerText = timer
}, 1000);







