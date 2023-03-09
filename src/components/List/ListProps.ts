import React from "react";


export interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  className?: string
  placeholder?: string
}
