import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,GoogleAuthProvider,signInWithPopup,signInWithPhoneNumber,RecaptchaVerifier } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCSeZCK2EWofcDWy2RGVHPQWUOjT669kBQ",
    authDomain: "business-ecc88.firebaseapp.com",
    projectId: "business-ecc88",
    storageBucket: "business-ecc88.appspot.com",
    messagingSenderId: "733314389456",
    appId: "1:733314389456:web:1572e3a8e6b249a418d5d5",
    measurementId: "G-V6XZWN20CH"
};


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("login")
        document.getElementById("user-email").innerText = user.email
        const uid = user.uid;

    } else {

        console.log("logout")
    }
});


// SIGN IN WORK
var signinBtn = document.getElementById("sign-in-btn")
var signupBtn = document.getElementById("sign-up-btn")

if (signinBtn) {

    signinBtn.addEventListener('click', () => {
        let email = document.getElementById("e-mail")
        let password = document.getElementById("password")
        if (email.value === "admin" && password.value === "admin") {
            location.href = "admin-dashboard.html"
        }

        signInWithEmailAndPassword(auth, email.value, password.value)
            .then((userCredential) => {
                const user = userCredential.user;
                    Swal.fire({
                        title: "Welcome!",
                        text: user.email,
                        icon: "success"
                    });
             
                location.href = "user-dashboard.html"
    
      })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                Swal.fire(errorMessage, errorCode)
            });



    })
}

// SIGNUP WORK 

if (signupBtn) {

    signupBtn.addEventListener("click", () => {
        let username = document.getElementById("up-username")
        let email = document.getElementById("up-e-mail")
        let password = document.getElementById("up-password")

        createUserWithEmailAndPassword(auth, email.value, password.value)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
                Swal.fire({
                    title: "Good job!",
                    text: "Signup Done",
                    icon: "success"
                });
                username.value = ""
                email.value = ""
                password.value = ""
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                Swal.fire(errorMessage, errorCode)
            });


    })
}

// LOGOUT WORK 

var logoutBtn = document.getElementById("logout-btn")

if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        signOut(auth).then(() => {
            location.href = "index.html"
        }).catch((error) => {
            alert(error)
        });

    })
}

// GOOGLE WORK

var loginGoogle = document.getElementById("login-google-btn")

loginGoogle.addEventListener("click",()=>{
    signInWithPopup(auth, provider)
    .then((result) => {
     
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log(user)
      location.href = "user-dashboard.html"
    
    }).catch((error) => {
    
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(error,errorMessage)
    });
})


// NUMBER LOGIN WORKING


window.recaptchaVerifier = new RecaptchaVerifier(auth, 'number-submit-btn', {
    'size': 'invisible',
    'callback': (response) => {
      submitFunc();
    }
  });

let submitFunc = ()=>{
    const phoneNumber = document.getElementById("number").value;
    const appVerifier = window.recaptchaVerifier;
    let otpShow = document.getElementById("otp-show")

    signInWithPhoneNumber(auth, `+${phoneNumber}`, appVerifier)
    .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        Swal.fire("SMS sent! Please enter the verification code.");
        otpShow.style.display = "flex"
    }).catch((error) => {
        console.error("Error during signInWithPhoneNumber", error);
        Swal.fire("Error during signInWithPhoneNumber: " + error.message);
    }); 
    
}


var submitBtn = document.getElementById("number-submit-btn")

if(submitBtn){

    submitBtn.addEventListener("click",submitFunc)
}


let otpFunc = ()=>{
    const code = document.getElementById("otp").value;
    window.confirmationResult.confirm(code).then((result) => {
        const user = result.user;
        console.log("User signed in:", user);
        Swal.fire("Phone number verified! User signed in.");
        location.href = "user-dashboard.html";
    }).catch((error) => {
        Swal.fire(error + error.message);
    });
}


var otpBtn = document.getElementById("otpBtn")
if(otpBtn){

    otpBtn.addEventListener("click",otpFunc)
}














