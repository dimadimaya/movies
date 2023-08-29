import { Link, useLocation } from "react-router-dom";
import styles from "./MoviesList.module.css";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  name: string;
}

interface MoviesListProps {
  movies: Movie[];
}

export const MoviesList: React.FC<MoviesListProps> = ({ movies }) => {
  console.log(movies);
  const location = useLocation();
  return (
    <>
      <ul className={styles.list}>
        {movies &&
          movies.map(
            ({ id, title, poster_path, vote_average, vote_count, name }) => (
              <Link to={`/movies/${id}`} state={{ location }}>
                <li key={id} className={styles.item}>
                  <div className={styles.card}>
                    {poster_path ? (
                      <img
                        className={styles.img}
                        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                        alt={title}
                        width="200"
                        height="250"
                      />
                    ) : (
                      <img
                        className={styles.img}
                        src={
                          "https://www.feed-image-editor.com/sites/default/files/perm/wysiwyg/image_not_available.png"
                        }
                        alt={title}
                        width="140"
                        height="175"
                      />
                    )}
                    <div className={styles.average}>
                      {vote_average.toFixed(1)}
                    </div>
                    <p>{title || name}</p>
                  </div>
                </li>
              </Link>
            )
          )}
      </ul>
    </>
  );
};
