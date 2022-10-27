import "bootstrap-icons/font/bootstrap-icons.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import App from './App';
import './custom-styling.scss';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider store={store}>
  //   <IntlProvider locale='en' defaultLocale="en">
  //     <App />
  //   </IntlProvider>
  // </Provider>
  <App />
);

