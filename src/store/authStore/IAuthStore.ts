import { IUser } from "../../models/userModels";
import { APIError, ILogin } from "../../models/API/IApi";
import { AxiosResponse } from "axios";


export interface IAuthStore {
  _isAuth: boolean
  _isLoading: boolean
  _isError: string

  get isAuth(): boolean
  get isLoading(): boolean
  get isError(): string

  setAuth(auth: boolean): void
  setError(error: string): void
  setLoading(value: boolean): void

  // TODO переписать без any
  authorization(user: IUser): Promise<APIError | AxiosResponse<ILogin, any>>
}
