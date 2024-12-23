// QUESTION 1 

// var age = +prompt("ENTER AGE")

// switch (true) {
//   case age > 18:
//     console.log("Old enough");
//     break;
//   default:
//     console.log("Too young");
//     break;
// }

// QUESTION 2

// var num = +prompt("ENTER NUMBER")

// switch(true){
//     case num % 3 == 0:
//         console.log(num + " is divisible by 3")
//         break;
//         default:
//             console.log(num + " is not divisble by 3")
// }

// QUESTION 3 

// var num1 = +prompt("ENTER FIRST NUMBER")
// var num2 = +prompt("ENTER SECOND NUMBER")
// var op = prompt("ENTER OPERATOR")

// switch(true){
//     case op == "+":
//         console.log(num1 + num2)
//         break;
//     case op == "-":
//         console.log(num1 - num2)
//         break;
//     case op == "/":
//         console.log(num1 / num2)
//         break;
//     case op == "*" && op == "x":
//         console.log(num1 * num2)
//         break;
//     case op == "%":
//         console.log(num1 % num2)
//         break;
//         default:
//             console.log("INVALID")

// }

// QUESTION 4 

// function getWeekdayName(dayNumber) {
//     switch (dayNumber) {
//       case 0:
//         return "Sunday";
//       case 1:
//         return "Monday";
//       case 2:
//         return "Tuesday";
//       case 3:
//         return "Wednesday";
//       case 4:
//         return "Thursday";
//       case 5:
//         return "Friday";
//       case 6:
//         return "Saturday";
//       default:
//         return "Invalid day number";
//     }
//   }


//   var dayNumber = (new Date()).getDay(); 
//   var weekdayName = getWeekdayName(dayNumber);
//   console.log("Today is " + weekdayName);

// QUESTION 6

// function checkCar() {
//     var text;
//     var favCar = prompt("What is your favorite car?");
//     switch(favCar) {
//       case "BMW":
//         text = "German car";
//         break;
//       case "Ford":
//         text = "American car";
//         break;
//       case "Peugeot":
//         text = "French car";
//         break;
//       default:
//         text = "Unknown car name";
//         break;
//     }
//     document.write(text);
//   }

//   checkCar();

// QUESTION 8

// function displayMarksRange(grade) {
//     switch (grade.toUpperCase()) {
//       case "A":
//         console.log("Marks [ >= 90 and < 100 ]");
//         break;
//       case "B":
//         console.log("Marks [ >= 80 and < 90 ]");
//         break;
//       case "C":
//         console.log("Marks [ >= 70 and < 80 ]");
//         break;
//       case "D":
//         console.log("Marks [ >= 60 and < 70 ]");
//         break;
//       case "E":
//         console.log("Marks [ >= 50 and < 60 ]");
//         break;
//       default:
//         console.log("Invalid grade");
//         break;
//     }
//   }

//   // Example usage:
//   displayMarksRange("B"); // Output: Marks [ >= 80 and < 90 ]


// QUESTION 9

// let monthNumber = parseInt(prompt("Enter the number of a month (1-12):"));

// switch (monthNumber) {
//   case 1:
//     console.log("January");
//     break;
//   case 2:
//     console.log("February");
//     break;
//   case 3:
//     console.log("March");
//     break;
//   case 4:
//     console.log("April");
//     break;
//   case 5:
//     console.log("May");
//     break;
//   case 6:
//     console.log("June");
//     break;
//   case 7:
//     console.log("July");
//     break;
//   case 8:
//     console.log("August");
//     break;
//   case 9:
//     console.log("September");
//     break;
//   case 10:
//     console.log("October");
//     break;
//   case 11:
//     console.log("November");
//     break;
//   case 12:
//     console.log("December");
//     break;
//   default:
//     console.log("Invalid month number");
//     break;
// }

// QUESTION 10 

// let age = 17; // You can change the value of age to test different cases
// let voteable = (age < 18) ? "Too young" : "Old enough";

// console.log(voteable); // Outputs: "Old enough"

// QUESTION 14

// var mobile = ["Nokia","samsung","apple","sony","huawei"]
// var i = 0
// while (i<mobile.length){
//     document.write(mobile[i]+"<br>")
//     i++
// }

// QUESTION 16 

// let N = parseInt(prompt("Enter the number of items:"));
// let items = [];

