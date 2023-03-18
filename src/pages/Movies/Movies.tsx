import { observer } from "mobx-react-lite";
import { FC, useContext, useEffect, useState } from "react";

import List from "../../components/List/List";
import MovieItem from "../../components/MovieItem/MovieItem";
import Pagination from "../../components/Pagination/Pagination";
import Loader from "../../components/UI/Loader/Loader";
import PageWrapper from "../../components/Wrappers/PageWrapper/PageWrapper";

import { Context } from "../../index";

import { IMovieShort } from "../../models/movieModels";
import { getTotalPages } from "../../utils/pagination";

import styles from "./Movies.module.scss";


const Movies: FC = observer(() => {
  const { moviesStore } = useContext(Context);

  const [ movies, setMovies ] = useState<IMovieShort[]>([]);
  const [ totalItems, setTotalItems ] = useState<number>(0);

  const fetchMovies = async () => {
    const response = await moviesStore.getMovies();

    if (response) {
      setMovies(response.data.items);
      setTotalItems(response.data.total);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [ moviesStore.page, moviesStore.order ]);

  return (
    <PageWrapper className={styles.movies}>
      <h1 className={styles.movies__title}>
        Лучшие новинки!
      </h1>

      {moviesStore.isLoading
        ?
        <Loader/>
        :
        <>
          <List
            items={movies}
            className={styles.movies__list}
            renderItem={(movie: IMovieShort) => (
              <MovieItem movie={movie} key={movie.kinopoiskId}/>
            )}
          />

          <Pagination
            totalPages={getTotalPages(totalItems, 20)}
            page={moviesStore.page}
            setPage={page => moviesStore.setPage(page)}
            className={styles.movies__pagination}
          />
        </>
      }

      <h2 className={styles.movies__error}>{moviesStore.isError}</h2>
    </PageWrapper>
  );
});

export default Movies;
