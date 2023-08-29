import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import MovieDetails from "./components/MovieDetails/MovieDeatails";
import TopRated from "./pages/TopRated/TopRated";
import Upcoming from "./pages/Upcoming/Upcoming";
import TrendingTv from "./pages/TrendingTv/TrendingTv";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="top" element={<TopRated />} />
          <Route path="upcoming" element={<Upcoming />} />
          <Route path="trendingtv" element={<TrendingTv />} />
          {/* <Route path="search" element={<Search query={query} />} /> */}
          <Route path="movies/:movieId" element={<MovieDetails />}></Route>
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
