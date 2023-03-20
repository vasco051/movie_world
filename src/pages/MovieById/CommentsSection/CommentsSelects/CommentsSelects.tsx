import React, { FC, useContext } from "react";
import Select from "react-select";
import { commentsOrderOptions } from "../../../../assets/exportData/selectors";
import { Context } from "../../../../index";
import styles from "./CommentsSelects.module.scss";
import { CommentsSelectsProps } from "./CommentsSelectsProps";


const CommentsSelects: FC<CommentsSelectsProps> = ({ setPage }) => {
  const { commentsStore } = useContext(Context);

  return (
    <section className={styles.commentsSelects}>
      <p className={styles.commentsSelects__title}>Упорядочить</p>
      <Select
        options={commentsOrderOptions}
        onChange={newValue => {
          setPage(1);
          newValue && commentsStore.setOrder(newValue.value);
        }}
        defaultValue={commentsOrderOptions.find(v => v.value === commentsStore.order)}
        classNamePrefix="ReactSelect"
      />
    </section>
  );
};

export default CommentsSelects;