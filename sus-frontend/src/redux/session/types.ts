export interface ISessionInterface {
  id: number;
  createdAt: Date;
  rating: number;
}

export const GET_SESSIONS = "GET_SESSIONS";
export const GET_SESSIONS_SUCCESS = "GET_SESSIONS_SUCCESS";
export const GET_SESSIONS_FAIL = "GET_SESSIONS_FAIL";

export const CREATE_SESSION = "CREATE_SESSION";
export const CREATE_SESSION_SUCCESS = "CREATE_SESSION_SUCCESS";
export const CREATE_SESSION_FAIL = "CREATE_SESSION_FAIL";

export interface ISessionAction {
  type: TSession;
  payload?: any;
}

export interface ISession {
  rating: string;
}

export type TSession =
  | typeof GET_SESSIONS
  | typeof GET_SESSIONS_SUCCESS
  | typeof GET_SESSIONS_FAIL
  | typeof CREATE_SESSION
  | typeof CREATE_SESSION_SUCCESS
  | typeof CREATE_SESSION_FAIL;

export const GET_SESSIONS_URL =
  process.env.REACT_APP_BACKEND_URL + "session/findAll";
export const POST_NEW_SESSION_URL =
  process.env.REACT_APP_BACKEND_URL + "session/add";
