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
  w300: 'w300',
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

const movie_lists = document.querySelector('.movie_lists');
const movie_items = movie_lists.querySelectorAll('li');

const displayMovies = async () => {
  //   const { results: data } = await fetchData();
  const res = await fetchData();
  const data = res.results;

  console.log(res.results);

  data.forEach((movie) => {
    const { id, title, overview, poster_path, vote_average } = movie;
    const li = document.createElement('li');
    li.className = 'movie_item';
    // li.innerHTML = `${title}<br/>${overview}<br/>${poster_path}<br/>${vote_average} `;
    li.style.backgroundImage = `url('${BASE_URL}${FILE_SIZE.w300}${poster_path}')`;
    li.style.backgroundSize = 'cover';
    li.style.backgroundRepeat = 'no-repeat';

    movie_lists.appendChild(li);
  });
};

// const displayMovies = () => {
//   fetchData().then((res) => {
//     const data = res.results;
//     data.forEach((movie) => {
//       const li = document.createElement('li');
//       li.className = 'movie_item';
//       li.innerHTML = movie.title;
//       movie_lists.appendChild(li);
//     });
//   });
// };

displayMovies();
