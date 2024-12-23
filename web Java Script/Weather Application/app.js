var search = document.getElementById("search")
var btn = document.getElementById("btn")
var getDiv = document.getElementById("images")
var weather = document.getElementById("weather")
var btn1 = document.getElementById("btn1")

search.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    btn.click();
  }
});



btn.addEventListener("click", function () {

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search.value}&units=metric&appid=2d02cd5161eeb17f384e6e45d0e3fdc4`)

    .then(function (data) {
      return data.json()
    })

    .then(function (data) {

      weather.innerHTML = `Weather of ${search.value}  ${Math.ceil(data.main.temp)} C `

    })

    .catch(function (err) {
      console.log(err)
    })

  images()
  getDiv.innerHTML = ""
  if(getDiv.innerHTML = ""){

    btn1.style.display = 'none'
  }
  else{

    btn1.style.display = 'block'
  }
  page = 1 
})

var page = 1;
function images() {

  fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${search.value}&client_id=31Rn-gx1aKydApMtoIi2UcSkUn1uT5PTlX-7fzMB_ss&per_page=12`)
    .then(function (data) {
      return data.json()
    })
    .then(function (data) {
      data.results.map(function (result) {
        getDiv.innerHTML += `<img src="${result.urls.small}" alt="" width = "300px">`
      })
    })

}

btn1.addEventListener("click",function(){
page++
images()


})