// if (isNaN(N) || N <= 0) {
//     console.log("Invalid input. Please enter a valid positive number.");
// } else {
//     let i = 0;
//     while (i < N) {
//         let item = prompt("Enter item " + (i + 1) + ":");
//         items.push(item);
//         document.write(items[i] + "<br>");
//         i++;
//     }

// }

// QUESTION 18

// var bakers = ["cake", "apple pie", "cookie", "chips", "patties"];
// var inp = prompt("ENTER ITEM")
// var i = 0
// var flag = false

// while (i < bakers.length) {
// if(bakers[i] === inp){
//     flag = true
//     alert(`${bakers[i]} is available at index ${i} in our bakery`)
// break;
// }
// i++
// }

// if (flag == false){
//     alert("not found")
// }

// METHOD 2
// let userInput = prompt("Enter an item to search:");
// let found = false;
// let i = 0;

// while (i < A.length && !found) {
//   if (A[i] === userInput) {
//     found = true;
//   }
//   i++;
// }

// if (found) {
//   alert(userInput + " is found in the list.");
// } else {
//   alert(userInput + " is not found in the list.");
// }

// QUESTION 19 

var students = ["Ali", "Sami", "Taha", "Inam"];
var scores = [58, 73, 89, 90];
var i = 0
var j = 0

 var a =  `<table style="border: 3px solid black;">
    <tr>
        <th>STUDENTS</th>

    </tr>
    </table>`

    document.write(a)

while(i < students.length){
document.write(`

<tr>
    <td>${students[i]}</td>
    <br>
</tr>

`)
i++

}

// Given arrays
// var students = ["Ali", "Sami", "Taha", "Inam",];
// var scores = [58, 73, 89, 90];

// // Create a table element
// var table = document.createElement("table");

// // Create table header row
// var headerRow = table.insertRow();
// var th1 = document.createElement("th");
// th1.textContent = "Student";
// var th2 = document.createElement("th");
// th2.textContent = "Score";
// headerRow.appendChild(th1);
// headerRow.appendChild(th2);

// // Populate table with data
// for (var i = 0; i < students.length; i++) {
//     var row = table.insertRow();
//     var cell1 = row.insertCell();
//     var cell2 = row.insertCell();
//     cell1.textContent = students[i];
//     cell2.textContent = scores[i];
// }

// // Append table to the body of the HTML document
// document.body.appendChild(table);


// QUESTION 20

// var scores = [12, 45, 3, 22, 34, 50];
// var stp = +prompt("ENTER NUMBER")
// var i = 0 ; 

// while(i<scores.length){
//     console.log(scores[i])
//     if(scores[i] === stp){
//         break;
//     }

//     i++
// }




// // Function to print numbers from start of the array to desired stop value
// function printNumbers(stopValue) {
//     // Iterate through the array until the stop value is found
//     for (var i = 0; i < scores.length; i++) {
//         // Print each number until the stop value
//         console.log(scores[i]);
//         // If the current number is equal to the stop value, break out of the loop
//         if (scores[i] === stopValue) {
//             break;
//         }
//     }
// }

// // Get stop value from user
// var stopValue = parseInt(prompt("Enter the stop value:"));

// // Check if the stop value is valid
// if (!isNaN(stopValue)) {
//     // Call the function to print numbers up to the stop value
//     printNumbers(stopValue);
// } else {
//     console.log("Invalid input. Please enter a number.");
// }


// QUESTION 21 

// var a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// var i = 0
// while (i < a.length) {
//     var j = 0
//     while (j < a[i].length) {
//         document.write(a[i][j] )
//         j++
//     }
//     document.write("<br>")
//     i++
// }


// QUESTION 22 

// var inp = +prompt("ENTER NUMBER")
// var i = inp
// var arr = []
// while(0 <= i){
//     arr.push(i)
//     i = i - 0.5
// }

// document.write(arr)


// QUESTION 23
// var i = 1 
// while (i <= 20) {
//     // Check if the current number is even or odd
//     if (i % 2 === 0) {
//         console.log(i + " is even");
//     } else {
//         console.log(i + " is odd");
//     }
//     // Increment the counter
//     i++;
// }


// QUESTION 24 

// var product = 1;
// var num = 1;

// // While loop to iterate through odd integers from 1 to 7
// while (num <= 7) {
//     // Check if the current number is odd
//     if (num % 2 !== 0) {
//         // Multiply the product by the current number
//         product *= num;
//     }
//     // Move to the next number
//     num++;
// }

// // Print the product
// console.log("The product of the odd integers from 1 to 7 is: " + product);

