import { AxiosResponse } from "axios";
import { movOrders, movTypes, TItems } from "../../models/commonModels";
import { IMovieShort } from "../../models/movieModels";


export interface IMoviesStore {
  _loading: boolean;
  _error: string | null;
  _order: movOrders;
  _type: movTypes;
  _page: number;

  // gets
  get isLoading(): boolean;

  get isError(): string | null;

  get order(): movOrders;

  get type(): movTypes;

  get page(): number;


  // sets
  setLoading(loading: boolean): void;

  setError(error: string | null): void;

  setOrder(order: movOrders): void;

  setType(type: movTypes): void;

  setPage(page: number): void;

  // async
  getMovies(): Promise<AxiosResponse<TItems<IMovieShort>, any> | undefined>;
}