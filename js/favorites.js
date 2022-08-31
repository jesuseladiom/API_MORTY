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
          //button.innerText = "❤️";
      }
      else
      {
          favorites.splice(pos, 1);   //borra el elemento de favoritos
          //button.innerText = "💛";
      }

      localStorage.setItem("@favorites", JSON.stringify(favorites));
      reloadFavorites();
};

const reloadFavorites = () => {

    let storage = JSON.parse(favoritesStorage);
    let buttons = Array.from(
      document.querySelectorAll('[data-type*="favorites"]')
    );

    //console.log(buttons)
    buttons.forEach((button, i) => {
      //console.log(button);
      let idx = parseInt(button.dataset.id);  //obtiene el id del boton
      //console.log(idx);

      let posicion= favorites.indexOf(idx);
      //console.log(posicion);
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





