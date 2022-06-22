import './App.css';
import React from 'react';
import Header  from './components/Head/header';
import Home  from './components/hero/home';
import Features from './components/Features/features';
import Portfolio from './components/Portfolio/portfolio';
import Resume from './components/Resume/resume';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';


function App() {
  return (
    <>
    <Header/>
    <Home/>
    <Features/>
    <Resume/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </>
    
  );
}

export default App;
