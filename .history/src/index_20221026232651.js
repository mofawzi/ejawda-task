import React from 'react';
import ReactDOM from 'react-dom/client';
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";
import App from './App';
import "./bootstrap.min.css";
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <IntlProvider locale='en' defaultLocale="en">
      <App />
    </IntlProvider>
  </Provider>,
);

reportWebVitals();
