import React from "react";
import { IntlProvider } from "react-intl";
import { useDispatch, useSelector } from 'react-redux';
import { setArLang, setEnLang } from "../../actions/languageActions";
import Arabic from "../../assets/language/Arabic.json";
import English from "../../assets/language/English.json";


const LanguageProvider = (props) => {
    // const htmlPage = document.getElementById("page");
    const currentLanguage = useSelector(state => state.language);
    const dispatch = useDispatch();
    const { language } = currentLanguage;
    let messages;

    if (language.locale === "en") {
        //     htmlPage.setAttribute("dir", "ltr");
        messages = English;
        dispatch(setEnLang());
    } else if (language.locale === "ar") {
        //     htmlPage.setAttribute("dir", "rtl");
        messages = Arabic;
        dispatch(setArLang());
    }

    return (
        <IntlProvider messages={messages} locale={language.locale} defaultLocale="en">
            {props.children}
        </IntlProvider>
    );
};

export default LanguageProvider;
