import React, { Component } from 'react';
import { render } from 'react-dom';
import Demo2 from './Demo2';
import './style.css';

class App extends Component {

  render(){
    return(
      <div>
        <Demo2/>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
