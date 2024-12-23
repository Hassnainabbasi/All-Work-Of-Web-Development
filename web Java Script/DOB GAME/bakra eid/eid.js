// var daysNames = ["Sunday","Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"]

// var inp = prompt("ENTER DATE OF BIRTH")
// var todaysDate = new Date().getTime()
// var dobHasnain = new Date(inp).getTime()
// var minusDate = todaysDate - dobHasnain
// var age = minusDate / (1000 * 60 * 60 * 24 * 365)
// var days = minusDate / (1000 * 60 * 60 * 24 )
// var hours = minusDate / (1000 * 60 * 60 )
// var minutes = minusDate / (1000 * 60 )
// var seconds = minusDate / 1000
// var dayOfBorn = new Date(inp).getDay()

// document.write(`<br> Age : ${age.toFixed(1) } <br>
//                 Days : ${Math.floor(days) } <br>
//                 Hours : ${Math.floor(hours) } <br>
//                   Minutes : ${Math.floor(minutes)} <br>
//                   Seconds : ${Math.floor(seconds)} <br>
//                   Day Of Born : ${daysNames[dayOfBorn]} `)



var eid = new Date("17 jun 2024").getTime()
var today = new Date ().getTime()
var minus = eid - today
var days = minus / (1000*60*60*24)
var days1 = days - 30
var hours = 24 - (new Date () .getHours()) 
var minutes = 60 - (new Date ().getMinutes())
var seconds = 60 - (new Date().getSeconds())
var total = days / 30


document.write(` ${Math.floor(total)} Month ${Math.floor(days1) } Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`)


// var abc ; 
// abc = setInterval(function() {
//    seconds++
     
// }, 1000);

// setTimeout(function(){
//     clearInterval(abc)
// },5000)