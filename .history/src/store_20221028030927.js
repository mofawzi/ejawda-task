import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { languageReducer as language } from "./reducers/languageReducer";

const initialState = {};

// const reducer = combineReducers({
//     language
// });

const middleware = [thunk];

const store = createStore(
    language,
    initialState,
    applyMiddleware(...middleware)
);

export default store;