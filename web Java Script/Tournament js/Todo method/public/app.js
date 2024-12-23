var naam = []
var naam1 = []


var team1 = document.getElementById("team1")
var team2 = document.getElementById("team2")
var ol1 = document.getElementById("ol1")
var ol2 = document.getElementById("ol2")

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
    naam.push(team1.value)
    var li1 = document.createElement("li")
    li1.textContent = team1.value
    ol1.appendChild(li1)
    team1.value = ""
    // EDIT BUTTON 
    var editbtn = document.createElement("button")
    editbtn.textContent = "Edit"
    li1.appendChild(editbtn)
  editbtn.setAttribute("onclick","edit(this)")
  editbtn.className = "edit"
  
  // DELETE BUTTON 
  var delbtn = document.createElement("button")
  delbtn.textContent = "Delete"
  li1.appendChild(delbtn)
  delbtn.setAttribute("onclick","del(this)")
  delbtn.className = "delete"
}


function submit2(){
    naam1.push(team2.value)
    var li2 = document.createElement("li")
    li2.textContent = team2.value
    ol2.appendChild(li2)
    team2.value = ""
     // EDIT BUTTON 
     var editbtn = document.createElement("button")
     editbtn.textContent = "Edit"
     li2.appendChild(editbtn)
   editbtn.setAttribute("onclick","edit(this)")
   editbtn.className = "edit"
   
   // DELETE BUTTON 
   var delbtn = document.createElement("button")
   delbtn.textContent = "Delete"
   li2.appendChild(delbtn)
   delbtn.setAttribute("onclick","del(this)")
   delbtn.className = "delete"
  }


function edit(edt){
  var editValue = edt.parentNode.firstChild.textContent
  var edit = prompt("UPDATE NEW VALUE",editValue)
  edt.parentNode.firstChild.textContent = edit
  
}

function del(edt){
edt.parentNode.remove()
}


var plr1 = document.getElementById("plr1")
var plr2 = document.getElementById("plr2")


function match() {
    
    var sum = Math.random() * naam.length - 1
    var sum1 = Math.floor(sum) + 1
    var dusra = Math.random() * naam1.length - 1
    var dusra1 = Math.floor(dusra) + 1
    
    plr1.innerText = naam[sum1]
    naam.splice(sum1, 1)   
    sum1--
    console.log(naam)
    
    plr2.innerText = naam1[dusra1]
    naam1.splice(dusra1, 1)
    dusra1--  
    plr1.style.textTransform ="lowercase"
    plr2.style.textTransform ="lowercase"
    
    var cutOl1 = ol1.children
    for(var i= 0 ; i< cutOl1.length ; i++){
      if(plr1.innerText == cutOl1[i].firstChild.textContent){
        cutOl1[i].className = "cut"
      }
}

var cutOl2 = ol2.children
for(var j= 0 ; j< cutOl2.length ; j++){
  if(plr2.innerText == cutOl2[j].firstChild.textContent){
    cutOl2[j].className = "cut"
  }
}   
if(naam.length == 0){
  alert("ALL MATCHES HAS BEEN DONE")
  document.getElementById("match").disabled = true
}
plr1.style.textTransform ="capitalize"
plr2.style.textTransform ="capitalize"
}

function reset(){
   team1.value = ""
   team2.value = ""
  ol1.innerText = ""
  ol2.innerText = ""
  plr1.innerText = "Team A"
  plr2.innerText = "Team B"
  naam.splice(0,naam.length)
  naam1.splice(0,naam1.length)
  document.getElementById("match").disabled = false
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


