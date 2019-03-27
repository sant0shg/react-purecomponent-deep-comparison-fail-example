import React, { Component} from 'react';
import './style.css';

class NumberComponent extends Component{
  counter = 0;
  render(){
    this.counter++;
      return(
        <div className="card">
          <div className="title">
            Normal Component rendered times
          </div>
          <div className="value">
            {this.counter}
          </div>
        </div>
      )
  }
}

export default NumberComponent;