import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import { useSelector } from 'react-redux';
import Arabic from "../../assets/language/Arabic.json";
import English from "../../assets/language/English.json";


const LanguageProvider = (props) => {
    const htmlPage = document.getElementById("page");
    const currentLanguage = useSelector(state => state.language);
    const [messages, setMessages] = useState(Arabic);

    if (currentLanguage.locale === "en") {
        htmlPage.setAttribute("dir", "ltr");
        setMessages(English);
    } else if (currentLanguage.locale === "ar") {
        htmlPage.setAttribute("dir", "rtl");
        setMessages(Arabic);
    }

    return (
        <IntlProvider messages={messages} locale={currentLanguage.locale} defaultLocale="en">
            {props.children}
        </IntlProvider>
    );
};

export default LanguageProvider;
