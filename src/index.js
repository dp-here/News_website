import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Topbar from './MyComponents/Topbar';
import NavBar from './MyComponents/NavBar';
import Footer from './MyComponents/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <BrowserRouter basename="">
    <Topbar />
    <NavBar style={{position:"fixed",top:"0"}} />   
    <App />
    <Footer />
    </BrowserRouter> 
    </>
);

