
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
 import {   getFirestore,
    collection,
    addDoc,
    getDocs,
    updateDoc,
    doc,
    deleteDoc,  } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

 
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

 var btn = document.getElementById("btn")
 var ul = document.getElementById("ul")
 
 if(btn){
   
   btn.addEventListener("click",async()=>{
     ul.innerHTML = ""
     var inp = document.getElementById("inp")

     const docRef = await addDoc(collection(db, "Todos"), {
       name: inp.value,
       
      });
      fetchData()
      // console.log("Document written with ID: ", docRef.id);
      
      
      // await setDoc(doc(db, "Todos"), {
        //   name: inp.value
        // });
        //  })
        
      })
    }

    async function fetchData(){
      const q = (collection(db, "Todos"))
      
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        
        // console.log(doc.id, " => ", doc.data());
        ul.innerHTML += `<li>${doc.data().name}<button onclick="editFunc('${doc.id}')">EDIT</button><button onclick="deleteFunc('${doc.id}')">DELETE</button></li>`
      });
    }
    
    
    fetchData()
    

 async function deleteFunc(data){
   ul.innerHTML = ""
  await deleteDoc(doc(db, "Todos", data));
  fetchData()
 }

window.deleteFunc = deleteFunc


async function editFunc(data){
  // const washingtonRef = doc(db, "Todos", data);
  // await updateDoc(washingtonRef, {
    //     name: update,
    //   });
    
ul.innerHTML = ""
var update = prompt("REPLACE")
  await updateDoc(doc(db, "Todos", data), {
    name : update
  })

  fetchData()

}

window.editFunc = editFunc






// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
// import {
//   getFirestore,
//   collection,
//   addDoc,
//   getDocs,
//   updateDoc,
//   doc,
//   deleteDoc,
// } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyA3WofDB98eUXVVqMcilo38RyJgF2vTpf8",
//   authDomain: "batch11-c9ba6.firebaseapp.com",
//   projectId: "batch11-c9ba6",
//   storageBucket: "batch11-c9ba6.appspot.com",
//   messagingSenderId: "756118996711",
//   appId: "1:756118996711:web:776547e825a3a6786b8442",
//   measurementId: "G-2QVJFV7ERD",
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// let btn = document.getElementById("btn");

// if (btn) {
//   btn.addEventListener("click", async () => {
//     getUl.innerHTML = "";
//     let getInp = document.getElementById("inp");
//     const docRef = await addDoc(collection(db, "todos"), {
//       name: getInp.value,
//     });
//     console.log("Document written with ID: ", docRef.id);
//     fetchData();
//   });
// }

// let getUl = document.getElementById("ul");

// async function fetchData() {
//   const q = collection(db, "todos");
//   const querySnapshot = await getDocs(q);
//   querySnapshot.forEach((doc) => {
//     // console.log("doc araha hai ==>", doc);
//     // console.log(doc.id, " => ", doc.data().name);

//     getUl.innerHTML += `<li>${doc.data().name} <button onclick='editFunc("${
//       doc.id
//      }")'> Edit </button> <button onclick='delTodo("${
//       doc.id
//     }")'> Delete </button></li>`;
//   });
// }

// fetchData();

// async function delTodo(e) {
//   getUl.innerHTML = "";
//   await deleteDoc(doc(db, "todos", e));
//   fetchData();
// }

// window.delTodo = delTodo;

// async function editFunc(e) {
//   getUl.innerHTML = "";
//   let pro = prompt("Enter updated value");
//   const washingtonRef = doc(db, "todos", e);
//   await updateDoc(washingtonRef, {
//     name: pro,
//   });
//   fetchData();
// }

// window.editFunc = editFunc;

// function delall() {
//   getUl.innerHTML = ""
//   const todosRef = collection(db, "todos");
  
//   getDocs(todosRef)
//     .then((querySnapshot) => {
//       querySnapshot.forEach((doc) => {
//         deleteDoc(doc.ref);
//       });
//       fetchData();
//     })
//     .catch((error) => {
//       console.error("Error deleting documents: ", error);
//     });
// }


// window.delall = delall

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