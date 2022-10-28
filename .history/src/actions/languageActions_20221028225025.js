import { SET_AR_LANGUAGE, SET_EN_LANGUAGE, UPDATE_LANGUAGE } from "../constants/languageConstants";

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

export const updateLang = (e) => async (dispatch) => {
    dispatch({
        type: UPDATE_LANGUAGE,
        payload: e.target.value
    });
};