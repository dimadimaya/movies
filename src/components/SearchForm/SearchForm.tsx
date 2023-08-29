import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import styles from "./SearchForm.module.css";
import { Search } from "../../pages/Search/Search";

export const SearchForm: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (searchQuery.trim() !== "") {
      setSearchParams({ query: searchQuery });
    }
  };

  const queryParam = searchParams.get("query") || "";

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter your query here, please"
          onChange={handleInput}
          value={searchQuery}
        />
        <button type="submit" className={styles.btn}>
          Search
        </button>
      </form>
      <Link to={`/search?query=${queryParam}`}>
        {queryParam && <Search query={queryParam} />}
      </Link>
    </div>
  );
};
