import { ILogin } from "../../models/API/IApi";
import { IUser } from "../../models/userModels";
import { makeRequest } from "../makeRequest";


export default class AuthService {
  static async authorization(user: IUser) {
    return await makeRequest<ILogin>({
      url: "https://back.traektoria.website/api/auth/login",
      method: "post",
      data: user
    });
  }
}