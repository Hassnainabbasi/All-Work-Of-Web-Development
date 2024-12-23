// QUESTION 1 :
// alert("welcome to J.S world")

// QUESTION 2 :
// var userName="welcome to J.S world"
// alert(userName)

// QUESTION 3 :

// var birthYear = 1992
// document.write("My Birth Year is "+ birthYear)

// var visitorName = "SAMI KHAN"
// var productTitle = "XYZ clothing store"
// var quantity = "5 T-shirts"

// document.write("Visitor Name : "+visitorName+"<br>"+"Product Title : "+productTitle+"<br>"+"Quantity : "+quantity)
// QUESTION 4 :

// var $name = 9;
// var _name = 8;
// var name = 5;

// document.write($name+_name+name)

// // LEGAL VARIABLES

// var name69
// var name69_a

// // ILLEGAL VARIABLES

// var 69name
// var _name
// var $name
// var if_else_vn
// The variables names can't have any special characters ($, @, !, ?, &, *......) except an underscore '_'.

// QUESTION 5:

// 1. Write a program that take two numbers & add them in a new
// variable. Show the result in your browser.

// var a=13;
// var b=9;
//  alert("The sum of 13 and 9 is "+(a+b))

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus. E.g.

// var a=13;
// var b=9;
//  alert("Result of subtracting 9 from 13 is "+(a-b))

// 3. Do the following using JS Mathematic Expressions

// var a
// var b=3;
// var c=4;
// var d=11;
// var e=10;
// var f=1;

// document.write(`Value after variable declaration is ${a} <br> 
// Initial vaue : ${b} <br> 
// Value after increment is ${c}<br>
// Value after addition is ${d}<br>
// Value after decrement is ${e}<br>
// The reminder is ${f}`)

// 4. Cost of one movie ticket is 600 PKR. Write a script to store
// ticket price in a variable & calculate the cost of buying 5 tickets
// to a movie. Example output:

// var ticket=600;

// document.write(`Total cost to buy 5 tickets to a movie is ${ticket*5} PKR`)


// 5. Write a script to display multiplication table of any number in
// your browser. E.g.


// const number = parseInt(prompt('Enter an integer: '));

// for(let i = 1; i <= 10; i++) {
//     const result = i * number;
//     document.write(`${number} * ${i} = ${result}<br>`);
// }


// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.

// var celcius = +prompt("convert celcius into fahrenheit")
// var fahrenheit = +prompt("convert fahrenheit into celcius")
// var cel= (fahrenheit-32)*5/9
// var fah = (celcius*9/5)+32

// document.write((celcius + " C = ") + fah + " F" + "<br>")
// document.write((fahrenheit + " F = ") + cel + " C")


// 7. Write a program to implement checkout process of a shopping
// cart system for an e-commerce website. Store the following in
// variables

// var priceofitem1 = +prompt("price of item 1")
// var quantityofitem1 = +prompt("quantity of item 1")
// var priceofitem2 = +prompt("price of item 2")
// var quantityofitem2 = +prompt("quantity of item 2")
// var shippingcharges = 150

// document.write(`Price of item 1 is ${priceofitem1} <br>
//                 Quantity of item 1 is ${quantityofitem1} <br>
//                 Price of item 2 is ${priceofitem2} <br>
//                 Quantity of item 2 is ${quantityofitem2} <br><br>
//                 Shipping charges 150 <br><br>
//                 Total cost of your order is ${(priceofitem1*quantityofitem1)+(priceofitem2*quantityofitem2)+150} PKR`)

// 8. Write a script to take total marks & marks obtained by a
// student. Compute the percentage & show the result in your
// browser.

// var totalMarks=+prompt("Total Marks")
// var marksObtained=+prompt("Marks Obtained")

// document.write(`Total Marks : ${totalMarks}<br>
//                 Marks Obtained : ${marksObtained}<br>
//                Percentage : ${marksObtained/totalMarks*100} %`)

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script
// to convert the total currency to Pakistani Rupees. Perform all
// calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104 Pakistani Rupee and
// 1 Saudi Riyal = 28 Pakistani Rupee)

// var dollar=+prompt("dollar in rupees")
// var riyal=+prompt("riyal in rupees")

// document.write(`Total currency in PKR : ${(dollar*104)+(riyal*28)}`)

// 10. Write a program to initialize a variable with some number
// and do arithmetic in following sequence:

// var a=+prompt("Enter a number")

// alert(a+5*10/2)

// 11. The Age Calculator: Forgot how old someone is? Calculate
// it!

var currentYear=+prompt("Current Year")
var birthYear=+prompt("Birth Year")

document.write(`They are either ${currentYear-birthYear-1} or ${currentYear-birthYear} years old`)

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The area is
// NN”. (Hint : Area of a circle = π r2, π = 3.142)


// var radius=+prompt("Radius of circle")

// document.write(`Radius of circle is : ${radius} <br>
//                The circumference is : ${2*3.142*radius} <br>
//                The area is : ${3.142*radius*radius}`)

// 13. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

// var a = +prompt("Value")

//     document.write(`The value of a is : ${a}<hr>
//                    The value of ++a is : ${++a}<br>
//                    Now the value of a is : ${a}<br><br>
//                    The value of a++ is : ${a}<br>
//                    Now the value of a is ${++a}<br><br>
//                    The value of --a is : ${a}<br>
//                    Now the value of a is : ${--a}<br><br>
//                    The value of a-- is : ${a}<br>
//                    Now the value of a is ${--a}`)

// 14. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;

// var a = 2 ;
// var b = 1 ;
// var result = --a - --b + ++b + b--;

// document.write("Result : "+ result)

// 15. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is? Wonder no
// more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.

// Output the result to the screen like so: “You will need NNNN to
// last you until the ripe old age of NN”.

// ???????????????