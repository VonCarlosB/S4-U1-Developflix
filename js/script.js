import peliculas from './peliculas.js'

/* Variables DOM */
const actionContainer = document.getElementById('genero-28')
const thrillerContainer = document.getElementById('genero-53')
const adventureContainer = document.getElementById('genero-12')
/* Inicio URL imágenes */
const imgURL = 'https://image.tmdb.org/t/p/w500'

/*
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
        actionContainer.appendChild(element.cloneNode(true))
    }
    if(film.genre_ids.indexOf(53) != -1){
        thrillerContainer.appendChild(element.cloneNode(true))
    }
    if(film.genre_ids.indexOf(12) != -1){
        adventureContainer.appendChild(element.cloneNode(true))
    }
}

peliculas.map((film) => createFilm(film))
*/

/* LIVE REVIEW */

/* Filtrado de películas */
const actionFilms = peliculas.filter((film) => film.genre_ids.includes(28))
const thrillerFilms = peliculas.filter((film) => film.genre_ids.includes(53))
const adventureFilms = peliculas.filter((film) => film.genre_ids.includes(12))

actionFilms.forEach((film) => actionContainer.appendChild(createFilm(film)))
thrillerFilms.forEach((film) => thrillerContainer.appendChild(createFilm(film)))
adventureFilms.forEach((film) => adventureContainer.appendChild(createFilm(film)))

function createFilm(film) {
    let element = document.createElement('a')
    element.setAttribute('class', 'film')
    element.setAttribute('href', `${imgURL}${film.backfrop_path}`)
    element.setAttribute('target', '_blank')
    let image = document.createElement('img')
    image.setAttribute('src', `${imgURL}${film.poster_path}`)
    element.appendChild(image)
    let title = document.createElement('h4')
    title.innerText = film.title
    element.appendChild(title)
    return element
}