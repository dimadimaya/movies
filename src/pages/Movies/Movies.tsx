// import { SearchForm } from "components/SearchForm/SearchForm";
import { MoviesList } from "../../components/MoviesList/MoviesList";
import { SearchForm } from "../../components/SearchForm/SearchForm";
// import { SearchForm } from "../../../components/SearchForm/SearchForm";

const Movies = () => {
  return (
    <>
      <SearchForm />
      <MoviesList movies={[]} />
    </>
  );
};
export default Movies;
