import { FC, useEffect, useState } from "react";

import { AwardsMovieProps } from "./AwardsMovieProps";
import { IAward } from "../../../models/movieModels";

import AwardItem from "../../../components/AwardItem/AwardItem";
import List from "../../../components/List/List";
import Loader from "../../../components/UI/Loader/Loader";

import { useFetching } from "../../../hooks/useFetching";
import { MovieService } from "../../../API/movieService";

import styles from "./AwardsMovie.module.scss"


const AwardsMovie: FC<AwardsMovieProps> = ({ id }) => {
  const [ awards, setAwards ] = useState<IAward[]>([])
  const [ fetchAwards, isLoading, isError ] = useFetching(async () => {
    const data = await MovieService.awardsById(id)
    setAwards(data)
  })

  useEffect(() => {
    fetchAwards()
  }, [])

  return (
    <section>
      {/*Нет нормального ID в аргументах, поэтому шакалю так*/}
      {isLoading
        ? <Loader/>
        :
        <List
          className={styles.list}
          items={awards}
          placeholder="Номинации отсутствуют"
          renderItem={(award) =>
            <AwardItem award={award} key={award.name + award.nominationName + award.year}/>
          }
        />
      }

      {isError}
    </section>
  );
};

export default AwardsMovie;