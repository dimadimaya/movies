import { useEffect, useState } from "react";
import { searchMovies } from "../../services/api";
import { MoviesList } from "../../components/MoviesList/MoviesList";

interface SearchProps {
  query: string;
}

export const Search: React.FC<SearchProps> = ({ query }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies(query).then((data) => {
      setMovies(data);
    });
  }, [query]);

  return <MoviesList movies={movies} />;
};
