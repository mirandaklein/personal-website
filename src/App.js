import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import watercolor from './images/watercolor.jpg';
import Miranda from './images/miranda.jpg';
import logo from './images/logo2.png';
import './App.css';
import Bio from './components/bio.js';
import Nav from './components/nav.js';
import Contact from './components/contact.js';
import Projects from './components/projects';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header>
          <img src={logo} className="App-header" alt="logo" />
        </header>
          <Nav />
          <Route exact path="/" render={() => (
             <Bio 
                name="Miranda Klein"
                photo= {Miranda}
             />
            )}/>

          <Route path="/projects" render={()=>(
            <Projects
            />
        )}/>

           <Route path="/contact" render={()=> (
            <Contact
              photo= {Miranda}
             />
         )}/> 
      </div>
    );
  }
}

export default App;
