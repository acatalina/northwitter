import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './css/normalize.css';
import './css/index.css';

const ROOT = 'https://protected-oasis-31937.herokuapp.com';

ReactDOM.render(
  <App ROOT={ROOT} />,
  document.getElementById('root')
);
