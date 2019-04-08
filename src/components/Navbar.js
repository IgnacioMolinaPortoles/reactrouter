import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import SideNav from './SideNav';
export default class Navbar extends Component {
  render() {
    return (
      <div>
            <nav className={`navbar navbar-expand-sm ${this.props.nav}`}>
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link to="/" style={{fontSize:25}} className="nav-link font-weight-bold text-white">Y A N U</Link>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <SideNav/>
                    </li>
                </ul>
                </nav>
      </div>
    )
  }
}
