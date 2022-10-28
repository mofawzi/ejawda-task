import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import Arabic from "../../assets/language/Arabic.json";


const LanguageProvider = (props) => {
    // const htmlPage = document.getElementById("page");
    // const currentLanguage = useSelector(state => state.language);
    const [messages, setMessages] = useState(Arabic);

    // if (currentLanguage.language.locale === "en") {
    //     htmlPage.setAttribute("dir", "ltr");
    //     setMessages(English);
    // } else if (currentLanguage.language.locale === "ar") {
    //     htmlPage.setAttribute("dir", "rtl");
    //     setMessages(Arabic);
    // }

    return (
        <IntlProvider messages={messages} locale="en" defaultLocale="en">
            {props.children}
        </IntlProvider>
    );
};

export default LanguageProvider;
