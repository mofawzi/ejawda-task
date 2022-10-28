import React from "react";
import { IntlProvider } from "react-intl";
import Arabic from "../../assets/language/Arabic.json";


const LanguageProvider = (props) => {
    // const htmlPage = document.querySelector("page");
    // const currentLanguage = useSelector(state => state.language);
    // const [messages, setMessages] = useState(Arabic ? Arabic : {});

    // if (currentLanguage.language.locale === "en") {
    //     // htmlPage.setAttribute("dir", "ltr");
    //     setMessages(English);
    // } else if (currentLanguage.language.locale === "ar") {
    //     // htmlPage.setAttribute("dir", "rtl");
    //     setMessages(Arabic);
    // }
    let messages = Arabic;

    return (
        <IntlProvider messages={messages} locale="ar" defaultLocale="en">
            {props.children}
        </IntlProvider>
    );
};

export default LanguageProvider;
