let personajes=[];
let ordenar="A";
let paginacion;
let numeroPages= 5;

const modal = document.querySelector("#exampleModal");
const rName = document.querySelector("#personaje-name");
const rStatus = document.querySelector("#personaje-status");
const rSexo = document.querySelector("#personaje-sexo");

const rOrigen = document.querySelector("#personaje-originario");
//const rUbicacion = document.querySelector("#personaje-ubicacion");
const rImage = document.querySelector("#personaje-image");
const rEpisodios = document.querySelector("#personaje-episodios");


for (let i=1; i<=numeroPages; i++) {
    paginacion="https://rickandmortyapi.com/api/character?page=" + i;
    
    // carga los datos de la Api
    fetch(paginacion)
    .then((response)=>response.json())
    .then(data => {
        for (let j in data.results) {
            personajes.push(data.results[j]);
        }
        if (i==numeroPages) render(personajes);  // para esperar a que cargue todo

    });

}



let render = (personajesArr) => {

    document.querySelector("#resultados").innerHTML="";

    for(let i in personajesArr){

        let simbol_sex= (personajesArr[i].gender=="Female") ? '<i class="fa-solid fa-venus"></i>' :  '<i class="fa-solid fa-mars"></i>' ;
        let simbol_status= (personajesArr[i].status=="Alive") ? '<span class="tag-vivo"></span>' : '<span class="tag-muerto"></span>' ;
        if (personajesArr[i].status=="unknown")
            simbol_status= '<span class="tag-desconocido"></span>'

        document.querySelector("#resultados").innerHTML+= `
                <div class="col-sm12 col-md-6 mb-3" data-id="${personajesArr[i].id}" 
                    data-name="${personajesArr[i].name}" onclick="mostrarModal(${personajesArr[i].id})">
                    <div class="card bg-secondary flex-row">
                        <div class="w-50">
                            <img src="${personajesArr[i].image}" class="img-fluid object-fit" alt="">
                            ${simbol_status}
                            <span class="tag-sex is-danger">${simbol_sex}</span>
                        </div>

                        <div class="card-body w-50">
                            <h2 class="card-title">${personajesArr[i].name}</h2>
                            <h5 class="card-subtitle">${personajesArr[i].status}-${personajesArr[i].species}</h5><br>
                            <p>Última Ubicación: <br>${personajesArr[i].location.name}</p>
                            <p><i class="fa-solid fa-video"></i> ${personajesArr[i].episode.length}</p>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Más Info.</button>                        
                            <button id="fav${personajesArr[i].id}" data-favbool="n" data-type="favorites" data-id="${personajesArr[i].id}" type="button" class="btn  tag-fav" onclick="agregaFav(${personajesArr[i].id})">💛</button>                        
                        </div>
                    </div>
                </div>`;
    }

    reloadFavorites();

}

const agregaFav = (id) => {
    saveFavorites(id);
}

const llenarModal = (personaje) => {
    const { name, origin, location, image, status, species, gender, episode } = personaje[0];

    paginacion=episode[0];  //primer episodio
    
    let first_episode;

    //lee informacion del primer episodio
    fetch(paginacion)
    .then((response)=>response.json())
    .then(data => {
        first_episode= data;
        console.log(first_episode.name);
        rEpisodios.innerHTML= `Visto por Primera vez en:<br>${first_episode.name}`;
    });
    
    let simbol_sex= (gender=="Female") ? '<i class="fa-solid fa-venus"></i>' :  '<i class="fa-solid fa-mars"></i>' ;
 
    rName.innerText = name;
    rStatus.innerHTML= `${status}-${species} `;
    rSexo.innerHTML= `Género: ${gender} ${simbol_sex}<br>Episodios: <i class="fa-solid fa-video"></i> ${episode.length}`;
    

    rOrigen.innerHTML = `Originario de:  <strong>${origin.name}</strong><br>Última Ubicación: <strong>${location.name}</strong>`;
    //rUbicacion.innerText = `Ultima Ubicacion:\n ${location.name}`;
    rImage.setAttribute('src', image)
  };
    
const mostrarModal = (id) => {
    
      rName.innerText = "";
      rOrigen.innerText = "";
      //rUbicacion.innerText = "";
      //modal.classList.toggle("modal");
      // document.querySelector("#restaurant-name").innerText = name;
    
      if (id !== undefined) {
            let filtro = personajes.filter(personaje => personaje.id==id);
            //console.log(filtro);
           llenarModal(filtro);
        }
    };
