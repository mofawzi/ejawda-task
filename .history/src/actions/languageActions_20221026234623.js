import { RESET_LANGUAGE, SET_AR_LANGUAGE, SET_EN_LANGUAGE } from "../constants/languageConstants";

export const setArLang = () => async (dispatch, getState) => {
    dispatch({
        type: SET_AR_LANGUAGE
    });
};

export const setEnLang = () => async (dispatch, getState) => {
    dispatch({
        type: SET_EN_LANGUAGE
    });
};

export const resetLang = () => async (dispatch, getState) => {
    dispatch({
        type: RESET_LANGUAGE
    });
};