import React, { Component } from 'react'
import Footer from './../components/Footer';
import Jumbotron from './../components/Jumbotron';
import Photos from './../components/Photos';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron titulo="Yane uwu" subtitulo="LALALALALALALALAL"/>
        <div>
        <Photos/>
        <Footer/>
        </div>
      </div>
    )
  }
}