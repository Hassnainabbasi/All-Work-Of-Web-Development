fetch('https://jsonplaceholder.typicode.com/users')
.then(function(data){
    return data.json()
})


.then(function(data){

// console.log(data)
data.map(function(data){
    var info = `ID NO : ${data.id} <br>
                 NAME : ${data.name} <br>
                 EMAIL : ${data.email} <br>
                 PHONE NO : ${data.phone}<br><hr>`

    document.write(info)
})

})

// var pro = new Promise(function(res,rej){

// var eat = "zinger burger"
// if(eat == "zinger"){
//     res("han zinger ha")
// }
// else{
//     rej("nhe zinger nh ha")
// }
// })

// pro.then(function(data){
//     console.log(data)
// })

// .catch(function(err){
//     console.log(err)
// })

// var arr = [12, 3, 345, 123, 43, 5, 576, 8, 9, 6, 345, 34, 534, 5, 345, 7, 56, 8756]

// var ans = arr.filter(function(data){
//     if(data % 2 == 0){
//         return data
//     }

// })

// console.log(ans)

// arr.map((data) => {
//     console.log(data)
// })
// arr.forEach((data) => {
//     console.log(data)
// })












