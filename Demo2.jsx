import React, { Component } from 'react';
import CounterComponent from './CounterComponent';
import CounterPureComponent from './CounterPureComponent';
import './style.css';

class Demo2 extends Component {
  state = {
    counter: {
      no: 0
    }
  }
 
  handleClick = () => {
    const { counter } = this.state;
    counter.no = counter.no + 1;
    this.setState({
      counter: counter
    })
  }

  render(){
    const { counter } = this.state;
    return(
      <React.Fragment>
      <h1>Demo 2</h1>
      <button onClick={this.handleClick} className="btn">Click here to update number</button>
      <div>
      <div className="wrapper">
        State - {JSON.stringify(counter)}
        <div className="app">
          <CounterComponent number={counter}/>
          <CounterPureComponent number={counter}/>
        </div>
        </div>
      </div>
      </React.Fragment>
    )
  }
}

export default Demo2;