import { legacy_createStore, compose, combineReducers } from "redux";
import { loginReducer } from "./login_reducer/reducer.login";

const rootReducer = combineReducers({
  loginManager: loginReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(rootReducer, composeEnhancer());
