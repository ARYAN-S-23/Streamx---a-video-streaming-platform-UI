const API_KEY = process.env.REACT_APP_TMDB_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p/w500";

// Fetch movies by genre (Education, Music, Comedy, Sports)
export const fetchCategory = async (genreId) => {
  const res = await fetch(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&sort_by=popularity.desc&page=1`
  );
  const data = await res.json();

  return data.results
    .filter(movie => movie.poster_path)
    .map(movie => ({
      id: movie.id,
      title: movie.title,
      thumbnail: `${IMG_URL}${movie.poster_path}`,
      description: movie.overview,
      rating: movie.vote_average,
    }));
};

// Search movies (Navbar search)
export const searchMovies = async (query) => {
  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );
  const data = await res.json();

  return data.results
    .filter(movie => movie.poster_path)
    .map(movie => ({
      id: movie.id,
      title: movie.title,
      thumbnail: `${IMG_URL}${movie.poster_path}`,
      description: movie.overview,
      rating: movie.vote_average,
    }));
};

// Fetch trending movies (for Hero Banner later)
export const fetchTrending = async () => {
  const res = await fetch(
    `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
  );
  const data = await res.json();

  return data.results
    .filter(movie => movie.backdrop_path)
    .map(movie => ({
      id: movie.id,
      title: movie.title,
      backdrop: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
      description: movie.overview,
    }));
};
