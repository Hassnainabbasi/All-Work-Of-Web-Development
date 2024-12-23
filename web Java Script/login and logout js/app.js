// localStorage.setItem("email","password")



function signupFunc(){
    var userName = document.querySelector("#username")
    var email = document.querySelector("#email")
    var password = document.querySelector("#password")

    localStorage.setItem("username",userName.value)
    localStorage.setItem("email",email.value)
    localStorage.setItem("password",password.value)
    location.href = "./login.html"
}




function signinFunc(){
var welcome = document.getElementById("welcome")
var lemail = document.getElementById("l-email")
var lpassword = document.getElementById("l-password")


if(lemail.value == localStorage.getItem("email") && lpassword.value == localStorage.getItem("password")){
    alert("Login successful")
    location.href = "./welcome.html"
}
else{
    alert("Invalid Informatioln")
}

welcome.innerText = "hello"

}

function logoutFunc(){
    localStorage.clear()
    location.href = "./signup.html"
    alert("Logout successful")
}