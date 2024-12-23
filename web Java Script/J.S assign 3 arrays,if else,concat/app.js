// USER	INPUT	&	
// CONDITIONAL	STATEMENTS


// SOLUTION 1

// var a = prompt("PLEASE ENTER YOUR NAME")

// alert("Hi, "+a)

// SOLUTION 2

// var table = +prompt("ENTER TABLE NO")

// if (table == 5) {
//     for (var i = 1; i <= 10; i++) {
//         document.write(`${7} x ${i} = ${i * 7} <br>`)
//     }
// }
// else {
//     for (var i = 1; i <= 10; i++) {
//         document.write(`${table} x ${i} = ${i * table} <br>`)
//     }
// }

// SOLUTION 3

// var city = prompt("ENTER CITY NAME")

// if(city == "karachi"){
//     alert("WELCOME TO CITY OF LIGHTS")
// }
// else{
//     alert("invalid")
// }

// SOLUTION 4

// var gender = prompt("GENDER")

// if(gender=="male"){
//     alert("GOOD MORNING SIR")
// }
// else{
//     alert("GOOD MORNING MAM")
// }

// SOLUTION 5 

// var color = prompt("TRAFFIC SIGNAL COLOR")

// if(color == "red"){
//     alert("VEHICLE MUST STOP")
// }
// else if(color == "yellow"){
//     alert("VEHICLE SHOULD READY TO MOVE")
// }
// else if (color=="green"){
//     alert("VEHICLES CAN MOVE NOW")
// }

// SOLUTION 6 

// PASS

// SOLUTION 7

// PASS

// SOLUTION 8

// PASS

// SOLUTION 9

// var maths = +prompt("ENTER MATHS NUMBERS")
// var english = +prompt("ENTER ENGLISH NUMBER")
// var computer = +prompt("ENTER COMPUTER NUMBER")
// var marksObtained = maths + english + computer
// var percentage= marksObtained/300*100
// var grade;
// var remarks;

// if(percentage>=80){
//     grade="A+"
//     remarks="Excellent"
// }
// else if(percentage>=70){
//     grade="A"
//     remarks="Good"
// }
// else if(percentage>=60){
//     grade="B"
//     remarks="You need to improve"
// }
// else {
//     grade="Fail"
//     remarks="Sorry"
// }

// document.write(`
// <table border="2px">
//         <tr>
//             <th>PERCENTAGE</th>
//             <th>GRADE</th>
//             <th>REMARKS</th>
//         </tr>
//         <tr>
//             <td>${percentage.toFixed(1)}%</td>
//             <td>${grade}</td>
//             <td>${remarks}</td>
//         </tr>
//     </table>`)

// SOLUTION 10

// var nameitem1 = prompt("NAME OF ITEM 1")
// var nameitem2 = prompt("NAME OF ITEM 2")
// var Priceitem1 = +prompt("ENTER PRICE ITEM 1")
// var Priceitem2 = +prompt("ENTER PRICE ITEM 2")
// var Orderedquantityitem1 = +prompt("ENTER ORDER QUANTITY OF ITEM 1")
// var OrderedQuantityitem2 = +prompt("ENTER ORDER QUANTITY OF ITEM 2")

// var totalpriceorder1 = Priceitem1 * Orderedquantityitem1
// var totalpriceorder2 = Priceitem2 * OrderedQuantityitem2

// var totalprice = totalpriceorder1 + totalpriceorder2 + 500
// var afterdiscountprice;

// if (totalprice > 5000) {
//     alert("CONGRATULATION YOU GOT THE 10% DISCOUNT OFFER BY 5000 PKR SHOPPING")
//     afterdiscountprice = totalprice - totalprice / 100 * 10
// }
// else {
//     afterdiscountprice = 0
// }
// document.write(`
// <h1>SHOPPING CART</h1><br>10% discount on 5000 PKR shopping <br> <br>
// <h2>Price of ${nameitem1} is : ${Priceitem1}<br>
// Quantity of ${nameitem1} is : ${Orderedquantityitem1}<br>
// Price of ${nameitem2} is : ${Priceitem2}<br>
// Quantity of ${nameitem2} is : ${OrderedQuantityitem2}<br><br>
// Shipping charges 500 <br><br>
// Total cost of your order is : ${totalprice} PKR<br>
// 10% Discounted price is : ${afterdiscountprice} PKR
// </h2>`)

// SOLUTION 11

// PASS

// SOLUTION 12

// PASS ?

// SOLUTION 13

// PASS

// SOLUTION 14 

// PASS ?

// SOLUTION 15

// var input = +prompt("ENTER VALUE")

// if (input % 2 == 0){
//     alert("EVEN NUMBER")
// }

// else{
//     alert("ODD NUMBER")
// }

// SOLUTION 16

// var input = +prompt("PLZ ENTER WEATHER TEMPERATURE IN KARACHI")

