import { ObservableMap } from "mobx";
import { comOrders } from "../../models/commonModels";
import { IComment } from "../../models/movieModels";


export interface ICommentsStore {
  _comments: ObservableMap<number, IComment>;
  _isLoading: boolean;
  _isError: string | null;
  _order: comOrders;


  get list(): readonly IComment[];

  get isLoading(): boolean;

  get isError(): string | null;

  get order(): comOrders;


  setLoading(value: boolean): void;

  setError(error: string | null): void;

  setComments(comments: IComment[]): void;

  setOrder(order: comOrders): void;


  fetchComments(id: string | number): void;
}