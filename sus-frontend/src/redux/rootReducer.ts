import { combineReducers } from "redux";
import sessionReducer from "./session/reducers";

const appReducer = combineReducers({
  session: sessionReducer,
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};
export default rootReducer;
