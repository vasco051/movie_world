import { FC } from "react";
import { Link } from "react-router-dom";

import { dynamicLink } from "../../assets/exportData/links";

import { ReactComponent as Star } from "../../assets/images/icon/star.svg";

import styles from "./MovieItem.module.scss";

import { MovieItemProps } from "./MovieItemProps";


const MovieItem: FC<MovieItemProps> = ({ movie }) => {
  return (
    <Link to={dynamicLink.movieId(movie.kinopoiskId)}>
      <div className={styles.movie}>
        <img
          src={movie.posterUrlPreview}
          alt="Preview"
          className={styles.movie__image}
        />

        <div className={styles.movie__content}>
          <h2 className={styles.movie__title}>
            {movie.nameRu || movie.nameOriginal}
          </h2>

          <div className={styles.movie__ratingBox}>
            <span className={styles.movie__text}>Рейтинг: {movie.ratingKinopoisk || "-"}/10</span>
            <Star/>
          </div>

          <span className={styles.movie__text}>Год: {movie.year}</span>
        </div>
      </div>
    </Link>
  );
};

export default MovieItem;
