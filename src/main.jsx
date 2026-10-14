import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPageContent from './components/MainPageContent';


function App(){

 return <>
  <Header />
  <MainPageContent />
  <Footer />

 </>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
