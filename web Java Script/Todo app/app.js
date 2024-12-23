// TODO LIST FUNCTIONS 
var inp = document.getElementById("inp")
var ol = document.getElementById("ol")

inp.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("btn1").click();
  }
});

function todo() {
  
  var li = document.createElement("li")
  ol.appendChild(li)
  li.innerText = inp.value
  inp.value = ""
  // DELETE BUTTON 
  var delbtn = document.createElement("button")
  delbtn.textContent = "DELETE"
  li.appendChild(delbtn)
  delbtn.setAttribute("onclick", "del(this)")

}


function edit() {
  var edit = ol.children
  if(ol.innerText == ""){
    alert("FIRST CREATE A LIST")
    
  }

  else{

    var num = +prompt("ENTER SLOT NO.")
    
      for (var i = 0; i < edit.length; i++){
    if(i + 1  == num){
      var editName = prompt("ENTER UPDATED VALUE",edit[i].firstChild.textContent)
      edit[i].firstChild.textContent = editName
    
    }
    }
  }

  }
  



function del(edt) {
  edt.parentNode.remove()
}

function delAll() {
  inp.value = ""
  document.getElementById("ol").innerHTML = ""
}