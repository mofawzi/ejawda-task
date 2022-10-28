import { RESET_LANGUAGE, SET_AR_LANGUAGE, SET_EN_LANGUAGE } from "../constants/languageConstants";

export const languageReducer = (
    state = {
        language: {
            locale: "en"
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
        case RESET_LANGUAGE:
            return {
                ...state,
                language: {
                    locale: "en"
                }
            };

        default:
            return state;
    }
};