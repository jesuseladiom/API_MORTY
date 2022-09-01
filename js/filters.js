
let buscar = (evt) => {
    //evt.preventDefault();
    let name = document.querySelector("#inputName").value.toLowerCase();
    let filtrados =personajes.filter((personaje)=>{
        return personaje.name.toLowerCase().includes(name);
    });
    render(filtrados);
} 

let categoria= (nombre, tipo) => {
    let filtro;
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

let opcionFavoritos= () => {
    let filtro=[];

    refreshFavoritos();

    personajes.forEach(personaje => {
        let valor= personaje.id;
        if (favorites.includes(parseInt(valor)))
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
    opcionFavoritos();
}); 

document.querySelector("#topx").addEventListener("click",function(evt){
    evt.preventDefault();
    ranking();
}); 
