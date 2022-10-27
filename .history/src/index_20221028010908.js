import "bootstrap-icons/font/bootstrap-icons.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import App from './App';
import './custom-styling.scss';
import './index.css';
import store from "./store";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={store}>
//     <IntlProvider locale='en' defaultLocale="en">
//       <App />
//     </IntlProvider>
//   </Provider>
// );

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider locale='en' defaultLocale="en">
      <App />
    </IntlProvider>
  </Provider>,
  document.getElementById("root")
);
