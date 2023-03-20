import { observer } from "mobx-react-lite";
import { FC, useContext, useEffect, useState } from "react";
import "../../../assets/styles/ReactSelect.scss";
import CommentItem from "../../../components/CommentItem/CommentItem";

import List from "../../../components/List/List";
import Pagination from "../../../components/Pagination/Pagination";
import LoadingWrapper from "../../../components/Wrappers/LoadingWrapper/LoadingWrapper";
import { Context } from "../../../index";

import { getLimitedItems, getTotalPages } from "../../../utils/pagination";

import styles from "./CommentsSection.module.scss";

import { CommentsSectionProps } from "./CommentsSectionProps";
import CommentsSelects from "./CommentsSelects/CommentsSelects";


const CommentsSection: FC<CommentsSectionProps> = observer(({ id }) => {
  const { commentsStore } = useContext(Context);

  const [ page, setPage ] = useState(1);
  const limit = 3;

  useEffect(() => {
    commentsStore.fetchComments(id!);
  }, [ commentsStore.order ]);

  return (
    <section className={styles.commentsSection}>
      <CommentsSelects setPage={setPage}/>

      <LoadingWrapper isLoading={commentsStore.isLoading}>
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
      </LoadingWrapper>

      {commentsStore.isError && <h2 className={styles.commentsSection__error}>{commentsStore.isError}</h2>}
    </section>
  );
});

export default CommentsSection;