import './main.scss';
import './fonts/fonts.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

function component(text) {
  const element = document.createElement('h1');
  element.textContent = text;
  return element;
}

document.body.prepend(component('Проект собран на Webpack'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
