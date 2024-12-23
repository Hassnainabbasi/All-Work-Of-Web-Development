var left = document.getElementById('left')
var right = document.getElementById('right')
var slider = document.getElementById("slider")
var images = document.querySelectorAll("#image")
var counting = 1
left.addEventListener("click",()=>{
    if(counting < images.length){
        slider.style.transform = `translateX(-${600*counting}px)`
        counting++
    }else{
          slider.style.transform = `translateX(0px)`
        counting = 1
    }
})


// right.addEventListener("click",()=>{

// })