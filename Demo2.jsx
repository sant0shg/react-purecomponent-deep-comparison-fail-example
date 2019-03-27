import React, { Component } from 'react';
import CounterComponent from './CounterComponent';
import CounterPureComponent from './CounterPureComponent';
import './style.css';

class Demo2 extends Component {
  state = {
    counter: 0
  }
 
  handleClick = () => {
    const { counter } = this.state;
    counter = counter + 1;
    console.log("counter", counter)
    this.setState({
      counter: counter
    })
  }

  render(){
    const { counter } = this.state;
    return(
      <React.Fragment>
      <h1>Demo 2</h1>
      <button onClick={this.handleClick}>Click here to update number</button>
      <div className="app">
        <CounterComponent number={counter}/>
        <CounterPureComponent number={counter}/>
      </div>
      </React.Fragment>
    )
  }
}

export default Demo2;
