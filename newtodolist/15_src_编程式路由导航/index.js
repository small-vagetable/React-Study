import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//方法三
//使用hashRouter
// import {HashRouter} from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
     <App />
  </BrowserRouter>
  ,
  document.getElementById('root')
);