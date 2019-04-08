import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return (
      <div className="container-fluid">   
            <footer className="page-footer font-small bg-dark pt-4 text-white"> 
                <div className="container-fluid text-center text-sm-left">    
                    <div className="row">       
                        <div className="col-sm-6 mt-sm-0 mt-3">        
                        <h5 className="text-uppercase">Footer Content</h5>
                        <p>Here you can use rows and columns here to organize your footer content.</p>
                    </div>   
                    <div className="col-sm-3 mb-sm-0 mb-3 text-center">
                        <h5 className="text-uppercase">Links</h5>
                            <ul className="list-unstyled">
                            <li>
                                <a href="/#!">Link 1</a>
                            </li>
                            <li>
                                <a href="/#!">Link 2</a>
                            </li>
                            <li>
                                <a href="/#!">Link 3</a>
                            </li>
                            <li>
                                <a href="/#!">Link 4</a>
                            </li>
                            </ul>
                    </div>
                    </div>
                    </div>
                <div className="footer-copyright text-center py-3">© {new Date().getFullYear()} Copyright:
                <Link to="/"> Mi sitio</Link>
                </div>
            </footer>
      </div>
     
    )
  }
}
