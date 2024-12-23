// TODO LIST FUNCTIONS 
var inp = document.getElementById("inp")

inp.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("btn1").click();
  }
});

function todo() {

  if(inp.value == ""){
    alert("PLZ FILL THE INPUT")
  }
  else{

    var ol = document.getElementById("ol")
    var li = document.createElement("li")
    ol.appendChild(li)
    li.innerText = inp.value
    inp.value = ""
  // EDIT BUTTON 
    var editbtn = document.createElement("button")
    editbtn.textContent = "EDIT"
    li.appendChild(editbtn)
  editbtn.setAttribute("onclick","edit(this)")
  editbtn.className = "edt"
  
  // DELETE BUTTON 
  var delbtn = document.createElement("button")
  delbtn.textContent = "DELETE"
  li.appendChild(delbtn)
  delbtn.setAttribute("onclick","del(this)")
  delbtn.className = "delete"
  li.className = "list"
  }
}

function edit(edt){
  var editValue = edt.parentNode.firstChild.textContent
  var edit = prompt("UPDATE NEW VALUE",editValue)
  edt.parentNode.firstChild.textContent = edit
  
}

function del(edt){
edt.parentNode.remove()
}

function delAll(){
  inp.value = ""
document.getElementById("ol").innerHTML = ""
}



























// NUMBER GAME FUNCTIONS 
// var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

function cross() {

  var sum = Math.random() * 20
  var sum1 = Math.floor(sum) + 1
  console.log(sum1)

  var count = document.getElementById('count')
  count.innerText = sum1
  //  arr.splice(sum1 - 1, 1)
  //  console.log(arr) 




  if (sum1 == 1) {
    document.getElementById("slot1").className = "counting"
  }

  else if (sum1 == 2) {
    document.getElementById("slot2").className = "counting"
  }
  else if (sum1 == 3) {
    document.getElementById("slot3").className = "counting"
  }
  else if (sum1 == 4) {
    document.getElementById("slot4").className = "counting"
  }
  else if (sum1 == 5) {
    document.getElementById("slot5").className = "counting"
  }
  else if (sum1 == 6) {
    document.getElementById("slot6").className = "counting"
  }
  else if (sum1 == 7) {
    document.getElementById("slot7").className = "counting"
  }
  else if (sum1 == 8) {
    document.getElementById("slot8").className = "counting"
  }
  else if (sum1 == 9) {
    document.getElementById("slot9").className = "counting"
  }
  else if (sum1 == 10) {
    document.getElementById("slot10").className = "counting"
  }
  else if (sum1 == 11) {
    document.getElementById("slot11").className = "counting"
  }
  else if (sum1 == 12) {
    document.getElementById("slot12").className = "counting"
  }
  else if (sum1 == 13) {
    document.getElementById("slot13").className = "counting"
  }
  else if (sum1 == 14) {
    document.getElementById("slot14").className = "counting"
  }
  else if (sum1 == 15) {
    document.getElementById("slot15").className = "counting"
  }
  else if (sum1 == 16) {
    document.getElementById("slot16").className = "counting"
  }
  else if (sum1 == 17) {
    document.getElementById("slot17").className = "counting"
  }
  else if (sum1 == 18) {
    document.getElementById("slot18").className = "counting"
  }
  else if (sum1 == 19) {
    document.getElementById("slot19").className = "counting"
  }
  else if (sum1 == 20) {
    document.getElementById("slot20").className = "counting"
  }


}