// if (input > 40) {
//     alert("ITS TOO HOT OUTSIDE.")
// }
// else if (input > 30) {
//     alert("THE WEATHER TODAY IS NORMAL.")
// }
// else if (input > 20) {
//     alert("TODAY'S WEATHER IS COOL.")
// }
// else if (input > 10) {
//     alert("OMG! TODAY'S WEATHER IS SO COOL.")
// }
// else {
//     alert("GAND PHAT GAE AJ TO")
// }

// SOLUTION 17

// var firstNumber = +prompt("ENTER FIRST NUMBER")
// var operation = prompt("ENTER OPERATION")
// var secondNumber = +prompt("ENTER SECOND NUMBER")
// var mutiply = ["*","x"]
// var plus = "+"
// var minus = "-"
// var divide = "/"
// // alert(`THE RESULT IS ${eval(`${firstNumber} ${operation} ${secondNumber}`)}`)

// if (operation === mutiply[0] || operation === mutiply[1]) {
//     alert(firstNumber * secondNumber)
// }
// else if (operation === plus) {
//     alert(firstNumber + secondNumber)
// }
// else if (operation === minus) {
//     alert(firstNumber - secondNumber)
// }
// else if (operation === divide) {
//     alert(firstNumber / secondNumber)
// }
// else {
//     alert("INVALID OPERATION")
// }

// SOLUTION 18

// var day = prompt("WHAT IS TODAY")

// if(day == "monday" || day == "tuesday" || day == "wednesday" || day == "thursday" || day == "friday"){
//     alert("IT'S A WEEK DAY")
// }
// else if (day == "saturday"){
//     alert("IT'S WEEKEND")
// }
// else if(day == "sunday"){
//     alert("YAY! IT'S A HOLIDAY")
// }
// else{
//     alert("INVALID")
// }

// SOLUTION 19 

// PASS

// SOLUTION 20

// var num1 = +prompt("FIRST NUMBER")
// var num2 = +prompt("SECOND NUMBER")

// if (num1 > num2) {
//     alert("THE GREATER NUMBER OF " + num1 + " AND " + num2 + " is " + num1)
// }
// else if (num1 < num2) {
//     alert("THE GREATER NUMBER OF " + num1 + " AND " + num2 + " is " + num2)
// }

// SOLUTION 21

// PASS ?

// SOLUTION 22

// PASS ?

// SOLUTION 23

// PASS ?

// IF…ELSE	&	ELSE	IF	STATEMENTS,	
// TESTING	SET	OF	CONDITIONS &	
// SWITCH	STATEMENTS

// SOLUTION 1

// var input = +prompt("ENTER NUMBER ")
// var check = input/3 

// if (input % 3 === 0) {
//     alert(`${input} is divisible by 3 
//     3 x ${check} = ${input}`)
// }
// else{
//     alert(input + " IS NOT DIVISIBLE BY 3")
// }

// SOLUTION 2

// var input = +prompt("ENTER NUMBER")

// if (input % 2 == 0){
//     alert(`${input} IS EVEN NUMBER`)
// }
// else if (input % 2 != 0 ){
//     alert(`${input} IS ODD NUMBER`)
// }

// SOLUTION 3

// PASS 

// SOLUTION 4 

// PASS 

// SOLUTION 5

// PASS ?

// SOLUTION 6 

// PASS ?

// SOLUTION 7 

// PASS ? 

// SOLUTION 8 

// var time = +prompt("WHAT's THE TIME IN 24 HOURS")

// if (time < 1200){
//     alert("GOOD MORNING")
// }
// else if (time < 1700){
//     alert("GOOD AFTERNOON")
// }
// else if (time < 2100){
//     alert("GOOD EVENING")
// }
// else if (time < 2359){
//     alert("GOOD NIGHT")
// }
// else{
//     alert("INVALID")
// }

// SOLUTION 9 

// PASS ? 

// SOLUTION 10 

// PASS 

// SOLUTION 11 

// var name = prompt("ENTER LOGIN NAME")

// if (name === "faizan"){
//     alert("HELLO FAIZAN ")
// }
// else {
//     alert("YOU ARE NOT FAIZAN ")
// }

// SOLUTION 12

// PASS ?

// SOLUTION 13

// PASS ?

// SOLUTION 14 

// PASS 

// SOLUTION 15 

// PASS 

// SOLUTION 16 

// PASS ?

// SOLUTION 17 

// var input = prompt("ENTER VOWEL NAME ")
// var vowel = ["a","e","i","o","u"]

// for(var i = 0 ; i<vowel.length; i++){
//     if(input[0] == vowel[i]){
//         alert("TRUE")
//         break;
//     }
//     else{
//         alert("FALSE")
//         break;
//     }
// }


// SOLUTION 18 

// PASS ?

// SOLUTION 19 

// PASS ? 

