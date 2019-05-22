const movieListDiv = document.getElementById("listaPeliculas");
const movieNameInput = document.getElementById("nombrePelicula");
const movieList = [];

var idCount = 0;

function createListItem(text) {
    const buttonItem = document.createElement("button");
    const buttonText = document.createTextNode("Borrar");
    buttonItem.appendChild(buttonText);
    var index = idCount;
    buttonItem.onclick = function () { removeFromList(index) };

    const listItem = document.createElement("li");
    const itemText = document.createTextNode(text);
    listItem.appendChild(itemText);
    listItem.appendChild(buttonItem);
    movieListDiv.append(listItem);
    movieList.push(new MovieListItem(idCount, text, listItem));
    idCount++;
    clearInput();
}

function removeFromList(index) {
    for (let i = 0; i < movieList.length; i++) {
        const element = movieList[i];

        if (element.id != index)
            continue;

        movieListDiv.removeChild(element.listItem);
        movieList.splice(i, 1);
        return;
    }
}

function clearInput() {
    movieNameInput.value = "";
}

function clearList() {
    while (movieList.length > 0) {
        movieListDiv.removeChild(movieList[0].listItem);
        movieList.splice(0, 1);
    }
}

class MovieListItem {
    constructor(id, nombre, listItem) {
        this.id = id;
        this.nombre = nombre;
        this.listItem = listItem;
    }
}