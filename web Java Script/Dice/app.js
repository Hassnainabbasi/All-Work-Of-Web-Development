
function luck() {
    var num = (Math.random() * 5)
    var num1 = Math.round(num) + 1
if(num1 == 1){
    document.getElementById("main").style.backgroundImage = "url('./img/kela.jpeg')"
    document.getElementById('dice').src = "./img/dice 1.jpg"
}    
else if(num1 == 2){
    document.getElementById("main").style.backgroundImage = "url('./img/donkey.jpg')"
    document.getElementById('dice').src = "./img/dice 2.jpg"
}    
else if(num1 == 3){
    document.getElementById("main").style.backgroundImage = "url('./img/joker.webp')"
    document.getElementById('dice').src = "./img/dice 3.jpg"
}    
else if(num1 == 4){
    document.getElementById("main").style.backgroundImage = "url('./img/bike.jpeg')"
    document.getElementById('dice').src = "./img/dice 4.jpg"
}    
else if(num1 == 5){
    document.getElementById("main").style.backgroundImage = "url('./img/sharukh.jpeg')"
    document.getElementById('dice').src = "./img/dice 5.jpg"
}    
else if(num1 == 6){
    document.getElementById("main").style.backgroundImage = "url('./img/king.jpg')"
    document.getElementById('dice').src = "./img/dice 6.jpg"
}    
}
