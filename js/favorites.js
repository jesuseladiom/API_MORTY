let favorites = [];

const refreshFavoritos= () => {

    favorites = [];
    let favoritesStorage = localStorage.getItem("@favorites");

    if (favoritesStorage) {
      favorites = JSON.parse(favoritesStorage);
    }
  
};

const buscarFavoritos= (id) => {
    let pos= favorites.indexOf(parseInt(id));
    return pos==-1 ? false : true;

}

const saveFavorites = (id) => {

      refreshFavoritos();

      let posicion= favorites.indexOf(parseInt(id));
      if (buscarFavoritos(parseInt(id)))
        favorites.splice(posicion, 1);   //borra el elemento de favoritos
      else
        favorites.push(parseInt(id));

      localStorage.setItem("@favorites", JSON.stringify(favorites));
      reloadFavorites();
};

const reloadFavorites = () => {

    refreshFavoritos();

    let buttons = Array.from(
      document.querySelectorAll('[data-type*="favorites"]')
    );

    buttons.forEach((button, i) => {
      let idx = parseInt(button.dataset.id);  //obtiene el id del boton

      if (buscarFavoritos(idx)) {
        button.innerText = "❤️" ;
        button.dataset.favbool='S';
      }
      else {
        button.innerText = "💛" ;
        button.dataset.favbool='N';
      }

    });
};

refreshFavoritos();



