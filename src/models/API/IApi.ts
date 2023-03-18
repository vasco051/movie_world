import { AxiosRequestConfig, AxiosResponse } from "axios";


export interface TMakeRequestParams extends AxiosRequestConfig {
  defaultUrl?: boolean;
}

export type APIResponse<T> = Promise<AxiosResponse<T> | APIError>

export interface APIError {
  errors: {
    [key: string]: string[]
  };
  status: number;
}

export interface ILogin {
  token: string;
}