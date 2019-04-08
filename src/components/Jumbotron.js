
import React, { Component } from 'react'
import './css/Jumbotron.css'
import Navbar from './Navbar';

export default class Jumbotron extends Component {
  render() {
    return (
      <div>
        
        <div style={{height:220}} className="jumbotron jumbotron-fluid">
        <Navbar nav="fixed-top"/>
        <div className="container text-center my-auto">
            <h1 className="display-3">{this.props.titulo}</h1>
            <p className="lead font-weight-bold">{this.props.subtitulo}</p>
        </div>
        </div>
      </div>
    )
  }
}
