import { FC, useEffect, useState } from "react";
import List from "../../components/List/List";
import MovieItem from "../../components/MovieItem/MovieItem";
import PageWrapper from "../../components/Wrappers/PageWrapper/PageWrapper";
import { IMovieShort } from "../../models/movieModels";
import styles from "./Movies.module.scss"
import { useFetching } from "../../hooks/useFetching";
import { MovieService } from "../../API/movieService";
import Loader from "../../components/UI/Loader/Loader";


const Movies: FC = () => {
  const [ movies, setMovies ] = useState<IMovieShort[]>([]);

  const [ fetchMovies, isLoading, isError ] = useFetching(async () => {
    const data = await MovieService.allMovies()
    setMovies(data)
  })


  useEffect(() => {
    fetchMovies()
  }, []);

  return (
    <PageWrapper className={styles.movies}>
      <h1 className={styles.movies__title}>
        Лучшие новинки!
      </h1>

      {isLoading
        ?
        <Loader/>
        :
        <List
          items={movies}
          className={styles.movies__list}
          renderItem={(movie: IMovieShort) => (
            <MovieItem movie={movie} key={movie.kinopoiskId}/>
          )}
        />
      }
      <h2 className={styles.movies__error}>{isError}</h2>
    </PageWrapper>
  );
};

export default Movies;
