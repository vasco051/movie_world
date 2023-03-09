import { FC } from "react";
import { CommentItemProps } from "./CommentItemProps";
import { parseDate } from "../../utils/comment";
import styles from "./CommentItem.module.scss"


const CommentItem: FC<CommentItemProps> = ({ comment }) => {
  return (
    <div className={styles.comment}>
      <h4 className={styles.comment__title}>{comment.title}</h4>
      <div className={styles.comment__info}>
        <p>От: {comment?.author}</p>
        <p>Когда: {parseDate(comment.date).join(" в ")}</p>
      </div>

      <p className={styles.comment__description}>{comment?.description}</p>
    </div>
  );
};

export default CommentItem;