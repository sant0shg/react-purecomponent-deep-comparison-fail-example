import React, { Component } from 'react';
import { render } from 'react-dom';
import Demo1 from './Demo1';
import Demo2 from './Demo2';
import './style.css';

class App extends Component {

  render(){
    return(
      <div>
        <Demo1/>
        <Demo2/>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
