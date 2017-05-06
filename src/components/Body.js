import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import styled from 'styled-components';

import Bio from './Bio';
import Card from './Card';

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loadMore: false,
            posts: props.posts
        };

        this._handleScroll = this._handleScroll.bind(this);
        this._handleLoadMore = this._handleLoadMore.bind(this);
    }

    _handleScroll() {
        if( this.state.loadMore && document.body.offsetHeight - window.innerHeight - window.scrollY <= 0) {
            this.props.loadPosts(6);
        }
    }

    _handleLoadMore() {
        this.setState({
            loadMore: true
        });
    }

    componentDidMount() {
        window.addEventListener('scroll', this._handleScroll);
    }

    render() {
        const LoadMoreButton = styled(Button)`
            display: ${this.state.loadMore ? 'none' : 'inherit'};
        `;
        return (
            <div className="Body wrap">
                <div className="Body inner">
                    <Bio user={this.props.user} />
                    <div className="Body-container">
                        { this.props.posts.map((post,i) => <Card key={i} index={i} data={post} handleModal={this.props.handleModal} />) }
                    </div>
                    <div className="columns" style={{margin: '32px 0'}}>
                        <div className="column is-4 is-offset-4">
                            <LoadMoreButton bsStyle="primary" onClick={this._handleLoadMore}>
                                Load more
                            </LoadMoreButton>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
