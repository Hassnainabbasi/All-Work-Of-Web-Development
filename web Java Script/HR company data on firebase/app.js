
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import {   getFirestore,
   collection,
   addDoc,
   getDocs,
   deleteDoc,
   doc
     } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
import {  getStorage ,ref, uploadBytesResumable, getDownloadURL,deleteObject} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";


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
const storage = getStorage(app)

var name = document.getElementById("name")
var fatherName = document.getElementById("father-name")
var nicNumber = document.getElementById("nic-number")
var contactNumber = document.getElementById("contact-number")
var email = document.getElementById("email")
var picture = document.getElementById("picture")
var hireBtn = document.getElementById("hire-btn")
var searchBtn = document.getElementById("search-btn")
var allInputs = document.querySelectorAll(".input-field")
var hiringBox = document.querySelector(".hiring-box")
var verificationBox = document.querySelector(".verification-box")


if(hireBtn){
    
    hireBtn.addEventListener("click",async()=>{
      var idNumber = Math.floor(Math.random()*4000)
var file = picture.files[0]
      const storageRef = ref(storage, `images/${file.name}`);

      const uploadTask = uploadBytesResumable(storageRef, file);
      
      uploadTask.on('state_changed', 
        (snapshot) => {
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
          getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
            console.log('File available at', downloadURL);
            
                const docRef = await addDoc(collection(db, "employee information"), {
                  name: name.value,
                  fathername : fatherName.value,
                  nicnumber : nicNumber.value,
                  contactnumber : contactNumber.value,
                  emailaddress : email.value,
                  idnumber : idNumber,
                  photoUrl :  downloadURL
                 });


                 const q = (collection(db, "employee information"))
                 const querySnapshot = await getDocs(q);
                 querySnapshot.forEach((doc) => {
                   if(doc.data().name == name.value){
                     hiringBox.innerHTML = `   <div class="card" style="width: 18rem;">
                                     <img src="${doc.data().photoUrl}" class="card-img-top img" alt="...">
                                     <div class="card-body">
                                     <h5 class="card-title">${doc.data().name}</h5>
                                     <h5 class="card-title">ID : ${doc.data().idnumber}</h5>
                                     <p class="card-text">Father Name: ${doc.data().fathername}</p>
                                     <p class="card-text">Nic-Number: ${doc.data().nicnumber}</p>
                                     <p class="card-text">Contact-Number: ${doc.data().contactnumber}</p>
                                     <p class="card-text">E-mail: ${doc.data().emailaddress}</p>
                                     </div>`
        
                                    }
             
                 })


              
          });
        }
      );

       
     })
   }


   
   if(searchBtn){
searchBtn.addEventListener("click",searchFunc)

   }
async function searchFunc(){
    const q = (collection(db, "employee information"))
let id = document.getElementById("employee-id") 
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
if(doc.data().idnumber == id.value){
verificationBox.innerHTML = `   <div class="card" style="width: 18rem;">
                        <img src="${doc.data().photoUrl}" class="card-img-top img" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">${doc.data().name}</h5>
                          <h5 class="card-title">ID : ${doc.data().idnumber}</h5>
                          <p class="card-text">Father Name: ${doc.data().fathername}</p>
                          <p class="card-text">Nic-Number: ${doc.data().nicnumber}</p>
                          <p class="card-text">Contact-Number: ${doc.data().contactnumber}</p>
                          <p class="card-text">E-mail: ${doc.data().emailaddress}</p>
                        </div>`
}
    })
}
var allEmployes = document.querySelector(".all-employes-show")

   async function allemployeeData(){

    const q = (collection(db, "employee information"))
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {

    allEmployes.innerHTML +=`   <div class="card allcard" style="width: 18rem;">
    <img src="${doc.data().photoUrl}" class="card-img-top img" alt="...">
    <div class="card-body">
    <h5 class="card-title">${doc.data().name}</h5>
    <h5 class="card-title">ID : ${doc.data().idnumber}</h5>
    <p class="card-text">Father Name: ${doc.data().fathername}</p>
    <p class="card-text">Nic-Number: ${doc.data().nicnumber}</p>
    <p class="card-text">Contact-Number: ${doc.data().contactnumber}</p>
    <p class="card-text">E-mail: ${doc.data().emailaddress}</p>
    <button onclick = "dismiss('${doc.id}')">Dismiss</button>
    </div>`
    })

   }

   allemployeeData()

async function dismiss(data){
 allEmployes.innerHTML = ""
  await deleteDoc(doc(db, "employee information", data));


  const q = (collection(db, "employee information"))
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {

const desertRef = ref(storage, `images/faizy.jpg`);

deleteObject(desertRef).then(() => {
  
console.log(desertRef.name)

  }).catch((error) => {
    console.log(error)
  });
  })
 

 
  }

window.dismiss= dismiss









// STORAGE WORKING...

// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
// import { getFirestore, collection, addDoc  } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
// import { getStorage, ref, uploadBytesResumable, getDownloadURL  } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyCcL2XcsG6Nb2-FwrVRbIL95ZTNujuTr0o",
//   authDomain: "batch-11-gulshan.firebaseapp.com",
//   projectId: "batch-11-gulshan",
//   storageBucket: "batch-11-gulshan.appspot.com",
//   messagingSenderId: "308695321061",
//   appId: "1:308695321061:web:fbc0a53e43e8af0a5d070c",
//   measurementId: "G-4S2VTJQ215"
// };

// const app = initializeApp(firebaseConfig);
// const storage = getStorage(app);
// const db = getFirestore(app)

// let getBtn = document.querySelector("#btn")
// getBtn.addEventListener('click',()=>{
//     let getInp = document.querySelector("#inp")
//     const file = getInp.files[0]
//     const storageRef = ref(storage, `images/${file.name}`);
//     const uploadTask = uploadBytesResumable(storageRef, file);

//     uploadTask.on('state_changed', 
//         (snapshot) => {
//           const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//           console.log('Upload is ' + progress + '% done');
//           switch (snapshot.state) {
//             case 'paused':
//               console.log('Upload is paused');
//               break;
//             case 'running':
//               console.log('Upload is running');
//               break;
//           }
//         }, 
//         (error) => {
//          console.log(error)
//         }, 
//         () => {
//           getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
//             console.log('File available at', downloadURL);
           
//             let getpname = document.getElementById('pname')
//             let getpdes = document.getElementById('pdes')
//             let getprice = document.getElementById('pprice')
           
//             const docRef = await addDoc(collection(db, "images"), {
//                 pname: getpname.value,
//                 pdes: getpdes.value,
//                 pprice: getprice.value,
//                 img: downloadURL
//               });
//               console.log("Document written with ID: ", docRef.id);
//           });
//         }
//       );



// })