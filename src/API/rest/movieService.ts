import axios from "axios";
import { movOrders, TItems, Types } from "../../models/commonModels";
import { IMovieFull, IMovieShort } from "../../models/movieModels";
import { keyBD } from "../keyBD";


export const Axios = axios.create({
  baseURL: "https://kinopoiskapiunofficial.tech/api/v2.2/",
  headers: {
    "X-API-KEY": keyBD,
    "Content-Type": "application/json"
  }
});


export class MovieService {
  static async allMovies(page: number, order: movOrders, type: Types) {
    return await Axios.get<TItems<IMovieShort>>("films", {
      params: {
        page,
        order,
        type
      }
    });
  }

  static async movieById(id: number | string) {
    const response = await Axios.get<IMovieFull>("films/" + id);
    return response.data;
  }

  static async videosById(id: number | string) {
    const response = await Axios.get("films/" + id + "/videos");
    return response.data.items;
  }

  static async similarsById(id: number | string) {
    const response = await Axios.get("films/" + id + "/similars");
    return response.data.items;
  }
}