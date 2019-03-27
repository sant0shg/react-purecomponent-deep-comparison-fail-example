import React, { Component} from 'react';
import './style.css';

class CounterComponent extends Component{
  
  render(){
      return(
        <div className="card">
          <div className="title">
            Normal Component - Prop value
          </div>
          <div className="value">
            {this.props.number}
          </div>
        </div>
      )
  }
}

export default CounterComponent;