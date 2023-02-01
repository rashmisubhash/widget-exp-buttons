import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import reportWebVitals from './reportWebVitals';

// Find all widget divs
const widgetDivs = document.querySelectorAll('.konfhub-payement-button');

// Inject our React App into each class
widgetDivs.forEach(div => {
    ReactDOM.render(
      <React.StrictMode>
        <App symbol={div.dataset.symbol}/>
      </React.StrictMode>,
        div
    );
});

// reportWebVitals();
