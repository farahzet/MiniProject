import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css'
import { BrowserRouter } from 'react-router-dom';

(function(m,a,z,e){
  var s,t;o=a.createElement('script');o.src='https://cdn.maze.co/maze.js';o.async=true;
  s=a.getElementsByTagName('script')[0];s.parentNode.insertBefore(o,s);
  t=m.createElement('noscript');t.innerHTML='<img src="https://cdn.maze.co/track.gif" />';
  a.getElementsByTagName('body')[0].appendChild(t);
})(window,document);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>

    {/* <App/> */}
  </React.StrictMode>
  document.getElementById('root')
)
