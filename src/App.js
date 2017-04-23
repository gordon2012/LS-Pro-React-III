import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';

import 'bulma/css/bulma.css';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body {...this.props}/>
        <Footer />
      </div>
    );
  }
}
