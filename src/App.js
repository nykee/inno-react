import React, { Component } from 'react';
import './App.css';
import './style/index.less'
import TopNav from '../src/componenets/TopNav'
import Footer from '../src/componenets/Footer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav></TopNav>
        <div>
            {this.props.children}
        </div>
        <Footer ></Footer>
      </div>
    );
  }
}

export default App;
