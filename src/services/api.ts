import axios from "axios";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTk1Yzg4MDVkNWY0M2I4MmNiNWJmZDcwYTMwNjliNSIsInN1YiI6IjYzODBiZTZmYTRhZjhmMDBjYTBhNzNiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IlLZAvcnFQNT4F0qexl8m3B8HncrGDcUzBgDka6NT-I",
  },
};

export async function getPopular(page: number = 1) {
  return axios.get(
    `https://api.themoviedb.org/3/movie/popular?page=${page}`,
    options
  );
}

export async function getTopRated(page: number = 1) {
  return axios.get(
    `https://api.themoviedb.org/3/movie/top_rated?page=${page}`,
    options
  );
}

export async function getUpcoming(page: number = 1) {
  return axios.get(
    `https://api.themoviedb.org/3/movie/upcoming?page=${page}`,
    options
  );
}

export async function getTrendingTv(page: number = 1) {
  return axios.get(
    `https://api.themoviedb.org/3/trending/tv/day?page=${page}`,
    options
  );
}

export async function getMovieDetails(movieId: number) {
  const data = axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}`,
    options
  );
  return data;
}

export async function searchMovies(query: string) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${query}`,
      options
    );
    return response.data.results;
  } catch (error) {
    throw new Error("Ошибка сетевого запроса.");
  }
}

export const fetchTrailer = async (id: string) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/videos`,
    options
  );

  return response.data.results;
};
