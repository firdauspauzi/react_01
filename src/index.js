import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //import js file can ignore the js
import reportWebVitals from './reportWebVitals';

import Home from './containers/home/home';
import About from './containers/about/about';
import Portfolio from './containers/portfolio/portfolio';
import Header from './containers/header/header';
import Footer from './containers/footer/footer';



ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Home />
    <About />
    <Portfolio />
    <Footer />
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root') //the element root at public/index.html
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
