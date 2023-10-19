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

  const posterDiv = document.createElement('div');
  const infoDiv = document.createElement('div');
  posterDiv.className = 'movie_image';
  infoDiv.className = 'movie_info';

  const moviePoster = document.createElement('img');
  const movieOverview = document.createElement('p');
  moviePoster.className = 'movie_poster';
  movieOverview.className = 'movie_overview';
  movieOverview.innerHTML = overview;
  moviePoster.src = poster_path
    ? `${BASE_IMG_URL}${FILE_SIZE.w200}${poster_path}`
    : 'image/default-movie.png';

  posterDiv.appendChild(moviePoster);
  posterDiv.appendChild(movieOverview);
  movieListItem.appendChild(posterDiv);

  const movieTitle = document.createElement('p');
  const movieYear = document.createElement('p');
  const movieAverge = document.createElement('p');
  movieTitle.className = 'movie_title ellpsis';
  movieYear.className = 'movie_year';
  movieAverge.className = 'movie_grade';

  movieTitle.innerHTML = title;

  const [year = '0000', month = '00', _] =
    release_date !== '' ? release_date.split('-') : [];
  movieYear.innerHTML = `${year}.${month}`;
  movieAverge.innerHTML = `⭐${Math.round(vote_average * 10) / 10}`;

  const detailDiv = document.createElement('div');
  detailDiv.className = 'movie_details';

  detailDiv.appendChild(movieYear);
  detailDiv.appendChild(movieAverge);

  infoDiv.appendChild(movieTitle);
  infoDiv.appendChild(detailDiv);

  movieListItem.appendChild(infoDiv);
  movieList.appendChild(movieListItem);

  movieListItem.addEventListener('click', () => alert(`영화 ID: ${id}`));

  movieListItem.addEventListener('mouseover', () =>
    movieOverview.classList.add('visible')
  );

  movieListItem.addEventListener('mouseout', () =>
    movieOverview.classList.remove('visible')
  );
};

const displayPopularMovies = async () => {
  const { results: data } = await fetchMovies(ACTION.popular);

  data.forEach((movie) => {
    const { id, title, overview, release_date, poster_path, vote_average } =
      movie;
    createCard(id, title, overview, poster_path, release_date, vote_average);
  });
};

const displaySearchMovies = async (query) => {
  if (query === '') return;

  const word = query.toLowerCase();

  const { results } = await fetchMovies(ACTION.search, word);
  let data = results.filter((movie) => {
    const target = movie.original_title.toLowerCase();
    if (target.includes(word)) {
      return movie;
    }
  });

  data = data.sort((a, b) => a.release_date - b.release_date);

  const subtitle = document.querySelector('.section_title');
  subtitle.innerHTML = `🌎 Search:  ${query}`;

  const movieList = document.querySelector('.movie_lists');
  if (movieList) {
    while (movieList.firstChild) {
      movieList.removeChild(movieList.firstChild);
    }
  }

  data.forEach((movie) => {
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
