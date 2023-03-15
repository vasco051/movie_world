import { ObservableMap } from "mobx";
import { IAward} from "../../models/movieModels";


export interface IAwardsStore{
  _awards: ObservableMap<number, IAward>
  _isLoading: boolean
  _isError: string


  get list(): readonly IAward[]
  get isLoading(): boolean
  get isError(): string

  setLoading(value: boolean): void
  setError(error: string): void
  setAwards(comments: IAward[]): void


  fetchAwards(id: string | number) :void
}