import { RESET_LANGUAGE, SET_AR_LANGUAGE, SET_EN_LANGUAGE } from "../constants/languageConstants";

export const setArLang = (e) => async (dispatch) => {
    dispatch({
        type: SET_AR_LANGUAGE,
        payload: e.target.value
    });
};

export const setEnLang = (e) => async (dispatch) => {
    dispatch({
        type: SET_EN_LANGUAGE,
        payload: e.target.value
    });
};

export const resetLang = () => async (dispatch) => {
    dispatch({
        type: RESET_LANGUAGE
    });
};