import axios from 'axios';

const API_KEY = 'ffe0408b9563a6afec06de8c2a740d64';

const getMovies = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};

export { getMovies };