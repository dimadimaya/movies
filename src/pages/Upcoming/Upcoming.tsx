import { useState, useEffect } from "react";
import { getUpcoming } from "../../services/api";
import { MoviesList } from "../../components/MoviesList/MoviesList";

const Upcoming = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      try {
        const moviesData: any = await getUpcoming();
        setMovies(moviesData.data.results);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
        setMovies([]);
      }
    };

    fetchUpcomingMovies();
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

export default Upcoming;
