import { FC } from "react";

import { getAgeLimit, getCountries, getGenres } from "../../../utils/movie";

import Button from "../../../components/UI/button/Button";
import { MajoeMovie } from "./MajoeMovie";

import clsx from "clsx";
import styles from "./MajorMovie.module.scss"


const MajorMovie: FC<MajoeMovie> = ({ movie }) => {
  const infoContent: { id: number, body: string | number }[] = [
    { id: 1, body: getCountries(movie?.countries) },
    { id: 2, body: getGenres(movie?.genres) },
    { id: 3, body: movie?.year || "Даты премьеры нет" },
    { id: 4, body: getAgeLimit(movie?.ratingAgeLimits) }
  ]

  return (
    <section className={styles.major}>
      {/*TODO переписать 10 строк кода, которые ниже. Посмотреть про адаптив картинок*/}
      {movie?.coverUrl
        ?
        // эту не шакалит
        <div className={styles.major__previewWrapper}>
          <img src={movie.coverUrl} alt="preview" className={styles.major__preview}/>
        </div>
        :
        // эту шакалит
        <div className={styles.major__previewWrapper}>
          <img src={movie?.posterUrlPreview} alt="preview" className={styles.major__preview}/>
        </div>
      }

      <div className={styles.major__content}>
        <div className={clsx(styles.major__header, styles.header)}>
          <h2 className={styles.header__title}>
            {movie?.nameRu || movie?.nameOriginal}
          </h2>

          {/*TODO добавить склонения "просмотров"*/}
          <h3 className={styles.header__subtitle}>
            Рейтинг: {movie?.ratingKinopoisk || ":("} / {movie?.ratingKinopoiskVoteCount || ":("} просмотров
          </h3>
        </div>


        {movie?.description &&
          <p className={styles.major__description}>
            {movie.description}
          </p>
        }


        <ul className={clsx(styles.major__info, styles.info)}>
          {infoContent.map(info =>
            <li className={styles.info__item} key={info.id}>
              <p className={styles.info__text}>{info.body}</p>
            </li>
          )}
        </ul>


        <div className={styles.major__buttons}>
          <Button variant={"outlined"}>Избранное</Button>
          <Button variant={"outlined"}>Понравилось</Button>
        </div>
      </div>
    </section>
  );
};

export default MajorMovie;