import { ISessionAction } from "./types";

const INITIAL_STATE = {
  session: [{}],
};

const reducer = (state = INITIAL_STATE, action: ISessionAction) => {
  switch (action.type) {
    case "GET_SESSIONS":
      return {
        ...state,
        loading: true,
      };
    case "GET_SESSIONS_SUCCESS":
      return {
        ...state,
        loading: false,
        session: action.payload.data,
      };
    case "GET_SESSIONS_FAIL":
      return {
        ...state,
        loading: false,
      };
    case "CREATE_SESSION":
      return {
        ...state,
        loading: true,
      };
    case "CREATE_SESSION_SUCCESS":
      return {
        ...state,
        loading: false,
      };
    case "CREATE_SESSION_FAIL":
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
