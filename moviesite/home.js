const hb = document.querySelector("#menu");
hb.onclick = 
showmenu = () => {
    console.log("u clicked menu button")
};

// const hb2 = document.getElementById("menu");
// hb2.onclick = showmenu2;

// function showmenu2() {
//     console.log("u clicked menu button bt id metho9a")
// }


const APILINK = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a03b51423e78227c2385d5159d64db84&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w500";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=a03b51423e78227c2385d5159d64db84&query=";

const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

returnMovies(APILINK)
function returnMovies(url){
    fetch(url).then(res => res.json())
    .then(function(data){
        console.log(data.results);
        data.results.forEach(element =>{
            const div_card = document.createElement('div');
            div_card.setAttribute('class', 'card');
            
            const div_row = document.createElement('div');
            div_row.setAttribute('class', 'row');

            const div_coloum = document.createElement('div');
            div_coloum.setAttribute('class', 'coloum');

            const image = document.createElement('img');
            image.setAttribute('class', 'thumbnail');
            image.setAttribute('id', 'image');

            const title = document.createElement('h3');
            title.setAttribute('id', 'title');

            
            const overview = document.createElement('p');
            overview.setAttribute('class', 'overview');

            const releaseDate = document.createElement('p');
            releaseDate.setAttribute('class', 'release-date');

            const popularity = document.createElement('p');
            popularity.setAttribute('class', 'popularity');


            const center = document.createElement('center');

            title.innerHTML = `${element.title}`;
            image.src = IMG_PATH +element.poster_path;
            overview.innerHTML = `Overview: ${element.overview}`;
            releaseDate.innerHTML = `Release Date: ${element.release_date}`;
            popularity.innerHTML = `Popularity: ${element.popularity}`;


            center.appendChild(image)
            div_card.appendChild(center);
            div_card.appendChild(title);
            div_card.appendChild(overview);
            div_card.appendChild(releaseDate);
            div_card.appendChild(popularity);
            div_coloum.appendChild(div_card);
            div_row.appendChild(div_coloum);

            main.appendChild(div_row);
        });
    });
}
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    main.innerHTML = ""

    const searchItem = search.value;

    if (searchItem) {
        returnMovies(SEARCHAPI + searchItem);
        search.value = ""
    }
});