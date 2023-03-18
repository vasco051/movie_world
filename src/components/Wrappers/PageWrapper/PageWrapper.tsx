import clsx from "clsx";
import { FC } from "react";
import styles from "./PageWrapper.module.scss";

import { PageWrapperProps } from "./PageWrapperProps";


const PageWrapper: FC<PageWrapperProps> = ({
  children,
  className
}) => {
  return (
    <main className={clsx("container", styles.pageWrapper, className)}>
      {children}
    </main>
  );
};

export default PageWrapper;
