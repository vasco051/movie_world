import clsx from "clsx";
import { FC } from "react";

import { ReactComponent as PlayIcon } from "../../../assets/images/button/Play.svg";

import styles from "./Button.module.scss";

import { IButton } from "./IButton";


const Button: FC<IButton> = ({
  children,
  className,
  variant,
  ...props
}) => {
  return (
    <button
      className={clsx(styles[variant], styles.button, className)}
      {...props}
    >
      {variant.includes("WithIcon") ? <PlayIcon/> : null}
      {children}
    </button>
  );
};

export default Button;
