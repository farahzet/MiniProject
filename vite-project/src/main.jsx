import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css'
import { BrowserRouter } from 'react-router-dom';


// Memasang kode Maze dengan benar
(function(w, d) {
  var s, t;
  var scriptElement = d.createElement('script');  // Buat elemen script baru
  scriptElement.src = 'https://cdn.maze.co/maze.js';
  scriptElement.async = true;
  
  s = d.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(scriptElement, s);
  
  t = d.createElement('noscript');
  t.innerHTML = '<img src="https://cdn.maze.co/track.gif" />';
  d.getElementsByTagName('body')[0].appendChild(t);
})(window, document);

// Render aplikasi React dengan benar
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
