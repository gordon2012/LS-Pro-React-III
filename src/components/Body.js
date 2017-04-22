import React, { Component } from 'react';
import Card from './Card';
import '../App.css';

export default class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: 'Simon',
            posts: [
                { title: 'Nap Time', url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/303256/20170315_074622.jpg' },
                { title: 'My Favorite Sky', url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/303256/20170131_165348.jpg' },
                { title: 'You Want My Toy', url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/303256/20161206_163059.jpg' },
                { title: 'Wrestle!', url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/303256/20161130_220314.jpg' },
                { title: 'Just Chillin\'', url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/303256/20161005_145148.jpg' },
            ]
        };
    }

    render() {
        return (
            <div className="Body wrap">
                <div className="Body inner">

                    <div className="hero">
                        <div className="hero-body">
                            <p className="title">{ this.state.user }</p>
                            <p><strong>Simon</strong> is an italian greyhound, fanatical adventurer, and avid wrestler.</p>
                        </div>
                    </div>

                    <div className="Body-container">
                        { this.state.posts.map((post,i) => <Card key={i} data={post} />) }
                    </div>
                </div>
            </div>
        );
    }
}
