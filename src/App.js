import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Miranda from './images/miranda.jpg';
import MirandaBanjo from './images/mirandabanjo2.jpg';
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
        <div className="App-header"><Link to="/">Miranda Klein</Link></div> 
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
              photo= {MirandaBanjo}
             />
         )}/> 
      </div>
    );
  }
}

export default App;
