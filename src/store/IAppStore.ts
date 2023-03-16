import { ICommentsStore } from "./commentsStore/ICommentsStore";
import { IAwardsStore } from "./awardsStore/IAwardsStore";
import { IAuthStore } from "./authStore/IAuthStore";


export interface IAppStore {
  comments: ICommentsStore
  awards: IAwardsStore
  auth: IAuthStore
}
