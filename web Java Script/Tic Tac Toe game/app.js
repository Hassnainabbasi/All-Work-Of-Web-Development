var boxes = document.querySelectorAll(".box")
var turn = "X"
var gameOver = false
console.log(!gameOver)

boxes.forEach(function (e) {
    e.innerHTML = ""
    e.addEventListener("click", function () {

        if (!gameOver && e.innerHTML == "") {
            e.innerHTML = turn
            checkWin()
            draw()

            if (turn == "X") {
                turn = "O"
                document.getElementById("x").style.color = "white"
                document.getElementById("o").style.color = "red"
            }
            else {
                turn = "X"
                document.getElementById("o").style.color = "white"
                document.getElementById("x").style.color = "red"
            }
        }

    })
})

function checkWin() {

    let winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]

    for (var i = 0; i < winConditions.length; i++) {
        var value0 = boxes[winConditions[i][0]].innerHTML;
        var value1 = boxes[winConditions[i][1]].innerHTML;
        var value2 = boxes[winConditions[i][2]].innerHTML;
        if (value0 != "" && value0 === value1 && value0 === value2) {
            gameOver = true
            document.getElementById("winner").innerHTML = turn + "  win"
            for (var j = 0; j < 3; j++) {
                boxes[winConditions[i][j]].style.backgroundColor = "aqua"
                boxes[winConditions[i][j]].style.color = "black"
            }
        }
    }
    
    
}

function draw(){
    if(!gameOver){
        var draw = true
        boxes.forEach(function(e){
            if(e.innerHTML == ""){
                draw = false
            }
        })
        if(draw){
            gameOver = true
            document.getElementById("winner").innerHTML = "Draw"
        }
    }
}


document.getElementById("restart").addEventListener("click", function () {
    gameOver = false
    turn = "X"
    document.getElementById("winner").innerHTML = ""
    document.getElementById("o").style.color = "white"
    document.getElementById("x").style.color = "red"

    boxes.forEach(function (e) {
        e.innerHTML = ""
        e.style.removeProperty("background-color")
        e.style.color = "white"
    })


})