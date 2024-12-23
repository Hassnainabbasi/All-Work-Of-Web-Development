var box1 = document.getElementById("box-1")
var box2 = document.getElementById("box-2")
var box3 = document.getElementById("box-3")
var box4 = document.getElementById("box-4")
var box5 = document.getElementById("box-5")
var box6 = document.getElementById("box-6")
var box7 = document.getElementById("box-7")
var box8 = document.getElementById("box-8")
var restartBtn = document.getElementById("restart-btn")
var winLose = document.getElementById("win-lose")

var arrBoxes = [box1, box2, box3, box4, box5, box6, box7, box8]
var boxes = document.querySelectorAll(".box")
var counting = 1
var gameOver = false


boxes.forEach((box) => {
    box.innerHTML = ""
    box.addEventListener("click", () => {
        if (box.innerHTML === "") {
            box.innerHTML = counting
            counting++
        }

        loseCheck()
        winCheck()

    })
})


function winCheck() {

//     var winPattern = [[4, 6, 7, 1, 8, 2, 3, 5],
//     [3, 5, 7, 1, 8, 2, 4, 6],
//     [5, 3, 2, 8, 1, 7, 6, 4],
//     [6, 4, 2, 8, 1, 7, 5, 3]]

//  for(var i = 0 ; i < arrBoxes.length ; i++){
//     for(var j = 0 ; j < winPattern.length; j++){
//         for(var k = 0 ; k < winPattern[j].length ; k++){

//             if(arrBoxes[i].innerHTML == winPattern[j][k] && gameOver){
//                 winLose.innerHTML = "WIN"
//             }
//         }
//     }
//  }

    if (box1.innerHTML == 4 && box2.innerHTML == 6 && box3.innerHTML == 7 && box4.innerHTML == 1 && box5.innerHTML == 8 && box6.innerHTML == 2 && box7.innerHTML == 3 && box8.innerHTML == 5) {
        winLose.innerHTML = "You Win Genius"
        gameOver = true
        arrBoxes.forEach((box)=>{
            box.style.background = "green"
        })
    }
   else if (box1.innerHTML == 3 && box2.innerHTML == 5 && box3.innerHTML == 7 && box4.innerHTML == 1 && box5.innerHTML == 8 && box6.innerHTML == 2 && box7.innerHTML == 4 && box8.innerHTML == 6) {
        winLose.innerHTML = "You Win Genius"
        gameOver = true
        arrBoxes.forEach((box)=>{
            box.style.background = "green"
        })
    }
   else if (box1.innerHTML == 5 && box2.innerHTML == 3 && box3.innerHTML == 2 && box4.innerHTML == 8 && box5.innerHTML == 1 && box6.innerHTML == 7 && box7.innerHTML == 6 && box8.innerHTML == 4) {
        winLose.innerHTML = "You Win Genius"
        gameOver = true
        arrBoxes.forEach((box)=>{
            box.style.background = "green"
        })
    }
   else if (box1.innerHTML == 6 && box2.innerHTML == 4 && box3.innerHTML == 2 && box4.innerHTML == 8 && box5.innerHTML == 1 && box6.innerHTML == 7 && box7.innerHTML == 5 && box8.innerHTML == 3) {
        winLose.innerHTML = "You Win Genius"
        gameOver = true
        arrBoxes.forEach((box)=>{
            box.style.background = "green"
        })
    }



}

