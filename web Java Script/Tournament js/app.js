var naam = []
var naam1 = []
var cond = false

var team1 = document.getElementById("team1")
var team2 = document.getElementById("team2")


team1.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("btn1").click();
    }
  });
  
team2.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();    
      document.getElementById("btn2").click();
    }
  });

function submit1(){
    naam.push(document.getElementById("team1").value)
    document.getElementById("team1").value = ""
    if(cond == false ){
        document.getElementById("slod1").innerText = "1 : " + naam[0]
        cond = true
    }
    else if(cond == true){
        document.getElementById("slod2").innerText = "2 : " + naam[1]
           cond = "not"
    }
    
    else if(cond == "not"){
        document.getElementById("slod3").innerText = "3 : " + naam[2]
           cond = "yes"
    }
    
    else if(cond == "yes"){
        document.getElementById("slod4").innerText = "4 : " + naam[3]
           cond = "han"
    }
    
    else if(cond == "han"){
        document.getElementById("slod5").innerText = "5 : " + naam[4]
           cond = "not"
    }
    
}


var cond1 = false
function submit2(){
    naam1.push(document.getElementById("team2").value)
    document.getElementById("team2").value = ""
    if(cond1 == false ){
        document.getElementById("slod6").innerText = "1 : " + naam1[0]
        cond1 = true
    }
    else if(cond1 == true){
        document.getElementById("slod7").innerText = "2 : " + naam1[1]
           cond1 = "not"
    }
    
    else if(cond1 == "not"){
        document.getElementById("slod8").innerText = "3 : " + naam1[2]
           cond1 = "yes"
    }
    
    else if(cond1 == "yes"){
        document.getElementById("slod9").innerText = "4 : " + naam1[3]
           cond1 = "han"
    }
    
    else if(cond1 == "han"){
        document.getElementById("slod10").innerText = "5 : " + naam1[4]
           cond1 = "not"
    }
    
}

var plr1 = document.getElementById("plr1")
var plr2 = document.getElementById("plr2")
var ghoom = false
// console.log(sum)

function match() {
    
    var sum = Math.random() * naam.length - 1
    var sum1 = Math.floor(sum) + 1
    var dusra = Math.random() * naam1.length - 1
    var dusra1 = Math.floor(dusra) + 1
    
    
    console.log(sum1)
    console.log(dusra1)
    
    
    
    if(sum1 == 0){
        document.getElementById("slod1").style.textDecoration = "line-through"
    }
    else if (sum1 == 1){
    document.getElementById("slod2").style.textDecoration = "line-through"
}
else if (sum1 == 2){
    document.getElementById("slod3").style.textDecoration = "line-through"
}
else if (sum1 == 3){
    document.getElementById("slod4").style.textDecoration = "line-through"
}
else if (sum1 == 4){
    document.getElementById("slod5").style.textDecoration = "line-through"
}


if(dusra1 == 0){
    document.getElementById("slod6").style.textDecoration = "line-through"
}
else if (dusra1 == 1){
    document.getElementById("slod7").style.textDecoration = "line-through"
}
else if (dusra1 == 2){
    document.getElementById("slod8").style.textDecoration = "line-through"
}
else if (dusra1 == 3){
    document.getElementById("slod9").style.textDecoration = "line-through"
}
else if (dusra1 == 4){
    document.getElementById("slod10").style.textDecoration = "line-through"
}


if (ghoom == false) {
    plr1.innerText = naam[sum1]
    naam.splice(sum1, 1)
    sum1--

    plr2.innerText = naam1[dusra1]
    naam1.splice(dusra1, 1)
    dusra1--  
}
}









// SINGLE ARRAY

// var naam = ["Pakistan", "England", "Srilanka", "Australia","India" , "Newzealand","South Africa","Afghanistan","Bangladesh","Ireland"]

// var plr1 = document.getElementById("plr1")
// var plr2 = document.getElementById("plr2")
// var ghoom = false
// // console.log(sum)

// function match() {
    
//     var sum = Math.random() * naam.length - 1
//     var sum1 = Math.floor(sum) + 1
//     var dusra = Math.random() * naam.length - 1
//     var dusra1 = Math.floor(dusra) + 1


    
//     if (ghoom == false) {
//         plr1.innerText = naam[sum1]
//         naam.splice(sum1, 1)
//         sum1--

//         plr2.innerText = naam[dusra1]
//         naam.splice(dusra1, 1)
//         dusra1--
//         console.log(naam)

//     }

// }
