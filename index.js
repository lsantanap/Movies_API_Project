// async function main(){
// const movies = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=1eb4f276&s=${name}`) 
// const movieTitle = await movies.json();
// const movieListEl = document.querySelector('.movie')
// movieListEl.innerHTML = movieTitle.map  

// }
// main();

// function movieHML(movie){
//  return `<div class="movie__card">
//                 <h1 class="pretty">Title</h1>
//                 <p class="pretty">Year</p>
//              </div>
//                 <div class="poster">
//                     <img src="https://m.media-amazon.com/images/M/MV5BZGRiMDE1NTMtMThmZS00YjE4LWI1ODQtNjRkZGZlOTg2MGE1XkEyXkFqcGc@._V1_SX300.jpg" class= "img__poster"alt="">
//                 </div>
//             </div>`;
// }
document.addEventListener('DOMContentLoaded',() => {
 const form = document.getElementById ('search__form')
 form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const query = document.querySelector('.input__search').value;
    if (!query){
        event.preventDefault();
        alert('Please enter a movie title');
        return; 
    }
 })

 });
 




