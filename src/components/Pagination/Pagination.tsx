import clsx from "clsx";
import { FC } from "react";

import { getPagesArray } from "../../utils/pagination";

import styles from "./Pagination.module.scss";

import { PaginationProps } from "./PaginationProps";


const Pagination: FC<PaginationProps> = ({
  page,
  setPage,
  totalPages,
  className
}) => {
  const pagesArray = getPagesArray(totalPages);

  if (pagesArray.length <= 1) {
    return null;
  }

  return (
    <section className={clsx(styles.pagination, className)}>
      {pagesArray.map(p =>
        <button
          key={p}
          onClick={() => setPage(p)}
          className={clsx({
            [styles.pagination__button]: true,
            [styles.pagination__button_active]: page === p
          })}
        >{p}</button>
      )}
    </section>
  );
};

export default Pagination;