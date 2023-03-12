import { FC, useEffect, useState } from "react";

import { AwardsMovieProps } from "./AwardsMovieProps";
import { IAward } from "../../../models/movieModels";

import AwardItem from "../../../components/AwardItem/AwardItem";
import List from "../../../components/List/List";
import Loader from "../../../components/UI/Loader/Loader";
import Pagination from "../../../components/Pagination/Pagination";

import { useFetching } from "../../../hooks/useFetching";
import { getLimitedItems, getTotalPages } from "../../../utils/pagination";
import { MovieService } from "../../../API/movieService";

import styles from "./AwardsMovie.module.scss"


const AwardsMovie: FC<AwardsMovieProps> = ({ id }) => {
  const [ awards, setAwards ] = useState<IAward[]>([])
  const [ limitedAwards, setLimitedAwards ] = useState<IAward[]>([])

  const [ page, setPage ] = useState(1)
  const [ limit, setLimit ] = useState(5)
  const [ totalPages, setTotalPages ] = useState(0)

  const [ fetchAwards, isLoading, isError ] = useFetching(async () => {
    const response = await MovieService.awardsById(id)
    setAwards(response)
    setLimitedAwards(getLimitedItems(response, page, limit))
    setTotalPages(response.length)
  })

  useEffect(() => {
    fetchAwards()
  }, [])

  useEffect(() => {
    setLimitedAwards(getLimitedItems(awards, page, limit))
  }, [ page, totalPages ])

  return (
    <section>
      {/*Нет нормального ID в аргументах, поэтому шакалю так*/}
      {isLoading
        ? <Loader/>
        :
        <>
          <List
            items={limitedAwards}
            placeholder="Номинации отсутствуют"
            className={styles.list}
            renderItem={(award) =>
              <AwardItem award={award} key={award.name + award.nominationName + award.year}/>
            }
          />
          <Pagination
            totalPages={getTotalPages(totalPages, limit)}
            page={page}
            setPage={(page) => setPage(page)}
            className={styles.commentsSection__pagination}
          />
        </>
      }

      <h2>{isError}</h2>
    </section>
  );
};

export default AwardsMovie;