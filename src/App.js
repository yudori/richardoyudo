import React, { Component } from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import './App.css';
import Home from './container/Home';
import Details from './container/Details';
import MediaQuery from 'react-responsive';


class App extends Component {
  render() {
    const largeScreen = (<div className="full-page">
                          <div className="left-pane">
                            <Home/>
                          </div>
                          <div className="right-pane">
                            <Details/> 
                          </div>
                        </div>);
    const smallScreen = (<div className="full-page">
                          <Home/>
                          <Details/> 
                        </div>);
    return (
      <div className="App">
        <MediaQuery minDeviceWidth={1224}>
          {largeScreen}
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1224}>
          {smallScreen}
        </MediaQuery>
      </div>
    );
  }
}

export default App;
