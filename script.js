const apiKey = '8400edf68b14ba9d59bc4020b3516d3c'; 
const movieContainer = document.getElementById('movie-grid');
const loadBtn = document.getElementById('load-more-movies-btn');
const clearBtn = document.getElementById('close-search-btn');
const searchForm = document.getElementById('searchForm');
let search_bar = document.getElementById('search-input');

console.log(search_bar);
let movieData = [];
const state =  {
    currPage: 0,
    searchTerm: "",
}
let currentCount = 1;
const createMovie = (info) => {
    const movie = document.createElement("div");
    movie.className = "movie-card";
    const imageURL = `https://image.tmdb.org/t/p/original/${info.poster_path}`
    movie.innerHTML = `
        <section>
            <img class="movie-poster" src="${imageURL}" alt="No poster image for ${info.title}">
            <h1 class="movie-votes">⭐ ${info.vote_average} </h1>
            <h1 class= "movie-title" >${info.title}</h1>
            
        </section>
    `; 
    movieContainer.appendChild(movie);
}
async function getMovies() {
    state.currPage += 1;
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${state.currPage}`;
    const res = await fetch(url)
    movieData = await res.json()
    movieData.results.forEach( (info) => {
        createMovie(info);
    });
}
async function displaySearch(movieName){
    movieContainer.innerHTML = "";
    let newURL = `https://api.themoviedb.org/3/search/movie?query=${movieName}&page=${state.currPage}&api_key=${apiKey}`
    const res = await fetch(newURL)
    const movieData = await res.json()
    if(movieData.results == ''){
        const movie = document.createElement("div");
        movie.className = "no-result";
        movie.innerHTML = `<h1 id="no-results">No Results Found</h1>`; 
        movieContainer.appendChild(movie);
    }else{
    movieData.results.forEach( (info) => {
        createMovie(info);
    });
    }
}
async function starterPage(){
        const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=1`;
        const res = await fetch(url)
        movieData = await res.json()
        movieData.results.forEach( (info) => {
            createMovie(info);
        });
    
}
searchForm.addEventListener('submit', (event)=> {
    event.preventDefault();
    state.searchTerm = event.target.query.value;
    console.log(event.target.query.value);
    displaySearch(state.searchTerm);
})
getMovies();
loadBtn.addEventListener('click', getMovies);
clearBtn.addEventListener('click', () => {
    search_bar.value = '';
    state.searchTerm = '';
    movieContainer.innerHTML = "";
    starterPage();
})




