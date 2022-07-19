import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter, Route } from 'react-router-dom';
import WebFont from 'webfontloader';
import App from './App';

WebFont.load({
  google: {
    families: ['Roboto:300,400,700', 'sans-serif'],
  },
});

// ReactDOM.render(
//   <HashRouter>
//     <Route path="/" component={App} />
//   </HashRouter>,
//   document.getElementById('root'),
// );
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
);
