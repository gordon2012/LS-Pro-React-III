import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';

import Post from './components/Post';
import MyModal from './components/MyModal';

export default class App extends Component {  
  constructor(props) {
    super(props);

    this.state = {
      modal: -1,
      posts: props.posts
    };
    
    this._handleModal = this._handleModal.bind(this);
    this._loadPosts = this._loadPosts.bind(this);
  }

  _handleModal(index) {
    this.setState({modal: index});
  }

  _loadPosts(num) {
    const rng = (min,max) => Math.floor(Math.random() * (max - min + 1)) + min;

    let newPosts = [];
    for(let i = 0; i < num; i++) {
        newPosts.push({
            title: 'Good Stuff',
            url: `http://lorempixel.com/${rng(2,8)}00/${rng(2,8)}00`,
            hearts: rng(400, 9000),
            comments: rng(5, 300)
        });
    }

    this.setState({
        posts: this.state.posts.concat(newPosts)
    });
  }

  render() {
    const modal = this.state.modal;    
    return (
      <div className="App">
        { modal > -1 && <MyModal show={modal !== -1}>
          <Post close={ ()=> {this._handleModal(-1); }} index={modal} post={this.state.posts[modal]}/>
        </MyModal>}
        <Header />
        <Body {...this.props} posts={this.state.posts} handleModal={this._handleModal} loadPosts={this._loadPosts}/>
        <Footer />
      </div>
    );
  }
}
