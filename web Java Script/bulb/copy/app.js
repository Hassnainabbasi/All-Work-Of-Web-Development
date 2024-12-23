var bulbState = false;
var color = "red";
var interval;
var interval2;

function on(){
    document.getElementById('b2').style.backgroundColor = "white"
    document.getElementById('b2').style.color = "black"
    document.getElementById("imgOff").style.display="none"
    document.getElementById("imgOn").style.display="block"
    setTimeout(clearInterval(interval),500)
    document.getElementById('b1').style.backgroundColor = "black"
    document.getElementById('b1').style.color = "white"
    document.getElementById('b3').style.backgroundColor = "black"
    document.getElementById('b3').style.color = "white"
    document.getElementById('b4').style.backgroundColor = "black"
    document.getElementById('b4').style.color = "white"
    document.getElementById('b3').disabled=false
    document.getElementById('b4').disabled=false
    setTimeout(clearInterval(interval2),500)
    document.getElementById("red").style.display="none"
    document.getElementById("yellow").style.display="none"
    document.getElementById("green").style.display="none"
    document.getElementById("blue").style.display="none"
}

function off(){
    document.getElementById('b1').style.backgroundColor = "white"
    document.getElementById('b1').style.color = "black"
    document.getElementById("imgOn").style.display="none"
    document.getElementById("imgOff").style.display="block"
    setTimeout(clearInterval(interval),500)
    document.getElementById('b2').style.backgroundColor = "black"
    document.getElementById('b2').style.color = "white"
    document.getElementById('b3').style.backgroundColor = "black"
    document.getElementById('b3').style.color = "white"
    document.getElementById('b4').style.backgroundColor = "black"
    document.getElementById('b4').style.color = "white"
    document.getElementById('b3').disabled=false
    document.getElementById('b4').disabled=false
    setTimeout(clearInterval(interval2),500)
    document.getElementById("red").style.display="none"
    document.getElementById("yellow").style.display="none"
    document.getElementById("green").style.display="none"
    document.getElementById("blue").style.display="none"
}

function sos(){
    setTimeout(clearInterval(interval2),500)
    interval = setInterval(()=>{
        if(bulbState==false){
            document.getElementById("imgOff").style.display="none"
            document.getElementById("imgOn").style.display="block"
            document.getElementById("red").style.display="none"
            document.getElementById("yellow").style.display="none"
            document.getElementById("green").style.display="none"
            document.getElementById("blue").style.display="none"
            bulbState = true
        }
        else{
            document.getElementById("imgOn").style.display="none"
            document.getElementById("imgOff").style.display="block"
            document.getElementById("red").style.display="none"
            document.getElementById("yellow").style.display="none"
            document.getElementById("green").style.display="none"
            document.getElementById("blue").style.display="none"
            bulbState = false
        }
    },500)
    document.getElementById('b3').disabled=true
    document.getElementById('b4').disabled=false
    document.getElementById('b1').style.backgroundColor = "black"
    document.getElementById('b1').style.color = "white"
    document.getElementById('b2').style.backgroundColor = "black"
    document.getElementById('b2').style.color = "white"
    document.getElementById('b3').style.backgroundColor = "white"
    document.getElementById('b3').style.color = "black"
    document.getElementById('b4').style.backgroundColor = "black"
    document.getElementById('b4').style.color = "white"
}

function disco(){
    interval2 = setInterval(()=>{
        if(color=='red'){
            document.getElementById("yellow").style.display="none"
            document.getElementById("red").style.display="block"
            document.getElementById("imgOff").style.display="none"
            document.getElementById("imgOn").style.display="none"
            color = "green"
        }else if(color=='green'){
            document.getElementById("red").style.display="none"
            document.getElementById("green").style.display="block"
            document.getElementById("imgOff").style.display="none"
            document.getElementById("imgOn").style.display="none"
            color = "blue"
        }else if(color=='blue'){
            document.getElementById("green").style.display="none"
            document.getElementById("blue").style.display="block"
            document.getElementById("imgOff").style.display="none"
            document.getElementById("imgOn").style.display="none"
            color = "yellow"
        }else{
            document.getElementById("blue").style.display="none"
            document.getElementById("yellow").style.display="block"
            document.getElementById("imgOff").style.display="none"
            document.getElementById("imgOn").style.display="none"
            color = "red"
        }  
    },500)
    setTimeout(clearInterval(interval),500)
    document.getElementById('b3').disabled=false
    document.getElementById('b4').disabled=true
    document.getElementById('b1').style.backgroundColor = "black"
    document.getElementById('b1').style.color = "white"
    document.getElementById('b2').style.backgroundColor = "black"
    document.getElementById('b2').style.color = "white"
    document.getElementById('b3').style.backgroundColor = "black"
    document.getElementById('b3').style.color = "white"
    document.getElementById('b4').style.backgroundColor = "white"
    document.getElementById('b4').style.color = "black"
}

