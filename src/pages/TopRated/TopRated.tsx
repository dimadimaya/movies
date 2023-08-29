import { useState, useEffect } from "react";
import { getTopRated } from "../../services/api";
import { MoviesList } from "../../components/MoviesList/MoviesList";

const TopRated = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
        const moviesData: any = await getTopRated();
        setMovies(moviesData.data.results);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
        setMovies([]);
      }
    };

    fetchTopRatedMovies();
  }, []);

  if (!movies) {
    return <p>404 Not Found</p>;
  }

  console.log(movies);
  return (
    <>
      <MoviesList movies={movies} />
    </>
  );
};

export default TopRated;
