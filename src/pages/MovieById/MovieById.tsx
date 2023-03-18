import clsx from "clsx";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieService } from "../../API/rest/movieService";
import Loader from "../../components/UI/Loader/Loader";

import PageWrapper from "../../components/Wrappers/PageWrapper/PageWrapper";

import { useFetching } from "../../hooks/useFetching";

import { IMovieFull } from "../../models/movieModels";
import AwardsMovie from "./AwardsMovie/AwardsMovie";
import CommentsSection from "./CommentsSection/CommentsSection";
import MajorMovie from "./MajorMovie/MajorMovie";

import styles from "./MovieById.module.scss";


const MovieById: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [ movie, setMovie ] = useState<IMovieFull | null>(null);
  const [ selectValue, setSelectValue ] = useState<string>("Номинации");

  const [ fetchMovie, isLoading, isError ] = useFetching(async () => {
    const data = await MovieService.movieById(id!);
    setMovie(data);
  });

  const selects = [
    {
      id: "Номинации",
      element: <AwardsMovie id={id!}/>
    },
    {
      id: "Комментарии",
      element: <CommentsSection id={id!}/>
    }
  ];

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <PageWrapper className={styles.movie}>
      {isLoading
        ? <Loader/>
        :
        <>
          <MajorMovie movie={movie}/>

          <div className={styles.buttons}>
            {selects.map(s =>
              <button
                key={s.id}
                onClick={() => setSelectValue(s.id)}
                className={clsx({
                  [styles.buttons__button]: true,
                  [styles.buttons__button_active]: selectValue === s.id
                })}
              >{s.id}</button>
            )}
          </div>

          {/*TODO погуглить про нормальный способ отрисовки раздела*/}
          {selects.find(s => s.id === selectValue)!.element}
        </>
      }
      {isError}
    </PageWrapper>
  );
};

export default MovieById;
