import React, { FC } from "react";
import Loader from "../../UI/Loader/Loader";
import { LoadingWrapperProps } from "./LoadingWrapperProps";


const LoadingWrapper: FC<LoadingWrapperProps> = ({
  isLoading,
  children
}) => {
  return (
    <>
      {isLoading
        ? <Loader/>
        : children
      }
    </>
  );
};

export default LoadingWrapper;