

// let hello = document.querySelector("button");
// hello.addEventListener("click",showmsg);

// function showmsg(){
//     let name=prompt("enter your name");
//     hello.textContent="Roll no .1 : " + name; 
// }

// console.log("hello")

// let age=Math.random();
// let grace=4;
// let time=17;
// console.log(age+grace+time)

// if((age)>21){
//     console.log("you can drive");
// }
// else{
//     console.log("you cannot drive")
// }



// let a=1;

// for (let index = 0; index < 100; index++) {
// console.log(a+index);
// }

// function yelo(name) {
//     console.log("hey " + name + " u r nice")
//     console.log("hey " + name + " u r nice")
//     console.log("hey " + name + " u r nice")
//     console.log("hey " + name + " u r nice")
// }
// yelo("faizan")

// yelo("ZOHAN")

// function sum(a, b, c = 3) {
//     return (a + b + c)
// }
// result = sum(5, 5)
// result1 = sum(10, 3, 7)

// console.log("the sum of these numbers is", result)
// console.log("the sum of these numbers is", result1)

// const func1 = (x) => {
// console.log("i am an arrow function", x)
// }

// func1(34);
// func1(66);
// func1(100);

// let a = "FAIZY"
// let b = "ZOHAN"
// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2]);
// console.log(a[3]);
// console.log(a[4]);
// console.log(a[5]);
// console.log(a.length)
// console.log(a.toUpperCase())
// console.log(a.toLowerCase())
// console.log(a.slice(2,5))
// console.log(a.slice(1))
// console.log(a.replace("FA","786"))
// console.log(b.concat(a,"YOUSRA"))

// let baap = "FAIZY"
// let son = "ZOHAN"
// console.log("my name is " + baap + " and my son name is " + son)
// console.log(`my name is ${baap} and my son name is ${son}`)

/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the times

*/

// let random = Math.random()
// console.log(random)
// let a = prompt("Enter first number")
// let c = prompt("Enter operation")
// let b = prompt("Enter second number")

// let obj = {
//     "+": "-",
//     "*": "+",
//     "-": "/",
//     "/": "**",
// }



// if (random > 0.5) {
//     // Perform correct calculation
//     console.log(`The result is ${a} ${c} ${b}`)
//     alert(`The result is ${eval(`${a} ${c} ${b}`)}`)

// }

// else {
//     // Perform wrong calculation
//     c = obj[c]
//     alert(`The result is ${eval(`${a} ${c} ${b}`)}`) 

// }
// document.write(`The result is ${eval(`${a} ${c} ${b}`)}`)


// var email = prompt("ENTER YOUR EMAIL")
// var pass = prompt("ENTER YOUR PASSWORD")

// if(email == "abc@gmail.com" && pass == 12345678){
//     document.write("LOGIN SUCCESFUL")
// }
// else{
//     document.write("INVALID")
// }

// var a = prompt("CLASS LENE HA KIA")

// if(a == "yes"){
//     document.write("CLASS LENE CHALO")
// }
// else if(a == "no"){
//     document.write("BEGUM K SATH DATE PE CHALO")
// }
// else{
//     document.write("NIKAL")
// }

// var a = +prompt("ENTER A TABLE NUMBER")
// var b = +prompt("ENTER A LENGTH OF TABLE")

// for(var i = 1 ; i<=b; i++ ){
//     document.write(`${a} x ${i} = ${a*i}  <br>`)
// }


// var number = +prompt("Enter a number")


// // SWITCH OPERATOR

// switch (number){
//     case 1:
//         document.write("The value is",number)
//         break;
//     case 2:
//         document.write("The value is 2")
//         break;
//     case 3:
//         document.write("The value is 3")
//         break;
//     case 4:
//         document.write("The value is 4")
//         break;
//     default:
//         document.write("The value is something else")
// }



// ternary operator

// var a = 8 

// var result = a > 5 ? "ok" : "not" 

// console.log(result)

// var number = +prompt("Enter a number")

// var a = (number % 2 == 0)?  "Even" : "Odd"

// document.write(a)

// Arrays

// var students = ["talah","hashir",23, true, 34,76]
// students.pop()
// console.log(students)

// var newstudent = students

// newstudent[0]=23
// console.log(newstudent)

// push()  add value to end
// unshift() add value to begining
// pop()  remove last element
// shift() remove first element

// students.push("ali")

// students.unshift("hello")

//  students.shift()


//  var student1 = "ali"
//  var roll_no = "1234"
//  var ins = "SMIT"
//  var course = "W&M"

