import React, { Component } from 'react';

import './App.css';
import AddProject from './component/projects/AddProject'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddProject></AddProject>
      </div>
    );
  }
}

export default App;
