import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';

// import PostModal from './components/PostModal';
import Post from './components/Post';
import MyModal from './components/MyModal';
// import {Modal} from 'react-bootstrap'

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


    /*
    const props = this.state.modal === -1 ? {
      modal: {
        show: false
      },
      post: {}
    } : {
      modal : {
        show: true
      },
      post: {
        index: this.state.modal,
        post: this.props.posts[this.state.modal]
      }
    }
    */

    // const props = {
    //   index: this.state.modal,
    //   post: this.props.posts[this.state.modal]
    // }

    const modal = this.state.modal;    

    return (
      <div className="App">
        {/*<PostModal {...props} close={ ()=> {this._handleModal(-1); }}/>*/}
        { this.state.modal > -1 && <MyModal show={modal !== -1}>
          <Post close={ ()=> {this._handleModal(-1); }} index={modal} post={this.props.posts[modal]}/>
        </MyModal>}

        <Header />
        <Body {...this.props} handleModal={this._handleModal}/>
        <Footer />
      </div>
    );
  }
}
