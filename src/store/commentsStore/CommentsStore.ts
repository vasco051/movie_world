import axios from "axios";
import { makeAutoObservable, observable, ObservableMap, values } from "mobx";
import CommentsService from "../../API/rest/CommentsService";
import { comOrders } from "../../models/commonModels";
import { IComment } from "../../models/movieModels";
import { ICommentsStore } from "./ICommentsStore";


export default class CommentsStore implements ICommentsStore {
  _comments: ObservableMap<number, IComment>;
  _isLoading: boolean;
  _isError: string | null;
  _order: comOrders;


  constructor() {
    this._comments = observable.map<number, IComment>();
    this._isLoading = false;
    this._isError = null;
    this._order = comOrders.dateDesc;
    makeAutoObservable(this);
  }


  // gets
  get list() {
    return values(this._comments);
  }

  get isLoading() {
    return this._isLoading;
  }

  get isError() {
    return this._isError;
  }

  get order() {
    return this._order;
  }


  // sets
  setLoading(value: boolean) {
    this._isLoading = value;
  }

  setError(error: string | null) {
    this._isError = error;
  }

  setOrder(order: comOrders) {
    this._order = order;
  }

  setComments(comments: IComment[]) {
    comments.forEach(comment => {
      this._comments.set(comment.kinopoiskId, comment);
    });
  }


  async fetchComments(id: string | number) {
    try {
      this.setLoading(true);
      this._comments.clear();

      const response = await CommentsService.commentsById(id, this.order);

      this.setError(null);
      this.setComments(response.data.items);
    }
    catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        this.setError(error.message);
      }
    }
    finally {
      this.setLoading(false);
    }
  }
}