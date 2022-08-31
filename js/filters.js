
let buscar = (evt) => {
    //evt.preventDefault();
    let name = document.querySelector("#inputName").value.toLowerCase();
    let filtrados =personajes.filter((personaje)=>{
        //let restaurant_minus= restaurant.businessname.toLowerCase()
        return personaje.name.toLowerCase().includes(name);
    });
    render(filtrados);
} 

let categoria= (nombre, tipo) => {
    let filtro;
    //console.log(nombre);
    if (tipo=='status')
        filtro = personajes.filter((personaje)=>{
            return personaje.status == nombre  });
    else if (tipo=='gender')
        filtro = personajes.filter((personaje)=>{
            return personaje.gender == nombre  });

    render(filtro);
}


let orden = ()=>{

    if (ordenar=="A") {
        ordenar="D";
        personajes.sort(function (a, b){
            return ( a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
        });
    }
    else {
        ordenar="A";
        personajes.sort(function (a, b){
            return ( b.name.toLowerCase().localeCompare(a.name.toLowerCase()))
        });
    }
    render(personajes);
};

let buscafavoritos= () => {
    let filtro=[];

    personajes.forEach(personaje => {
        let valor= personaje.id;
        if (favorites.includes(valor))
            filtro.push(personaje);  //agregando los favoritos
    });

    render(filtro);
}

let ranking= () => {
    let filtro;
        filtro = personajes.filter((personaje)=>{
            return personaje.episode.length>= 30 });
    render(filtro);
}

document.querySelector("#inputName").addEventListener("keyup",buscar)

 document.querySelector("#todos").addEventListener("click",function(evt){
    evt.preventDefault();
    render(personajes);
}); 

document.querySelector("#vivos").addEventListener("click",function(evt){
    evt.preventDefault();
    categoria('Alive', 'status');
}); 

document.querySelector("#muertos").addEventListener("click",function(evt){
    evt.preventDefault();
    categoria('Dead', 'status');
}); 

document.querySelector("#masculino").addEventListener("click",function(evt){
    evt.preventDefault();
    categoria('Male', 'gender');
}); 

document.querySelector("#femenino").addEventListener("click",function(evt){
    evt.preventDefault();
    categoria('Female', 'gender');
}); 

document.querySelector("#ordenar").addEventListener("click",function(evt){
    evt.preventDefault();
    orden();
}); 

document.querySelector("#favoritos").addEventListener("click",function(evt){
    evt.preventDefault();
    buscafavoritos();
}); 

document.querySelector("#topx").addEventListener("click",function(evt){
    evt.preventDefault();
    ranking();
}); 

/*  son para el menu lateral */
/* document.querySelector("#todos1").addEventListener("click",function(evt){
    evt.preventDefault();
    activarDesactivar();
    render(personajes);
}); 

document.querySelector("#vivos1").addEventListener("click",function(evt){
    evt.preventDefault();
    activarDesactivar();
    categoria('Alive', 'status');
}); 

document.querySelector("#muertos1").addEventListener("click",function(evt){
    evt.preventDefault();
    activarDesactivar();
    categoria('Dead', 'status');
}); 

document.querySelector("#masculino1").addEventListener("click",function(evt){
    evt.preventDefault();
    activarDesactivar();
    categoria('Male', 'gender');
}); 

document.querySelector("#femenino1").addEventListener("click",function(evt){
    evt.preventDefault();
    activarDesactivar();
    categoria('Female', 'gender');
}); 

document.querySelector("#ordenar1").addEventListener("click",function(evt){
    evt.preventDefault();
    activarDesactivar();
    orden();
}); 

document.querySelector("#favoritos1").addEventListener("click",function(evt){
    evt.preventDefault();
    activarDesactivar();
    buscafavoritos();
}); 

document.querySelector("#topx1").addEventListener("click",function(evt){
    evt.preventDefault();
    activarDesactivar();
    ranking();
});  */