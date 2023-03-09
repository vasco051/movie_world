import { FC } from "react";
import { Link } from "react-router-dom";

import { MovieItemProps } from "./MovieItemProps";

import { dynamicLink } from "../../assets/exportData/links";

import Button from "../UI/button/Button";

import styles from "./MovieItem.module.scss";


const MovieItem: FC<MovieItemProps> = ({ movie }) => {
  return (
    <div className={styles.movie}>
      <img
        src={movie.posterUrlPreview}
        alt="Preview"
        className={styles.movie__image}
      />

      <div className={styles.movie__content}>
        <h2 className={styles.movie__title}>
          {movie.nameRu || movie.nameOriginal} ({movie.year})
        </h2>

        <div className={styles.movie__buttons}>
          <Link to={dynamicLink.movieId(movie.kinopoiskId)}>
            <Button variant={"outlinedWithIcon"}/>
          </Link>
          
          <Link to={dynamicLink.movieId(movie.kinopoiskId)}>
            <Button variant={"primary"}>Подробнее</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
