import {
  CREATE_SESSION,
  POST_NEW_SESSION_URL,
  GET_SESSIONS,
  GET_SESSIONS_URL,
  ISession,
} from "./types";

export const getSessions = () => {
  return {
    type: GET_SESSIONS,
    payload: {
      request: {
        method: "GET",
        url: GET_SESSIONS_URL,
      },
    },
  };
};

export const createSession = (data: any) => {
  return {
    type: CREATE_SESSION,
    payload: {
      request: {
        method: "POST",
        url: POST_NEW_SESSION_URL,
        data,
      },
    },
  };
};
