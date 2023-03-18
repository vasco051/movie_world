export interface ICountry {
  country: string;
}

export interface IGenre {
  genre: string;
}

export interface IPerson {
  kinopoiskId: number;
  nameRu: string | null;
  nameEn: string | null;
  sex: string;
  posterUrl: string;
  growth: number | null;
  birthday: string | null;
  age: number | null;
  birthplace: string | null;
  deathplace: string | null;
  profession: string | null;
}

export interface IMovieShort {
  kinopoiskId: number;
  nameRu: string | null;
  nameOriginal: string | null;
  posterUrl: string;
  posterUrlPreview: string;
  imdbId: string | null;
  ratingImdb: number | null;
  ratingKinopoisk: number | null;
  type: string | null;
  year: number | null;
  countries: ICountry[];
  genres: IGenre[];
}

export interface IMovieFull {
  kinopoiskId: number;
  nameRu: string | null;
  nameOriginal: string | null;
  posterUrl: string;
  posterUrlPreview: string;
  coverUrl: string | null;
  logoUrl: string | null;
  reviewsCount: number;
  ratingGoodReview: number | null;
  ratingGoodReviewVoteCount: number | null;
  ratingKinopoisk: number | null;
  ratingKinopoiskVoteCount: number | null;
  ratingImdb: number | null;
  ratingImdbVoteCount: number | null;
  ratingFilmCritics: number | null;
  ratingFilmCriticsVoteCount: number | null;
  ratingAwait: number | null;
  ratingAwaitCount: number | null;
  ratingRfCritics: number | null;
  ratingRfCriticsVoteCount: number | null;
  year: number | null;
  filmLength: number | null;
  slogan: string | null;
  description: string | null;
  shortDescription: string | null;
  editorAnnotation: string | null;
  isTicketsAvailable: boolean;

  // Todo enum [ FILMING, PRE_PRODUCTION, COMPLETED, ANNOUNCED, UNKNOWN, POST_PRODUCTION ]
  productionStatus: string | null;

  ratingAgeLimits: string | null;
  hasImax: boolean | null;
  has3D: boolean | null;
  lastSync: string;
  countries: ICountry[];
  genres: IGenre[];
  serial: boolean | null;
  shortFilm: boolean | null;
  completed: boolean | null;
}

export interface IAward {
  name: string;
  win: boolean;
  imageUrl: string | null;
  nominationName: string;
  year: number;
  persons: IPerson[];
}

export interface IComment {
  kinopoiskId: number;
  // TODO enum [ POSITIVE, NEGATIVE, NEUTRAL, UNKNOWN ]
  type: string;
  author: string;
  date: string;
  positiveRating: number;
  negativeRating: number;
  title: string | null;
  description: string;
}