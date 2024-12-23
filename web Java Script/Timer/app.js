var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var start = document.getElementById("start")
var i = 0;
var j = 0;
var k = 0;
var interval;

function plus1() {
    i++;
    if (i >= 12) {
        i = 0;
    }
    hours.innerText = i;
start.disabled = false
}

function minus1() {
    i--;
    if (i < 0) {
        i = 11;
    }
    hours.innerText = i;
    start.disabled = false
}

function plus2() {
    j++;
    if (j >= 60) {
        j = 0;
    }
    minutes.innerText = j;
    start.disabled = false
}

function minus2() {
    j--;
    if (j < 0) {
        j = 59;
    }
    minutes.innerText = j;
    start.disabled = false
}

function plus3() {
    k++;
    if (k >= 60) {
        k = 0;
    }
    seconds.innerText = k;
    start.disabled = false
}

function minus3() {
    k--;
    if (k < 0) {
        k = 59;
    }
    seconds.innerText = k;
    start.disabled = false
}

function strt() {
    clearInterval(interval);
    interval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    k--;
    if (k < 0) {
        k = 59;
        j--;
    }
    if (j < 0) {
        j = 59;
        i--;
    }
    if (i < 0) {
        i = 11;
    }
    hours.innerText = i;
    minutes.innerText = j;
    seconds.innerText = k;
    
    if(i == 0 && k == 0 && j == 0){
        clearInterval(interval)
        alert("TIMES UP")
    }
}

function stp(){
    clearInterval(interval)
}

function rst(){    
    i = 0
    j = 0
    k = 0
    hours.innerText = i
    minutes.innerText = j
    seconds.innerText = k
    clearInterval(interval)
    start.disabled = true
}






setInterval(() => {
    var clock = new Date().toLocaleTimeString()
    var getClock = document.getElementById("clock")
    getClock.innerText = clock
}, 1000);

















