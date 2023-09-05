document.addEventListener("DOMContentLoaded", function () {

    let btn = document.getElementById("boton");
    let parrafo = document.getElementById("broma");

    const JokeAPI = "https://v2.jokeapi.dev/joke/Any?type=single";
        
    btn.addEventListener("click", function () {
        fetch(JokeAPI)
        .then(response => response.json())
        .then(json => 
        parrafo.innerHTML = json.joke);
    })

})


