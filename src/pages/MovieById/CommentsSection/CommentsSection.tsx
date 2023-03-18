import { observer } from "mobx-react-lite";
import { FC, useContext, useEffect, useState } from "react";
import CommentItem from "../../../components/CommentItem/CommentItem";

import List from "../../../components/List/List";
import Pagination from "../../../components/Pagination/Pagination";
import Loader from "../../../components/UI/Loader/Loader";
import { Context } from "../../../index";

import { getLimitedItems, getTotalPages } from "../../../utils/pagination";

import styles from "./CommentsSection.module.scss";

import { CommentsSectionProps } from "./CommentsSectionProps";


const CommentsSection: FC<CommentsSectionProps> = observer(({ id }) => {
  const { commentsStore } = useContext(Context);

  const [ page, setPage ] = useState(1);
  const limit = 3;

  useEffect(() => {
    commentsStore.fetchComments(id!);
  }, []);

  return (
    <section className={styles.commentsSection}>
      {commentsStore.isLoading
        ? <Loader/>
        :
        <>
          <List
            items={getLimitedItems(commentsStore.list, page, limit)}
            className={styles.commentsSection__list}
            placeholder="Комментарии отсутствуют"
            renderItem={(comment) =>
              <CommentItem comment={comment} key={comment?.description}/>
            }
          />
          <Pagination
            totalPages={getTotalPages(commentsStore.list.length, limit)}
            page={page}
            setPage={(page) => setPage(page)}
            className={styles.commentsSection__pagination}
          />
        </>
      }

      {commentsStore.isError && <h2 className={styles.commentsSection__error}>{commentsStore.isError}</h2>}
    </section>
  );
});

export default CommentsSection;