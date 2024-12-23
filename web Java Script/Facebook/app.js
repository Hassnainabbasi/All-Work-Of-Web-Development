var allUsers ;

var users = JSON.parse(localStorage.getItem("user"))

if(users == null){
    allUsers = []
}
else{
    allUsers = users
}

// console.log(users)
function signupFunc(){
    var userName = document.getElementById("uname") 
    var email = document.getElementById("uemail") 
    var password = document.getElementById("upassword")
    
    if(userName.value == "" && email.value == "" && password.value == ""){
        alert("Plz fill all inputs")
        }
        
        if(userName.value !== "" && email.value !== "" && password.value !== ""){
            var obj = {
                uname : userName.value,
                uemail : email.value,
                upassword : password.value
                }
                
                allUsers.push(obj)
                localStorage.setItem("user",JSON.stringify(allUsers))
                userName.value = ""
                email.value = ""
                password.value = ""
                }
// console.log("sign up successful")
                location.href = "./index.html"
            
}


function createAccount(){
location.href = "./signup.html"

}

function loginFunc(){

var email = document.getElementById("loginemail")
var password = document.getElementById("loginpassword")
var welcome = document.getElementById("welcome")
var filterUser = allUsers.filter(data=> data.uemail === email.value && data.upassword === password.value)

console.log(filterUser)

if(filterUser.length ){
    alert("user login succesful")
    // location.href = "./welcome.html"
// welcome.innerText = "welcome hello"
}

else{
    if(email.value == "" && password.value == ""){
        alert("PLZ FILL THE ALL INPUTS")
    }
    else{
        alert("email/password incorrect")
        
    }
}
        
}













