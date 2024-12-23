var arr = [
    {
        questions: "1) Pakistan ka National Game kaunsa hai ?",
        option1: "Cricket",
        option2: "Hockey",
        option3: "Football",
        option4: "Baseball",
        correctOption: "Hockey"
    },
    {
        questions: "2) Pakistan ka National bird kaunsa ha ?",
        option1: "Chakor",
        option2: "Faakhta",
        option3: "Ukaab",
        option4: "Shaheen",
        correctOption: "Chakor"
    },
    {
        questions: "3) Pakistan ka National animal kaunsa hai ?",
        option1: "Elephant",
        option2: "Lion",
        option3: "Markhor",
        option4: "Cow",
        correctOption: "Markhor"
    },
    {
        questions: "4) Pakistan ka National Anthem kisne likha ?",
        option1: "Faizb Tabib",
        option2: "Allama Iqbal",
        option3: "Famida Riyaz",
        option4: "Hafeez Jhalandiri",
        correctOption: "Hafeez Jhalandiri"
    },
    {
        questions: "5) Wo kaunsa country ha jisme 33 log rehte hain ?",
        option1: "Molossia",
        option2: "Belize",
        option3: "Vatican",
        option4: "Zimbabwe",
        correctOption: "Molossia"
    },
    {
        questions: "6) Pakistan ka National flower kaunsa hai ?",
        option1: "Sunflower",
        option2: "Jasmine",
        option3: "Rose",
        option4: "Tulip",
        correctOption: "Jasmine"
    },
    {
        questions: "7) Human body me kitne bones hain ?",
        option1: "206",
        option2: "202",
        option3: "208",
        option4: "212",
        correctOption: "206"
    },
    {
        questions: "8) Wo kaunsa animal hai jo 10 years tak water k bger zinda reh skta ha ?",
        option1: "Camel",
        option2: "Kangroo",
        option3: "Yakh",
        option4: "Langoor",
        correctOption: "Kangroo"
    },
    {
        questions: "9) Sbse zada fruit dene wala tree kaunsa ha ?",
        option1: "Nashpati",
        option2: "Mango",
        option3: "Amrood",
        option4: "Jack fruit",
        correctOption: "Nashpati"
    },
    {
        questions: "10) Sooraj sbse phele kis country me rise hota ha ?",
        option1: "Singapore",
        option2: "Bangladesh",
        option3: "China",
        option4: "Japan",
        correctOption: "Japan"
    },
]


var qt = document.getElementById("qt")
var op1 = document.getElementById("op1")
var op2 = document.getElementById("op2")
var op3 = document.getElementById("op3")
var op4 = document.getElementById("op4")
var btn = document.getElementById("btn")
var quiz = document.getElementsByName("quiz")
var timer = document.getElementById("timer")
var points = document.getElementById("points")
var tryagain = document.getElementById("tryagain")
var img = document.getElementById("img")
var main = document.getElementById("main1")
var start = document.getElementById("start1")
var result = document.getElementById("result")
var score = 0
var seconds = 10
var index = 0

function next() {

    seconds = 10

    for (var i = 0; i < quiz.length; i++) {
        if (quiz[i].checked) {
            var inpValue = quiz[i].value
            var selectedQuestion = arr[index - 1].questions
            var selectAnswer = arr[index - 1][`option${inpValue}`]
            var correctAnswer = arr[index - 1].correctOption
            if (selectAnswer == correctAnswer) {
                score++
            }

        }
        quiz[i].checked = false
    }

    if (index > arr.length - 1) {
        points.innerText = `Your percentage is : ${score / 10 * 100}%`
        result.style.display = "flex"
        main.style.display = "none"


        if (score > 8) {
            img.src = "winner.gif"
        }
        else {
            img.src = "lose.gif"
        }
    }
    else {
        qt.innerText = arr[index].questions
        op1.innerText = arr[index].option1
        op2.innerText = arr[index].option2
        op3.innerText = arr[index].option3
        op4.innerText = arr[index].option4

        index++
        btn.disabled = true
    }

}

function clicked() {
    btn.disabled = false
}

function tryAgain() {
    index = 0
    score = 0
    result.style.display = "none"
    main.style.display = "flex"
    
    next()
}

function startQz(){
start.style.display = "none"
var interval = setInterval(function () {
    
    timer.innerText = seconds
    seconds--
    if (seconds < 0) {
        seconds = 10
        next()
    }
    
}, 1000);

main.style.display = "flex"

next()
}









