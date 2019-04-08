import React, { Component } from 'react'
import './css/SideNav.css';
import MenuIcon from './MenuIcon';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import About from './../pages/About';
import Galeria from './../pages/Galeria';
import Servicios from './../pages/Servicios';
import Contacto from './../pages/Contacto';

export default class SideNav extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         ancho: "",
      }
    }
    
    openNav = () => {
        this.setState({
            ancho: 250
        })
        document.getElementsByClassName("sidenav");
        }
    closeNav = () => {
        document.getElementsByClassName("sidenav");
        this.setState({
            ancho: 0
        })}
            
  render() {
    return (
      <div>
        <div id="mySidenav" className="sidenav" style={{width:this.state.ancho}}>
            <span className="closebtn" onClick={() => this.closeNav()}>&times;</span>
                <Link to="/about" >About</Link>
                <Link to="/galeria">Gallery</Link>
                <Link to="/servicios">Services</Link>
                <Link to="/contacto" >Contact</Link>
            </div>

            <span className="text-white" styles={{fontSize:'50px',cursor:'pointer'}} onClick={() => this.openNav()}><MenuIcon/></span>        
      </div>
    )
  }
}
