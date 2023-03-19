import React from "react";


export interface LoadingWrapperProps {
  isLoading: boolean;
  children: React.ReactNode | React.ReactElement;
}