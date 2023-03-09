import { FC } from "react";

import { PageWrapperProps } from "./PageWrapperProps";

import clsx from "clsx";
import styles from "./PageWrapper.module.scss";


const PageWrapper: FC<PageWrapperProps> = ({ children, className }) => {
  return (
    <main className={clsx("container", styles.pageWrapper, className)}>
      {children}
    </main>
  );
};

export default PageWrapper;
