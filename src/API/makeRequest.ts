import { APIResponse, TMakeRequestParams } from "../models/API/IApi";
import axios from "axios";


export const makeRequest = <T>({
   url = "/",
   method = "GET",
   headers = {},
   params = {},
   data = {}
 }: TMakeRequestParams): APIResponse<T> => axios
    .request<T>({
      url,
      method,
      headers,
      params,
      data
    })
    .catch((errors) => {
      const responseErrors = errors.response?.data?.errors
      const status = errors?.response?.status as number

      return { errors: responseErrors, status }
    })
