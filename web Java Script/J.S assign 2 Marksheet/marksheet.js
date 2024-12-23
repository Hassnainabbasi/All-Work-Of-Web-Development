var name = prompt("ENTER YOUR NAME")
var maths = +prompt("ENTER YOUR MATHS NUMBERS")
var english = +prompt("ENTER YOUR ENGLISH NUMBERS")
var urdu = +prompt("ENTER YOUR URDU NUMBERS")
var physics = +prompt("ENTER YOUR PHYSICS NUMBERS")
var chemistry = +prompt("ENTER YOUR CHEMISTRY NUMBERS")

var total = maths + english + urdu + physics + chemistry
var percentage = (total/500)*100
var grade;


if(percentage >= 80){
    grade = "A+"
}
else if (percentage >= 70){
    grade = "A"
   }
else if (percentage >= 60){
    grade = "B"
   }
else if (percentage >= 50){
    grade = "C"
   }
else if (percentage >= 40){
    grade = "D"
   }
else{
    grade = "FAIL"
}

document.write(
    `<table style="border:2px solid white; ">
    <tr style="background-color:blue;text-shadow: 2px 2px 5px white;border-collapse: collapse;">
        <th style="padding:5px">NAME</th>
        <th style="padding:5px">MATHS</th>
        <th style="padding:5px">ENGLISH</th>
        <th style="padding:5px">URDU</th>
        <th style="padding:5px">PHYSICS</th>
        <th style="padding:5px">CHEMISTRY</th>
        <th style="padding:5px">TOTAL</th>
        <th style="padding:5px">PERCENTAGE</th>
        <th style="padding:5px">GRADE</th>
    </tr>
    <tr style="background-color:lightblue;text-shadow: 1px 1px 2px black;border-collapse: collapse;">
        <td style="padding:5px">${name}</td>
        <td style="padding:5px">${maths}</td>
        <td style="padding:5px">${english}</td>
        <td style="padding:5px">${urdu}</td>
        <td style="padding:5px">${physics}</td>
        <td style="padding:5px">${chemistry}</td>
        <td style="padding:5px">${total}</td>
        <td style="padding:5px">${percentage .toFixed(2)} %</td>
        <td style="padding:5px">${grade}</td>
    </tr>
</table>`
)
