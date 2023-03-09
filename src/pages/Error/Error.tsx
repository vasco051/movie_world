import { FC } from "react";

import PageWrapper from "../../components/Wrappers/PageWrapper/PageWrapper";

import styles from "./Error.module.scss";


const Error: FC = () => {
  return (
    <PageWrapper>
      <h2 className={styles.error}>Упс...</h2>
      <h2 className={styles.error}>Видимо такого URL ещё не завезли(</h2>
    </PageWrapper>
  );
};

export default Error;