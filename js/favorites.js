let favorites = [];
let favoritesStorage = localStorage.getItem("@favorites");

if (favoritesStorage) {
  favorites = JSON.parse(favoritesStorage);
}


const saveFavorites = (id) => {

      let pos= favorites.indexOf(parseInt(id));

      if (pos==-1)
      {
          favorites.push(parseInt(id));
      }
      else
      {
          favorites.splice(pos, 1);   //borra el elemento de favoritos
      }

      localStorage.setItem("@favorites", JSON.stringify(favorites));
      reloadFavorites();
};

const reloadFavorites = () => {

    let storage = JSON.parse(favoritesStorage);
    let buttons = Array.from(
      document.querySelectorAll('[data-type*="favorites"]')
    );

    buttons.forEach((button, i) => {
      let idx = parseInt(button.dataset.id);  //obtiene el id del boton

      let posicion= favorites.indexOf(idx);
       if (posicion!=-1) {
          button.innerText = "❤️" ;
          button.dataset.favbool='S';
        }
        else {
            button.innerText = "💛" ;
            button.dataset.favbool='N';
        }
    });
};





