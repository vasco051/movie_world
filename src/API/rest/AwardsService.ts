import { TItems } from "../../models/commonModels";
import { IAward } from "../../models/movieModels";
import { Axios } from "./movieService";


export default class AwardsService {
  static async awardsById(id: number | string) {
    return await Axios.get<TItems<IAward>>("films/" + id + "/awards");
  }
}