import { FC, useState } from "react";
import { ReactComponent as IDislike } from "../../assets/images/icon/dislike.svg";

import { ReactComponent as ILike } from "../../assets/images/icon/like.svg";

import { getSliceText, parseDate } from "../../utils/comment";

import styles from "./CommentItem.module.scss";

import { CommentItemProps } from "./CommentItemProps";


const CommentItem: FC<CommentItemProps> = ({ comment }) => {
  const [ isOpen, setIsOpen ] = useState<boolean>(false);
  const countSymbol = 600;

  return (
    <div className={styles.comment}>
      <h4 className={styles.comment__title}>{comment.title}</h4>
      <div className={styles.comment__info}>
        <p>От: <strong>{comment?.author}</strong></p>
        <p>Когда: {parseDate(comment.date).join(" в ")}</p>
      </div>


      {/*TODO сделать адекватнее*/}
      <p className={styles.comment__description}>
        {comment.description && comment.description.length <= countSymbol
          ?
          comment.description
          :
          <>
            {isOpen
              ? comment.description
              : getSliceText(comment.description, countSymbol)
            }

            <button onClick={() => setIsOpen(prev => !prev)} className={styles.comment__openButton}>
              {isOpen ? "Свернуть" : "Читать дальше"}
            </button>
          </>
        }
      </p>


      <div className={styles.comment__ratingBox}>
        <div className={styles.comment__ratingItem}>
          <ILike className={styles.comment__positive}/>
          <span>{comment.positiveRating}</span>
        </div>

        <div className={styles.comment__ratingItem}>
          <IDislike className={styles.comment__negative}/>
          <span>{comment.negativeRating}</span>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;