import React from "react";


export interface ILink {
  to: string;
  label: string;
  icon?: React.ComponentType;
}

export interface IRoute {
  path: string;
  element: React.ComponentType;
}
