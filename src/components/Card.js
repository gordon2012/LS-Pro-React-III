import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

export default class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hover: false
        };

        this._handleHover = this._handleHover.bind(this);
    }

    _handleHover() {
        console.log('hover');
        this.setState({
            hover: !this.state.hover
        });
    }

    render() {
        const {url, hearts, comments} = this.props.data;

        const style = {
            wrap: {
                flexBasis: '33.33%',
                height: '0',
                paddingBottom: '33.33%',
                position: 'relative',
            },
            inner: {
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundImage: `url(${url})`,
                position: 'absolute',
                top: '8px',
                left: '8px',
                right: '8px',
                bottom: '8px'
            },
            span: {
                zIndex: 11,
                color: 'white'
            },
            overlay: {
                position: 'absolute',
                top: '8px',
                right: '8px',
                left: '8px',
                bottom: '8px',
                backgroundColor: 'rgba(0,0,0,0.5)',
            },
            caption: {
                border: '0px solid red',
                color: 'white',
                padding: '40% 0',
            },
            hide: {
                display: 'none'
            },
        };

        return (
            <div style={style.wrap} onMouseEnter={this._handleHover} onMouseLeave={this._handleHover}>
                <div style={style.inner}></div>
                <div style={this.state.hover ? style.overlay : style.hide }>
                    <div style={style.caption} className="columns">
                        <div className="column is-6 has-text-centered"><FontAwesome name="heart"/> &nbsp; {hearts}</div>
                        <div className="column is-6 has-text-centered"><FontAwesome name="comment"/> &nbsp; {comments}</div>
                    </div>
                </div>
            </div>
        );
    }
}
 