import axios, { AxiosError } from "axios";
import { IAward, IComment, IMovieFull, IMovieShort, TItems } from "../models/movieModels";
import { keyBD } from "./keyBD";


export const Axios = axios.create({
  baseURL: "https://kinopoiskapiunofficial.tech/api/v2.2/",
  headers: {
    "X-API-KEY": keyBD,
    "Content-Type": "application/json"
  }
})


export class MovieService {
  static async allMovies() {
    const response = await Axios.get<TItems<IMovieShort>>("films")
    return response.data.items
  }

  static async movieById(id: number | string) {
    const response = await Axios.get<IMovieFull>("films/" + id)
    return response.data
  }

  static async videosById(id: number | string) {
    const response = await Axios.get("films/" + id + "/videos")
    return response.data.items
  }
}