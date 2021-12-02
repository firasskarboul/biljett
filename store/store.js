import { createStore, combineReducers, applyMiddleware } from "redux";
import AuthReducers from "./reducers";
import thunk from "redux-thunk";

const rootReducers = combineReducers({
    // reducers
    AuthReducers
})

export const store = createStore(rootReducers, applyMiddleware(thunk))