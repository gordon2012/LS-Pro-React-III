import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import styled from 'styled-components';

export default class extends Component {
    render() {
        const {name, pic, bio} = this.props.user;

        const ImageStyle = {
            figure: {
                borderRadius: '0'
            },
            img: {
                borderRadius: '50%'
            },
        };
        const Image = <figure className="image is-128x128" style={ImageStyle.figure}>
            <img src={pic} alt={name} style={ImageStyle.img} />
        </figure>;

        const s = {
            w: {
                display: 'flex',
                flexDirection: 'column'
            },
            t: {
                display: 'flex'
            },
            b: {
                padding: '0 32px 8px',
            },
            l: {
                flexBasis: '33%',
                display: 'flex',
                justifyContent: 'center',
                padding: '8px',
            },
            r: {
                 padding: '16px 8px'
            }
        };

        const FollowButton = styled(Button)`
            margin-left: 16px;
        `;
        
        return (
            <div className="Bio">

                <div style={s.w}>
                    <div style={s.t}>
                        <div style={s.l}>
                            {Image}
                        </div>
                        <div style={s.r}>
                            <p className="title">{name}<FollowButton bsStyle="primary">Follow</FollowButton></p>
                            <p className="hide-small"><strong>{name}</strong> {bio}</p>
                        </div>
                    </div>
                    <div style={s.b}>
                        <p className="hide-not-small"><strong>{name}</strong> {bio}</p>
                    </div>
                </div>

                <nav className="level is-mobile">
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">posts</p>
                            <p className="title">15</p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">followers</p>
                            <p className="title">3</p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">following</p>
                            <p className="title">7</p>
                        </div>
                    </div>
                </nav>

            </div>
        );
    }
}
