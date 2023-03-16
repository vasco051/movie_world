import { IUser } from "../../models/userModels";


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

  authorization(user: IUser): any
}
