const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTFlY2RhOWNkNTU0MmFiOTczMTJlYTA1Y2QyZTNjMyIsInN1YiI6IjYzYzUxOWY4YjdkMzUyMDA3YzU3ZGU1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xmURuZE0t1YyuIV3I4Wu-BjeAiYIKohliS6iHEZyGUQ',
  },
};

const BASE_URL = 'https://api.themoviedb.org/3';
const BASE_IMG_URL = 'https://image.tmdb.org/t/p/';
const FILE_SIZE = {
  w200: 'w200',
};
const ACTION = {
  popular: 'popular',
  search: 'search',
};

const fetchMovies = (action, query) => {
  const popularURL = `${BASE_URL}/movie/popular`;
  const searchURL = `${BASE_URL}/search/movie?query=${query}`;
  let selectURL = '';

  switch (action) {
    case 'popular':
      selectURL = popularURL;
      break;
    case 'search':
      selectURL = searchURL;
      break;
  }

  try {
    const data = fetch(selectURL, options).then((res) => res.json());
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const createCard = (
  id,
  title,
  overview,
  poster_path,
  release_date,
  vote_average
) => {
  const movieList = document.querySelector('.movie_lists');
  const movieListItem = document.createElement('li');
  movieListItem.className = 'movie_item';

  const [year = '0000', month = '00', _] =
    release_date !== '' ? release_date.split('-') : [];
  const posterURL = poster_path
    ? `${BASE_IMG_URL}${FILE_SIZE.w200}${poster_path}`
    : 'image/default-movie.png';

  movieListItem.innerHTML = `
  <div class="movie_image">
    <img
      class="movie_poster"
      src=${posterURL}
    />
    <p class="movie_overview">${overview}</p>
  </div>
  <div class="movie_info">
    <p class="movie_title ellpsis">${title}</p>
    <div class="movie_details">
      <p class="movie_year">${year + '.' + month}</p>
      <p class="movie_grade">⭐${Math.round(vote_average * 10) / 10}</p>
    </div>
  </div>
`;

  movieList.appendChild(movieListItem);
  movieListItem.addEventListener('click', () => alert(`영화 ID: ${id}`));
};

const displayPopularMovies = () => {
  fetchMovies(ACTION.popular).then((res) => {
    const { results: movies } = res;
    movies.forEach((movie) => {
      const { id, title, overview, release_date, poster_path, vote_average } =
        movie;
      createCard(id, title, overview, poster_path, release_date, vote_average);
    });
  });
};

const displaySearchMovies = (query) => {
  if (query === '') {
    alert('Please enter at least one character.');
    return;
  }

  const word = query.toLowerCase();
  const subtitle = document.querySelector('.section_title');
  subtitle.innerHTML = `🌎 Search:  ${query}`;
  const movieList = document.querySelector('.movie_lists');

  if (movieList) {
    while (movieList.firstChild) {
      movieList.removeChild(movieList.firstChild);
    }
  }

  fetchMovies(ACTION.search, word).then((res) => {
    const { results: movies } = res;
    movies
      .filter((movie) => {
        const target = movie.original_title.toLowerCase();
        if (target.includes(word)) {
          return movie;
        }
      })
      .forEach((movie) => {
        const {
          id,
          original_title,
          overview,
          release_date,
          poster_path,
          vote_average,
        } = movie;

        createCard(
          id,
          original_title,
          overview,
          poster_path,
          release_date,
          vote_average
        );
      });
  });
};

const form = document.querySelector('.search_form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const input = document.getElementById('search_input');
  displaySearchMovies(input.value);

  input.value = '';
  return false;
});

displayPopularMovies();
