import { Suspense, useEffect, useState } from "react";
import {
  Link,
  Outlet,
  useParams,
  useLocation,
  NavLink,
} from "react-router-dom";

import styles from "./MovieDetails.module.css";
import { getMovieDetails } from "../../services/api";

type Genre = {
  name: string;
};

interface Movie {
  poster_path: string;
  title?: string;
  name?: string;
  release_date: string | Date;
  vote_average: number;
  overview: string;
  genres: Genre[];
}

const MovieDetails = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const location = useLocation();
  const backLinkHref = location.state?.location ?? "/";

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await getMovieDetails(Number(movieId));
        const movieData = response.data;
        setMovie(movieData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const {
    poster_path,
    title,
    name,
    release_date,
    vote_average,
    overview,
    genres,
  } = movie;

  if (!Array.isArray(genres)) {
    return <div>Genres data is not available.</div>;
  }

  return (
    <div className={styles.movie__container}>
      <Link to={backLinkHref} className={styles.back}>
        BACK
      </Link>

      <div className={styles.movie__wrap}>
        <div className={styles.movie__img}>
          {poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
              alt={title ? title : name}
            />
          ) : (
            <img
              src={
                "https://www.feed-image-editor.com/sites/default/files/perm/wysiwyg/image_not_available.png"
              }
              alt={title ? title : name}
              width="300"
              height="450"
            />
          )}
        </div>
        <div className={styles.movie__info}>
          <h3>
            {title}({new Date(release_date).getFullYear()})
          </h3>
          <h3>Use Score: </h3>
          <p>{Math.round((vote_average / 10) * 100)}%</p>
          <h3>Overview:</h3>
          <p>{overview}</p>
          <h3>Genres: </h3>
          <p> {genres.map((genre: Genre) => genre.name).join(", ")}</p>
        </div>
      </div>
      <div className={styles.movie__add__info}>
        <h2 className={styles.movie__add__info_title}>
          Additional information
        </h2>
        <NavLink to="cast" state={location.state} className={styles.navLink}>
          CAST
        </NavLink>
        <NavLink to="reviews" state={location.state} className={styles.navLink}>
          Reviews
        </NavLink>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default MovieDetails;
