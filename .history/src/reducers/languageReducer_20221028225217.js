import { SET_AR_LANGUAGE, SET_EN_LANGUAGE, UPDATE_LANGUAGE } from "../constants/languageConstants";

export const languageReducer = (
    state = {
        language: {
            locale: "ar"
        }
    },
    action
) => {
    switch (action.type) {
        case SET_AR_LANGUAGE:
            return {
                ...state,
                language: {
                    locale: "ar"
                }
            };
        case SET_EN_LANGUAGE:
            return {
                ...state,
                language: {
                    locale: "en"
                }
            };
        case UPDATE_LANGUAGE:
            return {
                ...state,
                language: {
                    locale: action.payload
                }
            };
        default:
            return state;
    }
};