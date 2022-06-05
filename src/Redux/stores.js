import { createStore ,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userValue from "./reducers";

const rootReducer=combineReducers({userValue});

export const Store=createStore(rootReducer,applyMiddleware(thunk));