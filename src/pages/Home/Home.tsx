import { useState, useEffect } from "react";
import { getPopular } from "../../services/api";
import { MoviesList } from "../../components/MoviesList/MoviesList";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const moviesData: any = await getPopular();
        setMovies(moviesData.data.results);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
        setMovies([]);
      }
    };

    fetchTrendingMovies();
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

export default Home;
