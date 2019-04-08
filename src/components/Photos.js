import React, { Component } from 'react'

export default class Photos extends Component {
  render() {
    return (
      <div>
        <div className="container text-center ">
            <h1 className=" font-weight-bold">Yanuwu</h1>
            <h4 className="mb-5 lead">O simplemente Yane?</h4>
            <div className="row text-center">
                <div className="col-sm-4 ">
                <div className="thumbnail">
                    <img className="img-fluid" src="https://images.pexels.com/photos/1755243/pexels-photo-1755243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Paris"/>
                    <p><strong>Paris</strong></p>
                    <p>Yes, we built Paris</p>
                </div>
                </div>
                <div className="col-sm-4 ">
                <div className="thumbnail">
                    <img className="img-fluid" src="https://images.pexels.com/photos/1553961/pexels-photo-1553961.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="New York"/>
                    <p><strong>New York</strong></p>
                    <p>We built New York</p>
                </div>
                </div>
                <div className="col-sm-4">
                <div className="thumbnail">
                    <img className="img-fluid" src="https://images.pexels.com/photos/1022921/pexels-photo-1022921.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="San Francisco"/>
                    <p><strong>San Francisco</strong></p>
                    <p>Yes, San Fran is ours</p>
                </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
