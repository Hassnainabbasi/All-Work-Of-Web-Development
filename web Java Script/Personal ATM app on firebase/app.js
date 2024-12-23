import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    doc, setDoc
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDWpX54q6hgcoMYKaiflZKrKnOYnrP_zMs",
    authDomain: "faizan-dfce0.firebaseapp.com",
    projectId: "faizan-dfce0",
    storageBucket: "faizan-dfce0.appspot.com",
    messagingSenderId: "485967923941",
    appId: "1:485967923941:web:52df2dcfb20013b111e20c",
    measurementId: "G-QFG3YH5QMH"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


// AUTHENTICATION CODE
var signinEmail = document.getElementById("signin-email")
var signinPassword = document.getElementById("signin-password")
var signupName = document.getElementById("signup-name")
var signupEmail = document.getElementById("signup-email")
var signupPassword = document.getElementById("signup-password")
var loginBtn = document.getElementById("login-btn")
var signupBtn = document.getElementById("signup-btn")
var googleBtn = document.getElementById("login-google-btn")
var signoutBtn = document.getElementById("sign-out-btn")
var authContainer = document.querySelector(".auth-container")
var idArr = []
var flag = false


var writting = new Typed("#dynamic-name", {
    strings: ["welcome"],
    typeSpeed: 70,
    backSpeed: 70,
    loop: true
})
var writting1 = new Typed("#index-heading", {
    strings: ["Your Personal ATM"],
    typeSpeed: 70,
    backSpeed: 70,
    loop: true
})

onAuthStateChanged(auth, async (user) => {
    if (user) {
        const uid = user.uid;
        const p = (collection(db, "userdata"))
        const querySnapshot2 = await getDocs(p);
        querySnapshot2.forEach((doc) => {
            if (doc.data().userId == uid) {
                writting.strings[0] = `${doc.data().username} in your Personal ATM. `
            }
        })

        authContainer.style.display = "none"
        mainContainer.style.display = "block"
        states.innerHTML = ""
        console.log("login")
        idArr.push(user.uid)
        incomeArr = []
        expenseArr = []

        flag = true
        fetchData()

    } else {
        idArr = []
        authContainer.style.display = "flex"
        mainContainer.style.display = "none"
        console.log("logout")
        flag = false
        writting.strings[0] = ""
    }
});

// SIGNIN AUTH
if (loginBtn) {
    loginBtn.addEventListener("click", () => {
        signInWithEmailAndPassword(auth, signinEmail.value, signinPassword.value)
            .then((userCredential) => {
                console.log(userCredential)
                const user = userCredential.user;
                Swal.fire({
                    title: "Welcome!",
                    text: user.email,
                    icon: "success"
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                Swal.fire(errorMessage, errorCode)
            });
    })
}

// SIGNUP AUTH
if (signupBtn) {
    signupBtn.addEventListener("click", () => {
        createUserWithEmailAndPassword(auth, signupEmail.value, signupPassword.value)
            .then(async (userCredential) => {
                const user = userCredential.user;
                Swal.fire({
                    title: "Good job!",
                    text: "Signup Done",
                    icon: "success"
                });
                const docRef = await addDoc(collection(db, "userdata"), {
                    username: signupName.value,
                    userId: user.uid
                });
                signupName.value = ""
                signupEmail.value = ""
                signupPassword.value = ""
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                Swal.fire(errorMessage, errorCode)
            });
    })
}

// LOGOUT AUTH 

if (signoutBtn) {
    signoutBtn.addEventListener("click", () => {
        signOut(auth).then(() => {
            Swal.fire({
                title: "See you again!",
                text: "Signout Done",
                icon: "success"
            });
            authContainer.style.display = "flex"
            mainContainer.style.display = "none"
        }).catch((error) => {
            Swal.fire(error)
        });

    })
}


// GOOGLE AUTH
if (googleBtn) {

    googleBtn.addEventListener("click", () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const user = result.user;
                console.log(user)

            }).catch((error) => {

                const errorCode = error.code;
                const errorMessage = error.message;
                Swal.fire(error, errorMessage)
            });
    })
}

//   AUTH FORM
var signinForm = document.querySelector(".sign-in")
var signoutForm = document.querySelector(".sign-out")
function signupBox() {
    signinForm.style.transform = "translateY(-495px)"
    signoutForm.style.transform = "translateY(-499px)"
}

window.signupBox = signupBox

