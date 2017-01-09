import React, { Component } from 'react';
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
        <MediaQuery minWidth={960}>
          {largeScreen}
        </MediaQuery>
        <MediaQuery maxWidth={960}>
          {smallScreen}
        </MediaQuery>
      </div>
    );
  }
}

export default App;
