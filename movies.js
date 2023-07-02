const moviecontainer = document.querySelector('#firstmovieposter')
const movielistcontainer = document.querySelector('#movielist')

fetch("http://localhost:3000/films/1")
.then(resp => resp.json())
.then(filmdata  =>{
    console.log(filmdata)
    displayfirstmovie(filmdata)
} 
)

function displayfirstmovie(firstmovie){
 const firstmovietitle = document.createElement('p')
 firstmovietitle.id = 'firstmovietitle' 
 firstmovietitle.innerText = firstmovie.title
 moviecontainer.append(firstmovietitle) 

 const availabletickets = document.createElement('p')
 availabletickets.id = 'availabletickets'
 availabletickets.innerText = (firstmovie.capacity - firstmovie.tickets_sold)
 moviecontainer.append(availabletickets)


const firstmovieimageview = document.createElement('img')
firstmovieimageview.id = 'firstmovieimage'
firstmovieimageview.src = firstmovie.poster
moviecontainer.append(firstmovieimageview)
}

fetch ("http://localhost:3000/films")
.then (resp => resp.json())
.then (movielist =>{
    console.log(movielist);
  movielist.forEach(movielistitem => {
    displaymovieslist(movielistitem)
    });
    
})

function displaymovieslist(movielist){
    const movieitem = document.createElement('li')
    movieitem.id = 'movielistitem'
    movieitem.innerText = movielist.title
    movielistcontainer.appendChild(movieitem)
}