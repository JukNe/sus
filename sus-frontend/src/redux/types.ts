import { ISessionInterface } from "./session/types";

export interface ISessionState {
  session: ISessionInterface[];
  loading: boolean;
}

export interface IAppState {
  session: ISessionInterface[];
  loading: boolean;
}
