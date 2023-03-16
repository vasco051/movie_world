import axios from "axios";
import { IUser } from "../models/userModels";


// TODO дописать interface
interface IData {
  token: string
}

export default class AuthService {
  static async authorization(user: IUser) {
    return await axios.post<IData>("https://back.traektoria.website/api/auth/login", user)
  }
}