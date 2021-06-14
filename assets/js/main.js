traerPersonaje("https://rickandmortyapi.com/api/character", insertarCartas);

let pagina1 = document.getElementById("pagina1");

let pagina2 = document.getElementById("pagina2");

let pagina3 = document.getElementById("pagina3");

pagina1.addEventListener("click", function() {

    traerPersonaje("https://rickandmortyapi.com/api/character?page=1", insertarCartas);

});
pagina2.addEventListener("click", function() {

    traerPersonaje("https://rickandmortyapi.com/api/character?page=2", insertarCartas);

});
pagina3.addEventListener("click", function() {

    traerPersonaje("https://rickandmortyapi.com/api/character?page=3", insertarCartas);

});


// Tengo un error en el carrusel, y creo que eso provoca que esto no funcione. Se cual es el error, pero la solucion es muy complicada, hay que usar foreach.
function cambioDePagina(xhttp) {
    let paginaAnterior = document.getElementById("paginaAnterior");

    let paginaSiguiente = document.getElementById("paginaSiguiente");

    paginaAnterior.addEventListener("click", function() {
        if (xhttp.info.prev) {
            traerPersonaje(xhttp.info.prev, insertarCartas);

        } else {
            alert("No hay paginas antes de esta")
        }
    });
    paginaSiguiente.addEventListener("click", function() {
        if (xhttp.info.next) {
            traerPersonaje(xhttp.info.next, insertarCartas);

        } else {
            alert("No hay paginas despues de esta")
        }

    });
}




function traerPersonaje(url, callback) {
    let xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let personajes = JSON.parse(this.responseText);
            callback(personajes);
        }

    };
    xhttp.open("GET", url, true);
    xhttp.send();

}

function insertarCartas(xhttp) {

    let i = 0;
    let contenedor = document.getElementById("contenedorHtml");
    console.log(contenedor);
    for (i = 0; xhttp.results[i] != undefined; i++) {

        if (i == 0) {

            let primeraCarta = document.createElement("div");
            primeraCarta.classList.add("carousel-item");
            primeraCarta.classList.add("active");

            primeraCarta.innerHTML = `
    <div class="container">
    <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
    <div class="container">
    <div class="col">



    <div class="card" style="width: 18rem;">
    <img src="${xhttp.results[i].image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${xhttp.results[i].name}</h5>
      <p class="card-text">Specie: ${xhttp.results[i].species}</br>  Gender: ${xhttp.results[i].gender}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
    </div>
    
      </div>
      <div class="container">
    <div class="col">
    
    
    <div class="card" style="width: 18rem;">
  <img src="${xhttp.results[i+1].image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${xhttp.results[i+1].name}</h5>
    <p class="card-text">Specie: ${xhttp.results[i+1].species}</br>  Gender: ${xhttp.results[i+1].gender}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
    
    
    </div>
    <div class="container">
    <div class="col">
    
    
    <div class="card" style="width: 18rem;">
  <img src="${xhttp.results[i+2].image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${xhttp.results[i+2].name}</h5>
    <p class="card-text">Specie: ${xhttp.results[i+2].species}</br>  Gender: ${xhttp.results[i+2].gender}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div>
    
    
    </div>
 
  </div>
  </div>


`;
            contenedor.appendChild(primeraCarta);
            i = i + 2;
        } else {
            let carta = document.createElement("div"); //cree un nodo especificado por su TagName
            carta.classList.add("carousel-item"); //agregue una CLASE
            carta.innerHTML = `
    <div class="container">
    <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
    <div class="container">
    <div class="col">



    <div class="card" style="width: 18rem;">
    <img src="${xhttp.results[i].image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${xhttp.results[i].name}</h5>
      <p class="card-text">Specie: ${xhttp.results[i].species}</br>  Gender: ${xhttp.results[i].gender}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
    </div>
    
      </div>
      <div class="container">
    <div class="col">
    
    
    <div class="card" style="width: 18rem;">
  <img src="${xhttp.results[i+1].image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${xhttp.results[i+1].name}</h5>
    <p class="card-text">Specie: ${xhttp.results[i+1].species}</br>  Gender: ${xhttp.results[i+1].gender}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
    
    
    </div>
    <div class="container">
    <div class="col">
    
    
    <div class="card" style="width: 18rem;">
  <img src="${xhttp.results[i+2].image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${xhttp.results[i+2].name}</h5>
    <p class="card-text">Specie: ${xhttp.results[i+2].species}</br>  Gender: ${xhttp.results[i+2].gender}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div>
    
    
    </div>
 
  </div>
  </div>


`;
            contenedor.appendChild(carta);
            i = i + 2;


        }

    }

    cambioDePagina(xhttp);


}