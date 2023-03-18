import { observer } from "mobx-react-lite";
import { FC, useContext, useEffect, useState } from "react";

import AwardItem from "../../../components/AwardItem/AwardItem";
import List from "../../../components/List/List";
import Pagination from "../../../components/Pagination/Pagination";
import Loader from "../../../components/UI/Loader/Loader";
import { Context } from "../../../index";

import { getLimitedItems, getTotalPages } from "../../../utils/pagination";

import styles from "./AwardsMovie.module.scss";

import { AwardsMovieProps } from "./AwardsMovieProps";


const AwardsMovie: FC<AwardsMovieProps> = observer(({ id }) => {
  const { awardsStore } = useContext(Context);

  const [ page, setPage ] = useState(1);
  const limit = 5;

  useEffect(() => {
    awardsStore.fetchAwards(id!);
  }, []);

  return (
    <section>
      {/*Нет нормального ID в аргументах, поэтому шакалю так*/}
      {awardsStore.isLoading
        ? <Loader/>
        :
        <>
          <List
            items={getLimitedItems(awardsStore.list, page, limit)}
            placeholder="Номинации отсутствуют"
            className={styles.list}
            renderItem={(award) =>
              <AwardItem award={award} key={award.name + award.nominationName + award.year}/>
            }
          />
          <Pagination
            totalPages={getTotalPages(awardsStore.list.length, limit)}
            page={page}
            setPage={(page) => setPage(page)}
            className={styles.commentsSection__pagination}
          />
        </>
      }

      {awardsStore.isError && <h2>{awardsStore.isError}</h2>}
    </section>
  );
});

export default AwardsMovie;