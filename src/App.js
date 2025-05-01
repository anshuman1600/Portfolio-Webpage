import './App.css';
import React from 'react';
import { Fade } from "react-awesome-reveal";
import Header from './components/Header';
import Home from './components/Home';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Fade triggerOnce direction="up" cascade damping={0.1}>
          <Home />
          <Resume />
          <Portfolio />
          <Contact />
        </Fade>
      </main>
      <Footer />
    </div>
  );
}

export default App;
