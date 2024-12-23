// 1 2 3 4 5 6 7 8 9 10
// 11 12 13 14 15 16 17 18 19 20
// 21 22 23 24 25 26 27 28 29 30
// 31 32 33 34 35 36 37 38 39 40
// 41 42 43 44 45 46 47 48 49 50
// 51 52 53 54 55 56 57 58 59 60
// 61 62 63 64 65 66 67 68 69 70
// 71 72 73 74 75 76 77 78 79 80
// 81 82 83 84 85 86 87 88 89 90
// 91 92 93 94 95 96 97 98 99 100


// for (var i = 1; i <= 100; i = i + 10) {
//     for (var j = i; j < i + 10; j++) {
//         document.write(j + " ")
//     }
//     document.write("<br>")
// }

// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5


// for ( var i =1 ; i <= 5 ; i++){
//     document.write(`1 2 3 4 5 <br>`)
// }

// for (var i = 1; i <= 5; i++) {
//     for (var j = 1; j <= 5; j++) {
//         document.write(j + " ")
//     }
//     document.write("<br>")
// }

// 1
// 1 2
// 1 2 3
// 1 2 3 4 
// 1 2 3 4 5

// for (var i = 1; i <= 5; i++) {
//     for (var j = 1; j <= i; j++) {
//         document.write(j + " ")
//     }
//     document.write("<br>")
// }

// TRIANGLE COUNTING 

//      1
//     1 2
//    1 2 3 
//   1 2 3 4
//  1 2 3 4 5

// for (var i = 1; i <= 5; i++) {
//     for (var j = 5; j >= i; j--) {
//         document.write("&nbsp;")
//     }
//     for (var k = 1; k <= i; k++) {
//         document.write(k+" ")

//     }
//     document.write("<br>")
// }


// TRAIANGLE COUNTING 2

//        1
//       2 2
//      3 3 3
//     4 4 4 4
//    5 5 5 5 5   

// for (var i = 1; i <= 5; i++) {
//     for (var j = 5; j >= i; j--){
//         document.write("&nbsp;")
//     }
//     for(var k = 1 ; k <= i ; k++){
//         document.write(i+" ")
//     }
//     document.write("<br>")
// }

// ANOTHER COUNTING


// 1
// 2 3 
// 4 5 6 
// 7 8 9 10

// var count = 1 ; 
// for(var i = 1 ; i <= 4 ; i++){
//     for( var j = 1 ; j <= i ; j++){
//         document.write(count + " ")
//         count++;
//     }
//     document.write("<br>")
// }

// TRIANGLE COUNTING 

//       1
//      2 3
//     4 5 6
//    7 8 9 10

// var count = 1 ; 

// for(var i = 1 ; i <= 4 ; i++){
//     for( var k = 5 ; k >= i ; k-- ){
//         document.write("&nbsp;")

//     }
//     for( var j = 1 ; j <= i ; j++){
//         document.write(count + " ")
//         count++;
//     }
//     document.write("<br>")
// }

// ANOTHER COUNTING 

// 1
// 2 2
// 3 3 3 
// 4 4 4 4
// 5 5 5 5 5

// for ( var i = 1 ; i <= 5 ; i++){
//     for (var j = 1 ; j <= i ; j++){
//         document.write(i+" ")
//     }
//     document.write("<br>")
// }

// var num = [2, 3, 6, 18, 9, 57, 30, 108, 12, 45, 27, 4, 54]
// var first = []
// var second = []

// for (var i = 0; i < num.length; i++) {
// if(num[i]%2 == 0){
//     first.push(num[i])
// }


// if (num[i]%3 == 0 ){
//     second.push(num[i]) 
// }
// }

// document.write(first+"<br>"+second)




// var a = [2, 5, 8, 6, 12, 3, 1, 9, 20]
// var two = []
// var three = []
// var sum = 0
// var sum2 = 0
// for (var i = 0; i < a.length; i++) {
//     if (a[i] % 2 == 0) {
//         two.push(a[i])
//         sum += a[i]
//     }
//     if (a[i] % 3 == 0) {
//         three.push(a[i])
//         sum2 += a[i]
//     }
// }

// document.write(`${two} sum of this array is ${sum} <br> 
//                 ${three} sum of this array is ${sum2} 
//                 `)

// for(var i=0; i<=20; i++){
//     if(i % 2 == 0){
//         document.write(i+ "<br>")
//     }
//     else if(i % 2 == 1){
//         document.write(i+ "<br>")
//     }
// }

