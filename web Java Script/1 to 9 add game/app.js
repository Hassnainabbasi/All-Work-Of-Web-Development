var box1 = document.querySelector(".box1")
var box2 = document.querySelector(".box2")
var box3 = document.querySelector(".box3")
var box4 = document.querySelector(".box4")
var box5 = document.querySelector(".box5")
var box6 = document.querySelector(".box6")
var box7 = document.querySelector(".box7")
var box8 = document.querySelector(".box8")
var box9 = document.querySelector(".box9")
var result = document.getElementById("result")

var arr = []
var allBoxes = document.querySelectorAll(".box")
var count = 1
// console.log(allBoxes)

var checkPatterns = [[1, 2, 3], [1, 4, 7], [1, 5, 9], [2, 5, 8], [4, 5, 6], [3, 5, 7], [9, 8, 7], [9, 6, 3]]
var flag = false

allBoxes.forEach((box) => {
    box.innerHTML = ""
    box.addEventListener("click", () => {

        if (!flag && box.innerHTML == "") {

            box.innerHTML = count
            count++
        } else {
            flag = true
        }
    })
})

function winCheck() {
    var check = true
    console.log(arr)
    allBoxes.forEach((box) => {
        if (box.innerHTML === "") {
            check = false
        }
    })
    if (check) {

        for (var i = 0; i < checkPatterns.length; i++) {
            var value1 = parseInt(allBoxes[checkPatterns[i][0] - 1].innerHTML)
            var value2 = parseInt(allBoxes[checkPatterns[i][1] - 1].innerHTML)
            var value3 = parseInt(allBoxes[checkPatterns[i][2] - 1].innerHTML)
            var total = value1 + value2 + value3
            arr.push(total)
        }

        if (arr[0] == 15 && arr[1] == 15 && arr[2] == 15 && arr[3] == 15 && arr[4] == 15 && arr[5] == 15 && arr[6] == 15 && arr[7] == 15) {
            result.innerText = "You Win"
            result.style.color = "rgb(21, 255, 21)"
            allBoxes.forEach((box) => {
                box.style.background = "rgb(21, 255, 21)"
                box.style.color = "black"
            })
        } else {
            result.innerText = "You Lose"
            result.style.color = "red"
            allBoxes.forEach((box) => {
                box.style.background = "red"
                box.style.color = "black"
            })
        }

    }
    else {
        Swal.fire({
            title: "Plz fill all boxes!",
            text: "Best of luck!",
            icon: "info"
        });
    }
    addBoxes()
}

let clear = document.querySelectorAll(".clear")

function restart() {
    count = 1
    flag = false
    arr = []
    result.innerText = ""
    clear.forEach((clear) => {
        clear.innerHTML = "00"
        clear.style.color = "red"
    })
    allBoxes.forEach((box) => {
        box.innerHTML = ""
        box.style.background = "black"
        box.style.color = "yellow"
    })
}


function addBoxes() {
    let corner1 = document.getElementById("corner-1")
    let corner2 = document.getElementById("corner-2")
    let bottom1 = document.getElementById("bottom-1")
    let bottom2 = document.getElementById("bottom-2")
    let bottom3 = document.getElementById("bottom-3")
    let right1 = document.getElementById("right-1")
    let right2 = document.getElementById("right-2")
    let right3 = document.getElementById("right-3")

    right1.innerHTML = arr[0]
    bottom1.innerHTML = arr[1]
    corner1.innerHTML = arr[2]
    bottom2.innerHTML = arr[3]
    right2.innerHTML = arr[4]
    corner2.innerHTML = arr[5]
    right3.innerHTML = arr[6]
    bottom3.innerHTML = arr[7]

    clear.forEach((box) => {
        if (box.innerHTML == 15) {
            box.style.color = "green"
        }
    })

}