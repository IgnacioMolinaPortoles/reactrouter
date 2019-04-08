import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import Galeria from './pages/Galeria';
import Servicios from './pages/Servicios';
import Contacto from './pages/Contacto';

class App extends Component {
  render() {
    return (
      <div >
      <Router>
        <div>
          <Route exact path="/" component={Home}/> 
          <Route exact path="/about" component={About}/>
          <Route exact path="/galeria" component={Galeria}/>
          <Route exact path="/servicios" component={Servicios}/>
          <Route exact path="/contacto" component={Contacto}/>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
