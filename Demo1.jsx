import React, { Component } from 'react';
import NumberComponent from './NumberComponent';
import NumberPureComponent from './NumberPureComponent';
import './style.css';

class Demo1 extends Component {
  state = {
    number: 1
  }
  componentDidMount(){
    setTimeout(()=>{
      setInterval(()=>{
        this.setState({
          number: 1
        })
      }, 1000)
    },5000)
  }

  render(){
    const { number } = this.state;
    return(
      <React.Fragment>
      <h1>Demo 1</h1>
      <div className="app">
        <NumberComponent number={number}/>
        <NumberPureComponent number={number}/>
      </div>
      </React.Fragment>
    )
  }
}

export default Demo1