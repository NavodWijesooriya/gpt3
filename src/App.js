import React from 'react';

import { CTA , Brand , Navbar } from './components';
import { Header, Features, Footer, Blog, Possibility } from './containers'
import './App.css';

const App = () => {
  return (
    <div className="App">

      <div className="gradient__bg">
            <Navbar />
            <Header />
            </div>
    

    <Brand />
    <whatGPT3 />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />



    </div>
  )
}

export default App