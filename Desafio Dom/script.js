const movieListDiv = document.getElementById("listaPeliculas");
const movieNameInput = document.getElementById("nombrePelicula");
const movieList = [];

function createListItem(text) {
    const buttonItem = document.createElement("button");
    const buttonText = document.createTextNode("Borrar");
    buttonItem.appendChild(buttonText);
    var index = movieList.length;
    buttonItem.onclick = function () { removeFromList(index) };

    const listItem = document.createElement("li");
    const itemText = document.createTextNode(text);
    listItem.appendChild(itemText);
    listItem.appendChild(buttonItem);
    movieListDiv.append(listItem);
    movieList.push(new MovieListItem(text, listItem));
    clearInput();
}

function removeFromList(index) {
    const element = movieList[index];
    movieListDiv.removeChild(element.listItem);
    movieList[index] = null;
}

function clearInput(){
    movieNameInput.value = "";
}

function clearList() {
    while (movieList.length > 0) {
        movieListDiv.removeChild(movieList[0].listItem);
        movieList.splice(0, 1);
    }
}

class MovieListItem {
    constructor(nombre, listItem) {
        this.nombre = nombre;
        this.listItem = listItem;
    }
}