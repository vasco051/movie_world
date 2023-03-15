import { FC, useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

import List from "../../../components/List/List";
import CommentItem from "../../../components/CommentItem/CommentItem";
import Loader from "../../../components/UI/Loader/Loader";
import Pagination from "../../../components/Pagination/Pagination";

import { CommentsSectionProps } from "./CommentsSectionProps";

import { getLimitedItems, getTotalPages } from "../../../utils/pagination";
import { Context } from "../../../index";

import styles from "./CommentsSection.module.scss"


const CommentsSection: FC<CommentsSectionProps> = observer(({ id }) => {
  const { comments } = useContext(Context)

  const [ page, setPage ] = useState(1)
  const limit = 3

  useEffect(() => {
    comments.fetchComments(id!)
  }, [])

  return (
    <section className={styles.commentsSection}>
      {comments.isLoading
        ? <Loader/>
        :
        <>
          <List
            items={getLimitedItems(comments.list, page, limit)}
            className={styles.commentsSection__list}
            placeholder="Комментарии отсутствуют"
            renderItem={(comment) =>
              <CommentItem comment={comment} key={comment?.description}/>
            }
          />
          <Pagination
            totalPages={getTotalPages(comments.list.length, limit)}
            page={page}
            setPage={(page) => setPage(page)}
            className={styles.commentsSection__pagination}
          />
        </>
      }

      <h2 className={styles.commentsSection__error}>{comments.isError}</h2>
    </section>
  );
});

export default CommentsSection;