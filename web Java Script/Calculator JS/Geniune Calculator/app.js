var inp = document.getElementById("inputBox")

function change(num) {
    inp.value += num
}

function equal() {
    inp.value = eval(inp.value)
}

function clr() {
    inp.value = ''
}

function del() {
    inp.value = inp.value.slice(0, length - 1)

}

var date = new Date().toLocaleDateString()

var dt = document.getElementById('date')
dt.innerText = date

setInterval(function () {
    
    var tm = document.getElementById('time')
    var time = new Date().toLocaleTimeString()
    tm.innerText = time
},1000)