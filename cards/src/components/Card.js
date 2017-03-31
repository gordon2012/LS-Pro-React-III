import React, { Component } from 'react';
import '../App.css';

export default class Card extends Component {
    render() {
        const {url} = this.props.data;
        return (    
            <div className="Card">
                <div className="Card-inner" style={{backgroundImage: `url(${url})`}}></div>
            </div>
        );
    }
}
 