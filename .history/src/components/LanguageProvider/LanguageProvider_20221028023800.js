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
        setMessages(English);
        htmlPage.setAttribute("dir", "ltr");
    } else if (currentLanguage.locale === "ar") {
        setMessages(Arabic);
        htmlPage.setAttribute("dir", "rtl");
    }

    return (
        <IntlProvider messages={messages} locale={currentLanguage.locale}>
            {props.children}
        </IntlProvider>
    );
};

export default LanguageProvider;
