import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { languageReducer } from "./reducers/languageReducer";

const initialState = {};

const reducer = combineReducers({
    language: languageReducer
});

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)
);

export default store;