// var ins = "SMIT"
// var arr = ["ali", 1234, ins, "W&M"]
// arr.pop()
// arr.pop()
// arr.pop()
// arr.push("taha","yaqoob")

// document.write(arr + "<br>")
// document.write(arr[0]+" "+arr[1])


// var boysArray = ["Saad", "talha", "hashir", "Bin hashim"]
// boysArray.unshift("SMIT")
// boysArray.shift()
// boysArray.shift()
// boysArray.shift()
// boysArray.shift()



// boysArray.pop()
// boysArray.pop()

// document.write(boysArray)



// var girlsArray = ["Hoorain", "woosqa", "Bala", "fatima"]
// boysArray.push(girlsArray)
// document.write(boysArray)




// var numbers= [1,2,3,4,5,6,7,8,9]


// var arr = ["ali", 1234, "W&M", 'a' , 'b']

// var arr2 = arr.slice(2,4)

// document.write(arr2)


//splice


// var arr = ["ali", 1234, "W&M", 'a' , 'b']

// arr.splice(2,2,"faizy")

// document.write(arr)


// for (let i = 0; i < 50; i++) {
//     if (i % 2 != 0)
//     document.write(i+"<br>")

// }






// var arr = ["apple", "banana", "peach", "kiwi", "orange"]
// var arr2 = ["fruits", "phal"]

// for(var i=0; i<arr.length; i++){
//     for(var j=0; j<arr2.length; j++){
//         document.write(`${arr[i]} ${arr2[j]} <br> `)
//     }
// }

// for(var i=0; i<arr.length; i++){
//     document.write(arr[i]+" "+ arr2+ "<br>")
// }

// apple fruit
// apple phal

// banana fruit
// banana phal 

// for(var i=1; i<=100; i=i+10){
//     for(var j=i; j<i+10; j++){
//         document.write(j+" ")
//     }
//     document.write("<br>")
// }

// for(var i=1; i<=5; i++){
//     for(var j=1; j <= i; j++){
//         document.write(j+" ")
//     }
//     document.write("<br>")
// }

// var a = [2, 5, 8, 6, 12, 3, 1, 9, 20]
// var two = []
// var three = []
// var sum = 0
// var sum2 = 0
// for (var i = 0; i < a.length; i++) {
//     if (a[i] % 2 == 0) {
//         two.push(a[i])
//         sum+=a[i]
//     }
//     if (a[i] % 3 == 0){
//         three.push(a[i])
//         sum2+=a[i]
//     }
// }
// document.write(two +  " sum of this array is " + sum + "<br>")
// document.write(three + " sum of this array is " + sum2)

// document.write(two+"<br>"+three)

// var str = 'ABCDE'
// var check = str.indexOf("E")
// console.log(check)

// var str = 'hello world hello world'
// var rep = str.replace(/world/,'pakistan')
// console.log(rep)


// var num = 72.5
// document.write(Math.ceil(num)+"<br>")
// document.write(Math.floor(num)+"<br>")
// document.write(Math.round(num))

// var num = Math.random() *101
// console.log(Math.floor(num))

// var heads = prompt("Enter player 1 name with head")
// var tails = prompt("Enter player 2 name with tails")
// var toss = Math.random() * 2
// var convert = Math.floor(toss)
// document.write(convert)
// if(convert == 0){
//     alert(heads+ " heads wins")
// }
// else{
//     alert(tails+ " tails wins")
// }

// var num = "4"
// var num2 = parseInt(num)
// var num2 = Number(num)
// console.log(typeof(num2))

// var str = 4
// var str2 = str.toString()
// var abc = 5
// console.log(typeof(str2))
// document.write(str2+abc)





// var num = 1;
// var num = 2;
// num = 8
// num = num + 2
// num += 10

// document.write(num)

// var num1 = 5
// var num2 = 2
// var num3 = 4
// var eq = ++num1 - --num3 - ++num2 - --num2 + ++num1 + num1++ + --num1 + --num2 - num3-- + num3
//   6     -   3    -  3     -   2    +   7    +   7    +    7   +    1   -  3     +  2
// document.write(eq)


// var eq = '0' && NaN && undefined || true || 'hello'
//                 NaN || true || 'hello'

// var eq = true || 'hello'


// document.write(eq)


// document.write(('b' + 'a' + + 'a' + 'a').toLowerCase());

// var a = 1 ; 
// document.write(typeof typeof a)


// for (var i = 1; i <= 9; i++) {
//     for (var t = 1; t < 9; t = t + 2) {

//         for (var j = 9; j >= t; j--) {
//             document.write("&nbsp;")
//         }
//     }
//     for (var k = 1; k <= i; k++) {
//         document.write(k + " ")

