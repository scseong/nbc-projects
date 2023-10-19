// 실제 API 로직
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: '',
//   },
// };

// fetch('../data/popular.json', options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

const url = '../data/popular.json';
const BASE_URL = 'https://image.tmdb.org/t/p/';
const FILE_SIZE = {
  w200: 'w200',
};

const fetchData = () => {
  try {
    const data = fetch(url).then((res) => res.json());
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
  moviePoster.src = `${BASE_URL}${FILE_SIZE.w200}${poster_path}`;

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

  const [year, month, _] = release_date.split('-');
  movieYear.innerHTML = `${year.substring(2, 4)}.${month}`;
  movieAverge.innerHTML = `⭐${vote_average}`;

  const detailDiv = document.createElement('div');
  detailDiv.className = 'movie_details';

  detailDiv.appendChild(movieYear);
  detailDiv.appendChild(movieAverge);

  infoDiv.appendChild(movieTitle);
  infoDiv.appendChild(detailDiv);

  movieListItem.appendChild(infoDiv);
  movieList.appendChild(movieListItem);

  movieListItem.addEventListener('click', function (event) {
    alert(`영화 ID: ${id}`);
  });

  movieListItem.addEventListener('mouseover', function (event) {
    movieOverview.classList.add('visible');
  });

  movieListItem.addEventListener('mouseout', function (event) {
    movieOverview.classList.remove('visible');
  });
};

const displayMovies = async () => {
  const { results: data } = await fetchData();

  data.forEach((movie) => {
    const { id, title, overview, release_date, poster_path, vote_average } =
      movie;
    createCard(id, title, overview, poster_path, release_date, vote_average);
  });
};

displayMovies();
