import React, { Component } from 'react';
import './App.css';
import Home from './container/Home';
import Details from './container/Details';
import MediaQuery from 'react-responsive';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {'pageHeight': window.innerHeight+'px'};
  }

  updateDimensions = () => {
     this.setState({'pageHeight': window.innerHeight+'px'});
  }

  componentWillMount(){
    this.updateDimensions();
  }

  render() {
    const largeScreen = (<div className="full-page">
                          <div className="left-pane">
                            <Home pageHeight={this.state.pageHeight}/>
                          </div>
                          <div className="right-pane">
                            <Details pageHeight={this.state.pageHeight}/> 
                          </div>
                        </div>);
    const smallScreen = (<div className="full-page">
                          <Home pageHeight={this.state.pageHeight}/>
                          <Details pageHeight={this.state.pageHeight}/> 
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

  componentDidMount(){
     window.addEventListener("resize", this.updateDimensions);
  }

  componentWillMount(){
    window.removeEventListener("resize", this.updateDimensions);
  }
}

export default App;
