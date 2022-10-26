import { combineReducers, createStore } from "redux";
import { languageReducer } from "./reducers/languageReducer";

const initialState = {};

const reducer = combineReducers({
    languageReducer
})

const store = createStore(
    reducer,
    initialState,
);