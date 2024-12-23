

setInterval(function(){
    
    var one = Math.floor(Math.random()*255)
    var two = Math.floor(Math.random()*255)
    var three = Math.floor(Math.random()*255)
    
    
    document.getElementById("container").style.backgroundColor = `rgb(${one},${two},${three})`
     

},100)


  var boxes =  document.querySelectorAll("#box")



setInterval(function(){
    
    var one = Math.floor(Math.random()*255)
    var two = Math.floor(Math.random()*255)
    var three = Math.floor(Math.random()*255)
    
    boxes.forEach(function(e){
        e.style.backgroundColor = `rgb(${one},${two},${three})`
     
    })
     

},100)