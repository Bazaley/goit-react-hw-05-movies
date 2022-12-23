import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'App';
import { GlobalStyles } from 'utils/GlobalStyled';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {/* <React.StrictMode> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <GlobalStyles />
    {/* </React.StrictMode> */}
  </>
);
//basename="/goit-react-hw-05-movies/"
