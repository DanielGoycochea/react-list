import React, { Component } from 'react';

import './App.css';
// import AddProject from './component/projects/AddProject'

import {Switch, Route} from 'react-router-dom'

import ProjectList from './component/projects/ProjectList'
import NavBar from './component/projects/NavBar'
import ProjectDetail from './component/projects/ProjectDetail'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <AddProject/> */}
        <NavBar/>
        <Switch>
          <Route exact path="/projects" component={ProjectList}/>
          <Route exact path="/projects/:id" component={ProjectDetail}/>
        </Switch>
        {/* <ProjectList/> */}
      </div>
    );
  }
}

export default App;
