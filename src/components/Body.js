import React, { Component } from 'react';
import Bio from './Bio';
import Card from './Card';
import '../App.css';

export default class Body extends Component {
    render() {
        return (
            <div className="Body wrap">
                <div className="Body inner">
                    <Bio user={this.props.user} />
                    <div className="Body-container">
                        { this.props.posts.map((post,i) => <Card key={i} data={post} />) }
                    </div>
                </div>
            </div>
        );
    }
}