function loseCheck() {
    if (!gameOver) {
        var draw = true
        boxes.forEach(function (box) {
            if (box.innerHTML == "") {
                draw = false
            }
        })
        if (draw) {
            gameOver = true
            winLose.innerHTML = "You Lose Try again!"

            var arrPatterns = [
                [box2, box3, box4, box5],
                [box1, box4, box5, box6],
                [box1, box4, box7],
                [box1, box2, box3, box5, box7, box8],
                [box1, box2, box4, box6, box7, box8],
                [box2, box5, box8],
                [box3, box4, box5, box8],
                [box4, box5, box6, box7]]

            for (var i = 0; i < arrPatterns[0].length; i++) {
                if (parseInt(arrBoxes[0].innerHTML) + 1 == arrPatterns[0][i].innerHTML || parseInt(arrBoxes[0].innerHTML) - 1 == arrPatterns[0][i].innerHTML) {


                    arrBoxes[0].style.background = "red"
                    arrPatterns[0][i].style.background = "red"
                    // console.log(arrPatterns[0][i])
                }

            }
            for (var i = 0; i < arrPatterns[1].length; i++) {
                if (parseInt(arrBoxes[1].innerHTML) + 1 == arrPatterns[1][i].innerHTML || parseInt(arrBoxes[1].innerHTML) - 1 == arrPatterns[1][i].innerHTML) {


                    arrBoxes[1].style.background = "red"
                    arrPatterns[1][i].style.background = "red"
                    // console.log(arrPatterns[0][i])
                }

            }
            for (var i = 0; i < arrPatterns[2].length; i++) {
                if (parseInt(arrBoxes[2].innerHTML) + 1 == arrPatterns[2][i].innerHTML || parseInt(arrBoxes[2].innerHTML) - 1 == arrPatterns[2][i].innerHTML) {


                    arrBoxes[2].style.background = "red"
                    arrPatterns[2][i].style.background = "red"
                    // console.log(arrPatterns[2][i])
                }

            }
            for (var i = 0; i < arrPatterns[3].length; i++) {
                if (parseInt(arrBoxes[3].innerHTML) + 1 == arrPatterns[3][i].innerHTML || parseInt(arrBoxes[3].innerHTML) - 1 == arrPatterns[3][i].innerHTML) {


                    arrBoxes[3].style.background = "red"
                    arrPatterns[3][i].style.background = "red"
                    // console.log(arrPatterns[0][i])
                }

            }
            for (var i = 0; i < arrPatterns[4].length; i++) {
                if (parseInt(arrBoxes[4].innerHTML) + 1 == arrPatterns[4][i].innerHTML || parseInt(arrBoxes[4].innerHTML) - 1 == arrPatterns[4][i].innerHTML) {


                    arrBoxes[4].style.background = "red"
                    arrPatterns[4][i].style.background = "red"
                    // console.log(arrPatterns[0][i])
                }

            }
            for (var i = 0; i < arrPatterns[5].length; i++) {
                if (parseInt(arrBoxes[5].innerHTML) + 1 == arrPatterns[5][i].innerHTML || parseInt(arrBoxes[5].innerHTML) - 1 == arrPatterns[5][i].innerHTML) {


                    arrBoxes[5].style.background = "red"
                    arrPatterns[5][i].style.background = "red"
                    // console.log(arrPatterns[0][i])
                }

            }
            for (var i = 0; i < arrPatterns[6].length; i++) {
                if (parseInt(arrBoxes[6].innerHTML) + 1 == arrPatterns[6][i].innerHTML || parseInt(arrBoxes[6].innerHTML) - 1 == arrPatterns[6][i].innerHTML) {


                    arrBoxes[6].style.background = "red"
                    arrPatterns[6][i].style.background = "red"
                    // console.log(arrPatterns[0][i])
                }

            }
            for (var i = 0; i < arrPatterns[7].length; i++) {
                if (parseInt(arrBoxes[7].innerHTML) + 1 == arrPatterns[7][i].innerHTML || parseInt(arrBoxes[7].innerHTML) - 1 == arrPatterns[7][i].innerHTML) {


                    arrBoxes[7].style.background = "red"
                    arrPatterns[7][i].style.background = "red"
                    // console.log(arrPatterns[0][i])
                }

            }


        }
    }

}


restartBtn.addEventListener("click", restart)

function restart() {
    gameOver = false
    counting = 1
    boxes.forEach((box) => {
        box.innerHTML = ""
        box.style.background = " rgb(27, 27, 82)"
    })
    winLose.innerHTML = ""
}






