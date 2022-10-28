import React from "react";
import { IntlProvider } from "react-intl";
import { useSelector } from 'react-redux';
import Arabic from "../../assets/language/Arabic.json";
import English from "../../assets/language/English.json";


const LanguageProvider = (props) => {
    // const htmlPage = document.getElementById("page");
    const currentLanguage = useSelector(state => state.language);
    const { language } = currentLanguage;
    let messages = Arabic;

    if (language.locale === "en") {
        //     htmlPage.setAttribute("dir", "ltr");
        messages = English;
    } else if (language.locale === "ar") {
        //     htmlPage.setAttribute("dir", "rtl");
        messages = Arabic;
    }

    return (
        <IntlProvider messages={messages} locale={language.locale} defaultLocale="en">
            {props.children}
        </IntlProvider>
    );
};

export default LanguageProvider;
