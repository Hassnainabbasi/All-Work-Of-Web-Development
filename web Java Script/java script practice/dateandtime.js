// var getDate = new Date().getTime()
// document.write(getDate)

// var days = ['sun','mon','tues','wed','thurs','fri','sat']
// var getDay = new Date().getDay()
// document.write(days[getDay])


var inp = prompt("ENTER DATE OF BIRTH")
var todaysDate = new Date().getTime()
var dobHasnain = new Date(inp).getTime()
var minusDate = todaysDate - dobHasnain
var formula = minusDate / (1000 * 60 * 60 * 24 * 365)


document.write(Math.floor(formula)+"<br>"+minusDate)


