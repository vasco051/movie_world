export interface TItems<T> {
  items: T[];
  total: number;
}

export interface TSelectOption<T> {
  value: T;
  label: string;
}

export enum movOrders {
  "rating" = "RATING",
  "numValue" = "NUM_VOTE",
  "year" = "YEAR"
}

export enum Types {
  "film" = "FILM",
  "tvShow" = "TV_SHOW",
  "tvSeries" = "TV_SERIES",
  "miniSeries" = "MINI_SERIES",
  "all" = "ALL"
}

export enum comOrders {
  "dataASC" = "DATE_ASC",
  "dateDesc" = "DATE_DESC",
  "userPositiveRatingAsc" = "USER_POSITIVE_RATING_ASC",
  "userPositiveRatingDesc" = "USER_POSITIVE_RATING_DESC",
  "userNegativeRatingAsc" = "USER_NEGATIVE_RATING_ASC",
  "userNegativeRatingDesc" = "USER_NEGATIVE_RATING_DESC",
}