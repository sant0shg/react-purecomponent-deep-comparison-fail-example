import React, { PureComponent } from 'react';
import './style.css';

class CounterPureComponent extends PureComponent{
  
  render(){
    return(
      <div className="card pure">
          <div className="title">
          Pure Component - Prop value
          </div>
          <div className="value">
            {this.props.number}
          </div>
        </div>
    )
  }
}

export default CounterPureComponent;