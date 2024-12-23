var inp = prompt("ENTER DATE OF BIRTH Like : 14 dec  1992")
// var inp = "14 dec 1992"
  var daysNames = ["Sunday","Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"]
  
  var todaysDate = new Date().getTime()
  var dobHasnain = new Date(inp).getTime()
  var minusDate = todaysDate - dobHasnain
  var age = minusDate / (1000 * 60 * 60 * 24 * 365)
  var days = minusDate / (1000 * 60 * 60 * 24 )
  var hours = minusDate / (1000 * 60 * 60 )
  var minutes = minusDate / (1000 * 60 )
  var seconds = minusDate / 1000
  var dayOfBorn = new Date(inp).getDay()
  var month = 12 - ((new Date (inp).getMonth()+1) - (new Date().getMonth()+1))   
  var day = new Date().getDate()
  var hour = new Date().getHours()
  var min = new Date().getMinutes()
  var sec = new Date ().getSeconds()

  var line1 = document.getElementById("col1")
  var line2 = document.getElementById("col2")
  var line3 = document.getElementById("col3")
  var line4 = document.getElementById("col4")
  var line5 = document.getElementById("col5")
  var line6 = document.getElementById("col6")
  
 setInterval(function() {
  sec ++
  if(sec == 60){
    sec = 0
  }
  line1.innerText = "Age : " + Math.floor(age) + "Years, " + month + "Months, " + day + "Days, " + hour + "H ," + min + "M ," + sec + "S"
  }, 1000);

  line2.innerText = "Days : " + Math.floor(days)
  line3.innerText = "Hours : " + Math.floor(hours)
  line4.innerText = "Minutes : " + Math.floor(minutes)
   
  setInterval(() => {
    seconds++
    line5.innerText = "Seconds : " + Math.floor(seconds)
  }, 1000);  

  
  line6.innerText = "Day Of Born : " + daysNames[dayOfBorn]
  
  
