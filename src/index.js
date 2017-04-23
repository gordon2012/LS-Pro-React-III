import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const initialProps = {
    user: {
      name: 'Simon',
      pic: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/303256/simon_bio.jpg',
      bio: 'Italian greyhound, insatiable adventurer, avid wrestler, faithful familiar.'
    },
    posts: [
        { title: 'Nap Time', url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/303256/20170315_074622.jpg' },
        { title: 'My Favorite Sky', url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/303256/20170131_165348.jpg' },
        { title: 'You Want My Toy', url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/303256/20161206_163059.jpg' },
        { title: 'Wrestle!', url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/303256/20161130_220314.jpg' },
        { title: 'Just Chillin\'', url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/303256/20161005_145148.jpg' },
    ]
};

ReactDOM.render(
  React.createElement(App, initialProps, null),
  document.getElementById('root')
);
