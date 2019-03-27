import React, { PureComponent } from 'react';
import './style.css';

class NumberPureComponent extends PureComponent{
  counter = 0;
  render(){
    this.counter++;
    return(
      <div className="card pure">
          <div className="title">
          Pure Component rendered times
          </div>
          <div className="value">
            {this.counter}
          </div>
        </div>
    )
  }
}

export default NumberPureComponent;