var getDiv = document.getElementById("show")
var info = document.getElementById("info")


info.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("press").click();
    }
  });

function getData(){

    fetch(`https://newsapi.org/v2/everything?q=${info.value}&from=2024-05-21&sortBy=publishedAt&apiKey=8b9e77581200462e94f4151279e226ad`)
        .then(function (data) {
            return data.json()
        })
    
        .then(function (data) {
            for (var i = 0; i < data.articles.length; i++) {
                getDiv.innerHTML += `<div class="card m-3" style="width: 18rem;">
      <img src="${data.articles[i].urlToImage}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>`
            }
        })
        .catch(function (err) {
            console.log(err)
        })
        getDiv.innerHTML = ""

}    

