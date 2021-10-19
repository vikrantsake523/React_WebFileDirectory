import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

<script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/sticky.min.js" integrity="sha512-sWpXObBFGM42aj1IMnpgU4aUY5K3MYAmvR2QeVAo4zorR/IrNxIW1E9sAp95AKZ9TUGuxItlzCxZdLchz/rkoA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
