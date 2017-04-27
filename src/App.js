import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';

import PostModal from './components/PostModal';
import {Modal} from 'react-bootstrap'

import './App.css';

export default class App extends Component {  
  constructor(props) {
    super(props);

    this.state = {modal: -1};
    
    this._handleModal = this._handleModal.bind(this);
  }

  _handleModal(index) {
    console.log('App handle modal', index);
    // this.modal._open()
    this.setState({modal: index});
  }
  
  render() {

    const props = this.state.modal == -1 ? {
      show: false
    } : {
      show: true,
      index: this.state.modal,
      post: this.props.posts[this.state.modal]
    }

    return (
      <div className="App">
        <PostModal {...props} close={ ()=> {this._handleModal(-1); }  }/>
        <Header />
        <Body {...this.props} handleModal={this._handleModal}/>
        <Footer />
      </div>
    );
  }
}
