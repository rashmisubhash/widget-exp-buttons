import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const div = document.currentScript.parentElement;

// Inject our React App into each class
  ReactDOM.render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>,
      div
  );

// reportWebVitals();
