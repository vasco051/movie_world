import { comOrders, TItems } from "../../models/commonModels";
import { IComment } from "../../models/movieModels";
import { Axios } from "./movieService";


export default class CommentsService {
  static async commentsById(id: number | string, order: comOrders) {
    return await Axios.get<TItems<IComment>>("films/" + id + "/reviews", {
      params: {
        order
      }
    });
  }
}
