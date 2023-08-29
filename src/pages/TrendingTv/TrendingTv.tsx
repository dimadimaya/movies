import { useState, useEffect } from "react";
import { getTrendingTv } from "../../services/api";
import { MoviesList } from "../../components/MoviesList/MoviesList";

const TrendingTv = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingTv = async () => {
      try {
        const moviesData: any = await getTrendingTv();
        setMovies(moviesData.data.results);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
        setMovies([]);
      }
    };

    fetchTrendingTv();
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

export default TrendingTv;
