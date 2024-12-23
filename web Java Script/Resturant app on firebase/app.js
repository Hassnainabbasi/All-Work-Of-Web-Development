import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import {  getStorage ,ref, uploadBytesResumable, getDownloadURL,deleteObject} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";


const firebaseConfig = {
    apiKey: "AIzaSyAIiSN2x0cwLWEWdV9AdSS-SRBnd5h6UPA",
    authDomain: "resturant-business-5eb66.firebaseapp.com",
    projectId: "resturant-business-5eb66",
    storageBucket: "resturant-business-5eb66.appspot.com",
    messagingSenderId: "70861133889",
    appId: "1:70861133889:web:300ee323bd964b64f14ec0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app)


// ADD RESTURANTS DATA
var resLogo = document.getElementById("res-logo")
var resLogoimage = document.getElementById("res-logo-img")
var allResShow = document.getElementById("all-res-show")
var addResbtn = document.getElementById("add-res-btn")
var resName = document.getElementById("res-name")
var resAddress = document.getElementById("res-address")
var resNumber = document.getElementById("res-number")
var allResShow = document.getElementById("all-res-show")
var spinner = document.getElementById("spin")
var resClosebtn = document.getElementById("res-close-btn")


if (addResbtn) {
    addResbtn.addEventListener("click", async () => {
        if (resName.value == "" || resAddress.value == "" || resNumber.value == "" || resLogo.value == "") {
            alert("PLZ FILL ALL INPUTS")
        } else {
  

            var file = resLogo.files[0]
            let idNumber = Math.floor(Math.random() * 10000)

const storageRef = ref(storage, `Resturant Logo/${resName.value}`);
const uploadTask = uploadBytesResumable(storageRef, file);

uploadTask.on('state_changed', 
  (snapshot) => {
    spinner.style.display = "flex"
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
console.log(error)
}, 
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
      console.log('File available at', downloadURL);
spinner.style.display = "none"

resClosebtn.click()
      const docRef = await addDoc(collection(db, "All Resturants Data"), {
          resname: resName.value,
          resaddress: resAddress.value,
          resnumber: resNumber.value,
          idno: idNumber,
          imgUrl : downloadURL
      });
      // console.log("Document written with ID: ", docRef.id);
      fetchResturantdata()
  allResShow.innerHTML = ""

      resName.value = ""
      resAddress.value = ""
      resNumber.value = ""
      resLogo.value = ""
      resLogoimage.src = ""  
    });
  }
);


        }
      })
      

}

var serial = 1

let fetchResturantdata = async () => {
    const querySnapshot = await getDocs(collection(db, "All Resturants Data"));
    querySnapshot.forEach((doc) => {
        allResShow.innerHTML += `
                <div class="res-show">
                 <span>${serial}</span>
                <img class="res-img" src="${doc.data().imgUrl}" alt="">
                <span>${doc.data().resname}</span>
                <span class="res-address">${doc.data().resaddress}</span>
                <span>${doc.data().resnumber}</span>
                <span>${doc.data().idno}</span>
                <button onclick = "pageChange('${doc.id}')">Add Dishes</button>
                </div>`
        serial++
        //   console.log(`${doc.id} => ${doc.data()}`);
    });


}

fetchResturantdata()
// ADD DISHES CODE 

var resDishname = document.getElementById("res-dish-name")
var resDishprice = document.getElementById("res-dish-price")
var resDishpicture = document.getElementById("res-dish-picture")
var resDishimg = document.getElementById("res-dish-img")
var resDishbtn = document.getElementById("add-res-dish-btn")
var dishSpin = document.getElementById("res-dish-spin")
var resDishclosebtn = document.getElementById("res-dish-close-btn")
var resDishimg = document.getElementById("res-dish-img")

function pageChange(id){
  location.href = `dishes.html?resturant=${id}`

}
window.pageChange = pageChange

if(resDishbtn){
  resDishbtn.addEventListener("click",addDishes)
}

function addDishes(){
  allDishes.innerHTML = ""
  var urlParams = new URLSearchParams(window.location.search).get("resturant")
  if (resDishname.value == "" || resDishprice.value == "" || resDishpicture.value == "") {
    alert("PLZ FILL ALL INPUTS")
} else {


    var file = resDishpicture.files[0]

const storageRef = ref(storage, `Dish Image/${resDishname.value}`);
const uploadTask = uploadBytesResumable(storageRef, file);

uploadTask.on('state_changed', 
(snapshot) => {
dishSpin.style.display = "flex"
const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
console.log('Upload is ' + progress + '% done');
switch (snapshot.state) {
case 'paused':
console.log('Upload is paused');
break;
case 'running':
console.log('Upload is running');
break;
}
}, 
(error) => {
console.log(error)
}, 
() => {
getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
console.log('File available at', downloadURL);
dishSpin.style.display = "none"
resDishclosebtn.click()
const docRef = await addDoc(collection(db, "Dishes"), {
  dishname: resDishname.value,
  price: resDishprice.value,
  imgUrl : downloadURL,
  resturantid : urlParams
});
// console.log("Document written with ID: ", docRef.id);

resDishname.value = ""
resDishprice.value = ""
resDishpicture.value = ""
resDishimg.src = ""
getDishes()
});
}
);
} 
}

const allDishes = document.getElementById("all-dishes")

let getDishes = async()=>{
  var urlParams = new URLSearchParams(window.location.search).get("resturant")
  const querySnapshot = await getDocs(collection(db, "Dishes"));
  querySnapshot.forEach((doc) => {
      
    if(doc.data().resturantid == urlParams){

      allDishes.innerHTML += `
         <div class="card" style="width: 18rem;">
      <img src="${doc.data().imgUrl}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${doc.data().dishname}</h5>
        <p class="card-text">${doc.data().price}</p>
        <a href="#" class="btn btn-primary">Add to Cart</a>
      </div>
    </div>       
        `

    }
      //   console.log(`${doc.id} => ${doc.data()}`);
  });

}

getDishes()





// MODAL LOGO SHOW 
if(resLogo){

  resLogo.addEventListener("change", (e) => {
      // console.log(e.target.files[0])
      resLogoimage.src = URL.createObjectURL(e.target.files[0])
  
  })
}
if(resDishpicture){

  resDishpicture.addEventListener("change", (e) => {
      // console.log(e.target.files[0])
      resDishimg.src = URL.createObjectURL(e.target.files[0])
  
  })
}













// Swal.fire({ title: "Welcome!",
//     text: "faizy",
//     icon: "success"})