// SOLUTION 20 

// PASS ?

// ARRAYS

// SOLUTION 1


// var a = prompt("ENTER NAME")
// var naam = []
// naam.push(a)
// document.write(naam)

// SOLUTION 2 
// PASS 

// SOLUTION 3 

// STRING ARRAY 

// var a = ["a","4","true","abc"]

// SOLUTION 4 

// NUMBERS ARRAY

// var a = [1,2,34,21,5,9,23]

// SOLUTION 5 

// BOOLEAN ARRAY

// var a = [true,false]

// SOLUTION 6 

// MIXED ARRAY 

// var a = ["faizy",234,true,"karachi" ]

// SOLUTION 7 

// PASS 

// SOLUTION 8 

// var degree= ["HSC","BCS","HSC","BS","BCOM","MS","M.Phil","PhD"]

// document.write("<h1>Qualifications:</h1> <br><br>")
// for (var i = 1 ; i < degree.length ; i++){
//     document.write(`
//                     ${i} ) ${degree[i]} <br>`)
// }

// SOLUTION 9 

// var movie = ["Avengers","Spiderman","Jurassic World", "Inside out"]

// document.write("<h1>TOP MOVIES OF 2015:</h1>"+"<br><br>")

// for (var i = 0 ; i<movie.length ; i++){
//     document.write(`${i+1} ) ${movie[i]} <br>`)
// }
// document.write(`<br><br> Length of the array: ${movie.length}`)

// SOLUTION 10 

// var cars = ["Audi","Volvo","Ford","Lamborghini"]

// document.write(`<h1>Favourite Cars </h1><br><br> ${cars}<br><br>
//                First index of the array : 0 <br>
//                 Car at first index of the array : ${cars[0]}<br>
//                 Last index of the array : ${cars.length-1}<br>
//                 Car at last index of the array : ${cars[3]} `)


// SOLUTION 11

// var naam = ["Michael", "Jhon", "Tony"]
// var score = [320, 280, 480]

// for (var i = 0; i < naam.length; i++) {

//     for (var j = 0; j < score.length; j++){
//         document.write(`Score of ${naam[i]} is ${score[j]} . Percentage: ${(score[i]/500)*100} % <br>`)

//     }
// }

// SOLUTION 12

var color = ["red", "green", "yellow", "black"]

// a:
// var start = prompt("red,green,yellow,black                                                             ADD COLOR IN START")
// color.unshift(start)
// document.write(color)

// b:
// var start = prompt("red,green,yellow,black                                                             ADD COLOR IN END")
// color.push(start)
// document.write(color)

// c:
// var start = prompt("red,green,yellow,black                                                             ADD TWO COLOR IN START")
// color.splice(1,0,start)
// document.write(color)

// d:
// var start = prompt("red,green,yellow,black                                                             ADD COLOR IN START")
// color.shift(start)
// document.write(color)

// e:
// var start = prompt("red,green,yellow,black                                                             ADD COLOR IN START")
// color.pop(start)
// document.write(color)

// f:
// var index = +prompt("ENTER INDEX NUMBER")
// var colorName = prompt("ENTER COLOR NAME")
// color.splice(index,0,colorName)
// document.write(color)

// g:
// var start = +prompt("ENTER START DELETE INDEX")
// var end = +prompt("ENTER END DELETE INDEX")
// var abc = color.slice(start,end)
// document.write(abc)

// SOLUTION 13

// PASS ?

// SOLUTION 14

// PASS ?

// SOLUTION 15

// var city = ["karachi", "lahor", "islamabad", "peshawar", "quetta"]
// var slectedCity = []
// slectedCity.push(city[1], city[4])
// document.write(`<h1>Cities list:</h1><br>${city}<br><br> Selected cities list:<br> ${slectedCity}`)

// SOLUTION 16

// var word = ["This", "is", "my", "cat"]

// for (var i = 0; i < word.length; i++) {
//     document.write(word[i] + "  ")
// }

// SOLUTION 17 

// var devices = ["Keyboard", "Mouse", "Printer", "Monitor"]

// for (var i = 0; i < devices.length; i++) {
//     document.write(`Out:<br>${devices[i]}<br>`)
// }

// SOLUTION 18 

// var devices = ["Keyboard", "Mouse", "Printer", "Monitor"]

// for (var i = devices.length; i >= 0; i--) {
//     document.write(`Out:<br>${devices[i]}<br>`)
// }

// SOLUTION 19 

var mobile = ["NOKIA","MOTOROLA","SAMSUNG","APPLE"]
var opt = `
<option value="">${mobile[i]}</option>
`

for(var i = 0 ; i<mobile.length ; i++){

    
}
document.write(`<select name="" id="">
<option value="">${mobile[i]}</option>
</select>`)

// SOLUTION 20

// PASS ?

// SOLUTION 21

// PASS ?
























