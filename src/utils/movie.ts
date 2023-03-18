import { ICountry, IGenre } from "../models/movieModels";


export const getCountries = (countries: ICountry[] | undefined | null) => {
  if (countries) {
    return countries.map(country => country.country).join("/");
  }
  return "Страны создатели неизвестны";
};

export const getGenres = (genres: IGenre[] | undefined | null) => {
  if (genres) {
    return genres.map(genre => genre.genre).join("/");
  }
  return "Категории неизвестны";
};

export const getAgeLimit = (limit: string | undefined | null) => {
  if (limit) {
    return limit.split("age").join("") + "+";
  }
  return "Ограничения по возрасту неизвестны";
};