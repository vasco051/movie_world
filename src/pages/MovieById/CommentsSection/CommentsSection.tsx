import { FC, useEffect, useState } from "react";

import List from "../../../components/List/List";
import CommentItem from "../../../components/CommentItem/CommentItem";
import Loader from "../../../components/UI/Loader/Loader";
import Pagination from "../../../components/Pagination/Pagination";

import { CommentsSectionProps } from "./CommentsSectionProps";
import { IComment } from "../../../models/movieModels";

import { MovieService } from "../../../API/movieService";
import { getLimitedItems, getTotalPages } from "../../../utils/pagination";
import { useFetching } from "../../../hooks/useFetching";

import styles from "./CommentsSection.module.scss"


const CommentsSection: FC<CommentsSectionProps> = ({ id }) => {
  const [ comments, setComments ] = useState<IComment[]>([])
  const [ limitedComments, setLimitedComments ] = useState<IComment[]>([])

  const [ page, setPage ] = useState(1)
  const [ limit, setLimit ] = useState(3)
  const [ totalPages, setTotalPages ] = useState(0)

  const [ fetchComments, isLoading, isError ] = useFetching(async () => {
    const response = await MovieService.commentsById(id)

    setComments(response)
    setLimitedComments(getLimitedItems(response, page, limit))
    setTotalPages(response.length)
  })

  useEffect(() => {
    fetchComments()
  }, [])

  useEffect(() => {
    setLimitedComments(getLimitedItems(comments, page, limit))
  }, [ page, totalPages ])


  return (
    <section className={styles.commentsSection}>
      {isLoading
        ? <Loader/>
        :
        <>
          <List
            items={limitedComments}
            className={styles.commentsSection__list}
            placeholder="Комментарии отсутствуют"
            renderItem={(comment) =>
              <CommentItem comment={comment} key={comment?.description}/>
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

      <h2 className={styles.commentsSection__error}>{isError}</h2>
    </section>
  );
};

export default CommentsSection;