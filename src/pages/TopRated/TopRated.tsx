import { useState, useEffect } from "react";
import { getTopRated } from "../../services/api";
import { MoviesList } from "../../components/MoviesList/MoviesList";
import { Pagination } from "../../components/Pagination/Pagination";

const TopRated = () => {
  const [movies, setMovies] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);

  useEffect(() => {
    fetchTopRatedMovies(currentPage);
  }, [currentPage]);

  const fetchTopRatedMovies = async (page: number) => {
    try {
      const moviesData: any = await getTopRated(page);
      setMovies(moviesData.data.results);
      setItemsPerPage(moviesData.data.results.length);
      setTotalItems(moviesData.data.total_results);
    } catch (error) {
      console.error("Error fetching trending movies:", error);
      setMovies([]);
      setTotalItems(0);
    }
  };

  if (!movies) {
    return <p>404 Not Found</p>;
  }
  const handlePageChange = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected + 1);
  };
  console.log(movies);
  return (
    <>
      <MoviesList movies={movies} />
      {totalItems > 20 && (
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={totalItems}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
};

export default TopRated;
