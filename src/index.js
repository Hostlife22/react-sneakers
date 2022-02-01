import 'macro-css';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter hashType="noslash">
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
