import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import styles from "./SharedLayout.module.css";
import { Footer } from "../Footer/Footer";
import { NavLink } from "react-router-dom";

export const SharedLayout = () => {
  return (
    <div className={styles.container}>
      <header>
        <nav className={styles.header}>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/movies">Movies</NavLink>
          <NavLink to="/top">Top Rated</NavLink>
          <NavLink to="/upcoming">Upcoming</NavLink>
          <NavLink to="/trendingtv">Trending Tv</NavLink>
        </nav>
      </header>
      <Suspense className={styles.outlet} fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};
