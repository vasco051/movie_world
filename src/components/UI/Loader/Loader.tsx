import { FC } from "react";

import styles from "./Loader.module.scss"


const Loader: FC = () => {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loader;