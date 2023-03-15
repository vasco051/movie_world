import { IUserStore } from "./userStore/IUserStore";
import { ICommentsStore } from "./commentsStore/ICommentsStore";
import { IAwardsStore } from "./awardsStore/IAwardsStore";


export interface IAppStore {
  user: IUserStore;
  comments: ICommentsStore
  awards: IAwardsStore
}
