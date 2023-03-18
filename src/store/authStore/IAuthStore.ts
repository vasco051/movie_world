import { AxiosResponse } from "axios";
import { APIError, ILogin } from "../../models/API/IApi";
import { IUser } from "../../models/userModels";


export interface IAuthStore {
  _isAuth: boolean;
  _isLoading: boolean;
  _isError: string | null;

  get isAuth(): boolean;

  get isLoading(): boolean;

  get isError(): string | null;

  setAuth(auth: boolean): void;

  setError(error: string | null): void;

  setLoading(value: boolean): void;

  authorization(user: IUser): Promise<APIError | AxiosResponse<ILogin, any>>;
}
