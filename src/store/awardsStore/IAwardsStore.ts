import { ObservableMap } from "mobx";
import { IAward } from "../../models/movieModels";


export interface IAwardsStore {
  _awards: ObservableMap<number, IAward>;
  _isLoading: boolean;
  _isError: string | null;


  get list(): readonly IAward[];

  get isLoading(): boolean;

  get isError(): string | null;

  setLoading(value: boolean): void;

  setError(error: string | null): void;

  setAwards(comments: IAward[]): void;


  fetchAwards(id: string | number): void;
}