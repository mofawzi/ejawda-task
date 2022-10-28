import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import Arabic from "../../assets/language/Arabic.json";
import English from "../../assets/language/English.json";

export const Context = React.createContext();
const currentLanguage = navigator.language;
let lang = Arabic;
currentLanguage === "en" ? (lang = English) : (lang = Arabic);

const LayoutDirectionControlller = (props) => {
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

export default LayoutDirectionControlller;
