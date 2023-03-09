import { IUserStore } from "./userStore/IUserStore";


export interface IAppStore {
  user: IUserStore;
}
