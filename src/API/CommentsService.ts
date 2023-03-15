import { Axios } from "./movieService";
import { IComment, TItems } from "../models/movieModels";


export default class CommentsService {
  static async commentsById(id: number | string) {
    return await Axios.get<TItems<IComment>>("films/" + id + "/reviews")
  }
}
