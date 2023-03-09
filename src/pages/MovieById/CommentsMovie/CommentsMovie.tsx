import { FC, useEffect, useState } from "react";

import List from "../../../components/List/List";
import CommentItem from "../../../components/CommentItem/CommentItem";
import Loader from "../../../components/UI/Loader/Loader";

import { CommentsMovieProps } from "./CommentsMovieProps";
import { IComment } from "../../../models/movieModels";

import { MovieService } from "../../../API/movieService";
import { useFetching } from "../../../hooks/useFetching";

import styles from "./CommentsMovie.module.scss"


const CommentsMovie: FC<CommentsMovieProps> = ({ id }) => {
  const [ comments, setComments ] = useState<IComment[]>([])
  const [ fetchComments, isLoading, isError ] = useFetching(async () => {
    const response = await MovieService.commentsById(id)
    setComments(response)
  })

  useEffect(() => {
    fetchComments()
  }, [])

  return (
    <section>
      {isLoading
        ? <Loader/>
        :
        <List
          items={comments}
          className={styles.list}
          placeholder="Комментарии отсутствуют"
          renderItem={(comment) =>
            <CommentItem comment={comment} key={comment?.description}/>
          }
        />
      }
      {isError}
    </section>
  );
};

export default CommentsMovie;