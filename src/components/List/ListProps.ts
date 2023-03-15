import React from "react";


export interface ListProps<T> {
  items: readonly T[];
  renderItem: (item: T) => React.ReactNode;
  className?: string
  placeholder?: string
}
