import React, { Component } from 'react';
import Bio from './Bio';
import Card from './Card';
import '../App.css';

export default class Body extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loadMore: false,
            posts: props.posts
        };

        this._handleScroll = this._handleScroll.bind(this);
    }

    _handleScroll() {
        if( this.state.loadMore && document.body.offsetHeight - window.innerHeight - window.scrollY <= 0) {
            this.props.loadPosts(6);
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this._handleScroll);
    }

    render() {
        return (
            <div className="Body wrap">
                <div className="Body inner">
                    <Bio user={this.props.user} />
                    <div className="Body-container">
                        { this.props.posts.map((post,i) => <Card key={i} index={i} data={post} handleModal={this.props.handleModal} />) }
                    </div>
                    <div className="columns" style={{margin: '32px 0'}}>
                        <div className="column is-4 is-offset-4">
                            <button style={ this.state.loadMore ? {display: 'none'} : {} } className="button is-info is-fullwidth" onClick={() => { this.setState({ loadMore: true }); }}>Load more</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
