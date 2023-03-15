import { FC, useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

import { AwardsMovieProps } from "./AwardsMovieProps";

import AwardItem from "../../../components/AwardItem/AwardItem";
import List from "../../../components/List/List";
import Loader from "../../../components/UI/Loader/Loader";
import Pagination from "../../../components/Pagination/Pagination";

import { getLimitedItems, getTotalPages } from "../../../utils/pagination";
import { Context } from "../../../index";

import styles from "./AwardsMovie.module.scss"


const AwardsMovie: FC<AwardsMovieProps> = observer(({ id }) => {
  const { awards } = useContext(Context)

  const [ page, setPage ] = useState(1)
  const limit = 5

  useEffect(() => {
    awards.fetchAwards(id!)
  }, [])

  return (
    <section>
      {/*Нет нормального ID в аргументах, поэтому шакалю так*/}
      {awards.isLoading
        ? <Loader/>
        :
        <>
          <List
            items={getLimitedItems(awards.list, page, limit)}
            placeholder="Номинации отсутствуют"
            className={styles.list}
            renderItem={(award) =>
              <AwardItem award={award} key={award.name + award.nominationName + award.year}/>
            }
          />
          <Pagination
            totalPages={getTotalPages(awards.list.length, limit)}
            page={page}
            setPage={(page) => setPage(page)}
            className={styles.commentsSection__pagination}
          />
        </>
      }

      <h2>{awards.isError}</h2>
    </section>
  );
});

export default AwardsMovie;