var ryu = document.getElementById("ryu")
var may = document.getElementById("may")
var ryuPosition = 10;
var mayPosition = 10;
var forwardRyu = false
var backwardRyu = false
var emoteRyu = false
var powerRyu = false
var jumpRyu = false
var downRyu = false
var forwardMay = false
var backwardMay = false
var emoteMay = false
var powerMay = false
var jumpMay = false
var downMay = false

window.addEventListener("keydown", action)

function action(event) {

    // RYU GAMING SETTING


    if (event.key === "d") {
        ryuFunc("forward")
    }
    else if (event.key === "a") {
        ryuFunc("backward")
    }
    else if (event.key === "e") {
        ryuFunc("emote")
    }
    else if (event.key === "q") {
        ryuFunc("power")
    }
    else if (event.key === "w") {
        ryuFunc("jump")
    }
    else if (event.key === "s") {
        ryuFunc("down")
    }
}

function ryuFunc(type) {
    if (type === "forward") {
        ryuPosition += 10
        ryu.style.left = ryuPosition + "px"
        if (!forwardRyu) {
            ryu.src = "images/ryu-forward.gif"
        }
        forwardRyu = true

    }

    else if (type === "backward") {
        ryuPosition -= 10
        ryu.style.left = ryuPosition + "px"
        if (!backwardRyu) {
            ryu.src = "images/ryu-backward.gif"
        }
        backwardRyu = true
    }
    else if (type === "emote") {
        if (!emoteRyu) {
            ryu.src = "images/ryu-pose.gif"

        }
        emoteRyu = true
    }
    else if (type === "power") {
        if (!powerRyu) {
            ryu.src = "images/ryu-power.gif"
            ryu.style.width = "1000px"
            ryu.style.height = "1000px"
            ryu.style.bottom = "-280px"
            // ryu.style.left = "70px"

        }
        powerRyu = true
    }
    else if (type === "jump") {
        if (!jumpRyu) {
            ryu.src = "images/ryu-jump.gif"
            ryu.style.width = "570px"
            ryu.style.height = "570px"
            ryu.style.bottom = "-5px"
            ryu.style.left = `${ryuPosition - 138}px`

        }
        jumpRyu = true
    }
    else if (type === "down") {
        if (!downRyu) {
            ryu.src = "images/ryu-down.gif"
            ryu.style.width = "380px"
            ryu.style.height = "380px"
            ryu.style.bottom = "-70px"
            ryu.style.left = `${ryuPosition - (-50)}px`
        }
        downRyu = true
    }

}

// MAY GAMING SETTING

window.addEventListener("keydown", actionMay)

function actionMay(event) {

    if (event.key === "j") {
        mayFunc("forward")
    }
    else if (event.key === "l") {
        mayFunc("backward")
    }
    else if (event.key === "o") {
        mayFunc("emote")
    }
    else if (event.key === "u") {
        mayFunc("power")
    }
    else if (event.key === "i") {
        mayFunc("jump")
    }
    else if (event.key === "k") {
        mayFunc("down")
    }
}


function mayFunc(type) {
    if (type === "forward") {
        mayPosition += 10
        may.style.right = mayPosition + "px"
        if (!forwardMay) {
            may.src = "images/may-forward.gif"
        }
        forwardMay = true

    }
    else if (type === "backward") {
        mayPosition -= 10
        may.style.right = mayPosition + "px"
        if (!backwardMay) {
            may.src = "images/may-backward.gif"
        }
        backwardMay = true
    }
    else if (type === "emote") {
        if (!emoteMay) {
            may.src = "images/may-emote1.gif"
             may.style.width = "380px"
            may.style.height = "380px"

        }
        emoteMay = true
    }
    else if (type === "power") {
        if (!powerMay) {
            may.src = "images/may-power.gif"
            may.style.width = "430px"
            may.style.height = "430px"
            may.style.bottom = "-30px"
             may.style.right = `${mayPosition - 50}px`

        }
        powerMay = true
    }
    else if (type === "jump") {
        if (!jumpMay) {
            may.src = "images/may-jump.gif"
            may.style.width = "570px"
            may.style.height = "570px"
            // ryu.style.bottom = "-5px"
            may.style.right = `${mayPosition - 138}px`

        }
        jumpMay = true
    }
    else if (type === "down") {
        if (!downMay) {
            may.src = "images/may-down.gif"
            // ryu.style.width = "380px"
            // ryu.style.height = "380px"
            // ryu.style.bottom = "-70px"
            // ryu.style.left = `${ryuPosition - (-50)}px`
        }
        downMay = true
    }

}



window.addEventListener("keyup", resetAction)

function resetAction() {
    // RYU SETTING
    ryu.src = "images/ryu-stand.gif"
    forwardRyu = false
    backwardRyu = false
    emoteRyu = false
    powerRyu = false
    jumpRyu = false
    downRyu = false
    ryu.style.width = "300px"
    ryu.style.height = "300px"
    ryu.style.bottom = "10px"
    ryu.style.left = ryuPosition + "px"

    // MAY SETTING
    may.src = "images/may-stand.gif"
    forwardMay = false
    backwardMay = false
    emoteMay = false
    powerMay = false
    jumpMay = false
    downMay = false
    may.style.width = "300px"
    may.style.height = "300px"
    may.style.bottom = "10px"
    may.style.right = mayPosition + "px"
}