function loginBox() {
    signinForm.style.transform = "translateY(0px)"
    signoutForm.style.transform = "translateY(0px)"
}
window.loginBox = loginBox


// STATES CODE

var userName = document.getElementById("user-name")
var income = document.getElementById("income")
var expense = document.getElementById("expense")
var balance = document.getElementById("balance")
var amount = document.getElementById("amount")
var description = document.getElementById("description")
var type = document.getElementById("type")
var submitBtn = document.getElementById("submit")
var clearAllbtn = document.getElementById("clear")
var states = document.getElementById("states")
var table = document.getElementById("table")
var mainContainer = document.querySelector(".main-container")
var submitSpinner = document.getElementById("submit-spinner")
var clearSpinner = document.getElementById("clear-spinner")
var stateSpinner = document.getElementById("states-spinner")
var clearArr = []
var incomeArr = []
var expenseArr = []
var incomeSum = 0
var expenseSum = 0

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]


if (submitBtn) {

    submitBtn.addEventListener("click", async () => {
        incomeArr = []
        expenseArr = []
        if (amount.value == "" || description.value == "") {
            Swal.fire({
                title: "Plz Fill All Data!",
                text: "Thank You",
                icon: "info"
            });
        }
        else {
            submitSpinner.style.display = "block"

            let day = days[new Date().getDay()];
            let date = new Date().toLocaleDateString();
            let time = new Date().toLocaleTimeString();
            let seconds = new Date().getTime()


            const docRef = await addDoc(collection(db, "states"), {
                amountState: amount.value,
                descriptionState: description.value,
                typeState: type.value,
                dateState: date,
                dayState: day,
                timeState: time,
                userId: idArr,
                secondState: seconds

            });
            fetchData()
            stateSpinner.style.display = "block"
        }
    })
}

async function fetchData() {
    amount.value = ""
    description.value = ""
    states.innerHTML = ""
    incomeSum = 0
    expenseSum = 0

    const q = (collection(db, "states"))

    let index = 1
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        if (doc.data().userId == idArr[0] && flag && doc.data().secondState < new Date().getTime()) {
            let tr = document.createElement("tr")
            states.appendChild(tr)
            tr.innerHTML += ` <td>${index}</td>
            <td class = "amount-show-color">${doc.data().amountState}</td>
            <td>${doc.data().descriptionState}</td>
            <td class="type-show-color">${doc.data().typeState}</td>
            <td>${doc.data().dateState} <br/> ${doc.data().timeState} <br/>${doc.data().dayState}</td>
            <td><button class = "delete-btn" onclick = "deleteState('${doc.id}')">Delete</button></td>`
            index++

            if (doc.data().typeState == "Income") {
                incomeArr.push(parseInt(doc.data().amountState))
            }
            if (doc.data().typeState == "Expense") {
                expenseArr.push(parseInt(doc.data().amountState))
            }
        }
    });

  

    for (var i = 0; i < incomeArr.length; i++) {
        incomeSum += incomeArr[i]
    }
    for (var i = 0; i < expenseArr.length; i++) {
        expenseSum += expenseArr[i]
    }
    income.innerHTML = incomeSum
    expense.innerHTML = expenseSum

    balance.innerHTML = incomeSum - expenseSum

    typeColor()

    var typeShowColor = document.querySelectorAll(".type-show-color")
    typeShowColor.forEach((data) => {
        if (data.innerHTML == "Income") {
            data.style.color = "green"
            data.parentNode.children[1].style.color = "green"
        } else {
            data.style.color = "red"
            data.parentNode.children[1].style.color = "red"
        }

        submitSpinner.style.display = "none"
        stateSpinner.style.display = "none"
    })

}


async function deleteState(data) {
    incomeArr = []
    expenseArr = []
    await deleteDoc(doc(db, "states", data));
 fetchData()

}
window.deleteState = deleteState

if (clearAllbtn) {
    clearAllbtn.addEventListener("click", async () => {
        incomeArr = []
        expenseArr = []
        clearSpinner.style.display = "block"
        const q = (collection(db, "states"))

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            if (doc.data().userId == idArr[0]) {
                clearArr.push(doc.id)
            }
        });
        clearArr.map(async (data) => {
            await deleteDoc(doc(db, "states", data));
        })
        fetchData()
        clearSpinner.style.display = "none"
        clearArr = []
    })
}

fetchData()


function typeColor() {
    if (type.value == "Income") {
        type.style.color = "green"
    } else {
        type.style.color = "red"
    }
}

window.typeColor = typeColor