//     }
//     document.write("<br>")
// }



// for (var i = 8; i >= 1; i--) {
//     for (var j = i; j <= 9; j++) {
//         document.write("&nbsp;")
//     }
//     for (var k = 1; k <= i; k++) {
//         document.write(k+" ")

//     }
//     document.write("<br>")
// }



// var boy =  prompt("ENTER BOY NAME")
// var girl = prompt("ENTER GIRL NAME")



// var sum = boy.length + girl.length
// if(sum === 12){
//     document.write("TRUE LOVE")
// }
// else{
//     document.write("BAD")
// }

// var arr = ["faizy"]
// document.write(arr[0].length)


// var inp = prompt("ENTER ANY WORD");

// var first = inp.slice(0,1).toUpperCase();

// var center = inp.slice(1,length-1).toLowerCase();

// var end = inp.slice(length-1).toUpperCase();

// var sub = first + center + end

// document.write(sub)

// function abc(a,b){
// document.write(a+b)
// }

// abc(1,2)
// abc(1,2)
// abc(1,2)



// function minus(a, b, c){
//     return a + b * c
// }

// var getAns = minus(+prompt("Enter value a"),+prompt("Enter value b"),+prompt("Enter value c"))

// document.write(getAns)

// function sum(c, d){
//     return c + d
// }


// function hasnain(){

//     var baqi = document.getElementById("showMore").style.display = 'inline'

//     var text = prompt("Enter paragrapgh length")
//     var getPara = document.getElementById('para')
//     getPara.innerText = text
//     document.getElementById('anc').innerHTML = ''
// }

// var para = document.getElementById('para');

// var remainingText = para.innerText.slice(50)

// para.innerText = para.innerText.slice(0 , 50);

// console.log(para)

// function showMore(){
//     document.write(para.innerText +  remainingText)
//     document.getElementById('anc').innerHTML=""
//     document.getElementById("can").style.display = "inline"
// }




// var getData = document.getElementById("zero")
// var javaData = new Date().getTime();


// setInterval(function() {
//     javaData++
//     getData.innerHTML = javaData + " faizy"

// }, 1000);




// var get = document.getElementById("zero")

// setInterval(timer , 1000);

// function timer (){
//     var date = newz Date().toLocaleTimeString();
//     get.innerHTML = date
// }


// var a = document.getElementById("hello")
// var b = new Date().getDate()
// a.innerText = "Age ;" + b


// function clr(){

//     document.getElementById('inp').value += 1
// }


// function five(){
//     document.getElementById('inp').value += 5
// }

// function chng(color){
//     document.getElementById("get").style.background = color 
// }

// var color = ["red","green","blue","black","yellow"]
// var index = 0

// function one(){
//          document.body.style.background = color[index]
//          index = (index + 1)% color.length

// }


// var a =  2 % 5

// console.log(a)

// var input = document.getElementById("myInput");
// input.addEventListener("keypress", function(event) {
//   if (event.key === "Enter") {
//     event.preventDefault();
//     document.getElementById("myBtn").click();
//   }
// });


// function enter(){
//     alert(`hello`)
// }

// function makeFieldYellow(){
//   document.getElementById("lelo").style.background = "red"
// }

// function makeFieldWhite(){
//   document.getElementById("lelo").style.background = "white"
// }

//  function checkAddress(fieldId) {
//   if (document.getElementById(fieldId).value === "") {
//    alert("Email address required.");
//    }
//    }

// function enter(){
//   var inp = document.getElementById("inp")

//   if(inp.value === ""){
//     alert("required field")
//   }
// }


// function fillCity() {
//   var cityName;
//   var zipEntered = document.getElementById("zip").value;
//   switch (zipEntered) {
//     case "60608":
//       cityName = "Chicago";
//       break;
//     case "68114":
//       cityName = "Omaha";
//       break;
//     case "53212":
//       cityName = "Milwaukee";
//   }
//   document.getElementById("city").value = cityName;
// }

// function gaib(){
//   document.getElementById("bulb").className += "border hidden"
// }

// var color = ["red","green","blue","black","yellow"]
// var index = 0

// setInterval(sum, 1000);

// function sum(){
         
//     if(index < color.length){
//         document.body.style.background = color[index]
//         index++   
//     }
//     else{
//         index = 0
//         document.body.style.background = color[index]
//     }
         

// }

// var arr = [{
//     value1 : "one",
//     value2 : "two",
//     value3 : {value3 : "three",
//         value4 : "four"
//     }
// }]


// document.write(arr[0].value3.value3)















