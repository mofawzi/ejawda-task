import { RESET_LANGUAGE, SET_AR_LANGUAGE, SET_EN_LANGUAGE } from "../constants/languageConstants";

export const languageReducer = (
    state = { language: 'EN' },
    action
) => {
    switch (action.type) {
        case SET_AR_LANGUAGE:
            return {
                ...state,
                language: 'AR'
            };
        case SET_EN_LANGUAGE:
            return {
                ...state,
                language: 'EN'
            };
        case RESET_LANGUAGE:
            return {
                ...state,
                language: 'EN'
            };
        default:
            return state;
    }
};