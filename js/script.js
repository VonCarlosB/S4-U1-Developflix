import peliculas from './peliculas.js'

const actionContainer = document.getElementById('genero-28')
const thrillerContainer = document.getElementById('genero-53')
const adventureContainer = document.getElementById('genero-12')
const imgURL = 'https://image.tmdb.org/t/p/w500'

function createFilm(film) {
    let element = document.createElement('a')
    element.setAttribute('class', 'film')
    element.setAttribute('href', imgURL+film.backdrop_path)
    element.setAttribute('target', '_blank')
    let image = document.createElement('img')
    image.setAttribute('src', imgURL+film.poster_path)
    element.appendChild(image)
    let title = document.createElement('h4')
    title.innerText = film.title
    element.appendChild(title)

    if(film.genre_ids.indexOf(28) != -1){
        actionContainer.append(element.cloneNode(true))
    }
    if(film.genre_ids.indexOf(53) != -1){
        thrillerContainer.appendChild(element.cloneNode(true))
    }
    if(film.genre_ids.indexOf(12) != -1){
        adventureContainer.appendChild(element.cloneNode(true))
    }
}

peliculas.map((film) => createFilm(film))