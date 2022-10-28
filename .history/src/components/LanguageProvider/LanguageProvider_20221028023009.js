import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import { useSelector } from 'react-redux';
import Arabic from "../../assets/language/Arabic.json";
import English from "../../assets/language/English.json";


const LanguageProvider = (props) => {
    const currentLanguage = useSelector(state => state.language);
    let lang = Arabic;
    currentLanguage === "en" ? (lang = English) : (lang = Arabic);


    const [locale, setLocale] = useState(currentLanguage);
    const [messages, setMessages] = useState(lang);

    const changeLanguage = (e) => {
        const htmlPage = document.getElementById("page");
        const newLocale = e.target.value;
        setLocale(newLocale);
        if (newLocale === "en") {
            setMessages(English);
            htmlPage.setAttribute("dir", "ltr");
        } else {
            setMessages(Arabic);
            htmlPage.setAttribute("dir", "rtl");
        }
    };

    return (
        <Context.Provider value={{ locale, changeLanguage }}>
            <IntlProvider messages={messages} locale={locale}>
                {props.children}
            </IntlProvider>
        </Context.Provider>
    );
};

export default LanguageProvider;
