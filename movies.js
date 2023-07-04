const moviecontainer = document.querySelector('#firstmovieposter')
const movielistcontainer = document.querySelector('#movielist')
const viewmoviecontainer = document.querySelector('#Buymovieview')
const firstmoviedetailscontainer = document.querySelector('#firstmoviedetails')
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
 firstmoviedetailscontainer.append(firstmovietitle)

 const firstmovieruntime = document.createElement('p')
 firstmovieruntime .id = 'firstmovieruntime' 
 firstmovieruntime .innerText = "Runtime : " + firstmovie.runtime
 firstmoviedetailscontainer.append(firstmovieruntime )

 const firstmovieshowtime = document.createElement('p')
 firstmovieshowtime.id = 'firstmovieshowtime' 
 firstmovieshowtime.innerText = "Showtime " + firstmovie.showtime
 firstmoviedetailscontainer.append(firstmovieshowtime)
  

 const availabletickets = document.createElement('p')
 availabletickets.id = 'availabletickets'
 availabletickets.innerText = "Available tickets"+" = "+" "+(firstmovie.capacity - firstmovie.tickets_sold)
 firstmoviedetailscontainer.append(availabletickets)


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
    
    displaymovieimageitem(movielistitem)

    displaymovieslist(movielistitem)
    });
    
})

function displaymovieslist(movielist){
    const movieitem = document.createElement('li')
    movieitem.id = 'movielistitem'
    movieitem.innerText = movielist.title
    movielistcontainer.appendChild(movieitem)
    movieitem.addEventListener('click', ()=>{
        displaymovieimageitem(movielist)  
    })
   
   const deletebtn = document.createElement('button')
   deletebtn.id = 'deletebtn'
   deletebtn.innerText = "Delete Movie"
   movieitem.append(deletebtn)
   
   deletebtn.addEventListener('click' , ()=>{
    movieitem.remove()
   } )
}

function displaymovieimageitem(movielist){
    viewmoviecontainer.innerHTML = ""

    const vmovietitle = document.createElement('p')
    vmovietitle.id = 'vmovietitle'
    vmovietitle.innerText = movielist.title
    viewmoviecontainer.appendChild(vmovietitle)

    const vmovieimage = document.createElement('img')
    vmovieimage.id ='vmovieimage'
    vmovieimage.src = movielist.poster
    viewmoviecontainer.append(vmovieimage)

    const vmovieruntime = document.createElement('p')
    vmovieruntime.id ='vmovieruntime'
    vmovieruntime.innerText = "Runtime" + " " +  movielist.runtime
    viewmoviecontainer.append(vmovieruntime)
    
    const vmovieshotime = document.createElement('p')
    vmovieshotime.id ='vmovieruntime'
    vmovieshotime.innerText = "Showtime"+ " " +  movielist.showtime
    viewmoviecontainer.append(vmovieshotime)
    
    const vavailabletickets = document.createElement('p')
    vavailabletickets.id = 'availableticcs'
    vavailabletickets.innerText = " Available Tickets" + (movielist.capacity-movielist.tickets_sold)
    viewmoviecontainer.append(vavailabletickets)

    const buyticketbutton = document.createElement('button')
    buyticketbutton.id = "buyticket"
    buyticketbutton.innerText = 'Buy Ticket'
    viewmoviecontainer.append(buyticketbutton)

    buyticketbutton.addEventListener('click', () =>{
        
        const availabletics = document.getElementById('availableticcs')
        movielist.tickets_sold++
        availabletics.innerText = "Availabletickets = " + (movielist.capacity-movielist.tickets_sold)
         
    })
   
}
