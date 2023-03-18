import React from "react";


export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactElement | string;
  variant:
    | "primary"
    | "secondary"
    | "secondaryWithIcon"
    | "outlined"
    | "outlinedWithIcon"
    | "outlinedCircle"
    | "outlinedCircleSmall";
}
