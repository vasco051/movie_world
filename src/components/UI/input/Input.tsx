import { FC } from "react";
import { IInput } from "./IInput";
import clsx from "clsx";
import styles from "./IInput.module.scss";


const Input: FC<IInput> = ({ className, ...props }) => {
  return <input {...props} className={clsx(styles.input, className)} type="text"/>;
};

export default Input;
