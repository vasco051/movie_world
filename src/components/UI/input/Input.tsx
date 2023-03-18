import clsx from "clsx";
import { FC } from "react";

import { IInput } from "./IInput";
import styles from "./IInput.module.scss";


const Input: FC<IInput> = ({
  className,
  ...props
}) => {
  return <input {...props} className={clsx(styles.input, className)} type="text"/>;
};

export default Input;
