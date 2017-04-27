import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css';
import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'



const initialProps = {
    user: {
      name: 'Simon',
      pic: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/303256/simon_bio.jpg',
      bio: 'Italian greyhound, insatiable adventurer, avid wrestler, faithful familiar.'
    },
    posts: [
        {
          title: 'Nap Time',
          url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/303256/20170315_074622.jpg',
          hearts: 5,
          comments: 3
        },
        {
          title: 'My Favorite Sky',
          url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/303256/20170131_165348.jpg',
          hearts: 2,
          comments: 3
        },
        {
          title: 'You Want My Toy',
          url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/303256/20161206_163059.jpg',
          hearts: 5,
          comments: 1
        },
        {
          title: 'Wrestle!',
          url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/303256/20161130_220314.jpg',
          hearts: 2,
          comments: 13
        },
        {
          title: 'Just Chillin\'',
          url: 'http://lorempixel.com/400/500',
          hearts: 17,
          comments: 6
        },
        {
          title: 'Good Stuff',
          url: 'http://lorempixel.com/500/600',
          hearts: 27,
          comments: 16
        },

    ]
};

ReactDOM.render(
  React.createElement(App, initialProps, null), document.getElementById('root')
);
