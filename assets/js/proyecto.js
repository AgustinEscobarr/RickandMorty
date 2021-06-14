function obtenerPersonajes(url, callback) {
    let xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let obteniendoJSON = JSON.parse(this.responseText)
            callback(obteniendoJSON);
        };
    }
    xhttp.open("GET", url, true);
    xhttp.send()
}



let container = document.querySelector("#container");

function haciendoCards(array) {
    array.results.forEach(results => {
        (`${results.image} ${results.name} ${results.species} ${results.gender}`);
        let nodos = document.createElement("div");
        nodos.classList.add("card");
        nodos.innerHTML = `
        <img src="${results.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${results.name}</h5>
          <p class="card-text">${results.species}</p>
          <p class="card-text">${results.gender}</p>
          <a href="https://rickandmortyapi.com/" target="blank_" class="btn btn-primary">IR A API</a>
        </div>
      </div>`
        container.appendChild(nodos)
    });
}
obtenerPersonajes("https://rickandmortyapi.com/api/character", haciendoCards)