import { createStore, applyMiddleware, compose } from "redux";
import axios from "axios";
import { multiClientMiddleware } from "redux-axios-middleware";
import rootReducer from "./rootReducer";

const client = {
  default: {
    client: axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URL,
      responseType: "json",
    }),
  },
};

const axiosOptions = {
  returnRejectedPromiseOnError: true,
  interceptors: {
    request: [
      ({}, config: any) => {
        return config;
      },
    ],
    response: [
      {
        success: ({}, response: any) => {
          return response;
        },
        error: ({}, error: any) => {
          return Promise.reject(error);
        },
      },
    ],
  },
};
const tools = [applyMiddleware(multiClientMiddleware(client, axiosOptions))];
if (
  //@ts-ignore,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  //@ts-ignore,
  window.__REDUX_DEVTOOLS_EXTENSION__()
) {
  //@ts-ignore,
  tools.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}
const store = createStore(rootReducer, compose(...tools));

export default store;
