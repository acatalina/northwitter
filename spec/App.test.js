import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/App';
const ROOT = 'https://protected-oasis-31937.herokuapp.com';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App ROOT={ROOT}/>, div);
});
