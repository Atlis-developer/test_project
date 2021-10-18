import { combineReducers, createStore } from "redux";
import { contentReducer } from "./content-reducer"
import thunkMiddleware from "redux-thunk";
import { applyMiddleware } from "redux"

let reducers = combineReducers({
    contentPage: contentReducer,
});

export let store = createStore(reducers, applyMiddleware(thunkMiddleware));