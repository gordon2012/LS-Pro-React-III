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
        this._loadPosts = this._loadPosts.bind(this);
    }

    _handleScroll() {
        if( this.state.loadMore && document.body.offsetHeight - window.innerHeight - window.scrollY <= 0) {
            this._loadPosts(6);
        }
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

    _handleModal() {
        console.log('handle modal', this);

        

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
                        { this.state.posts.map((post,i) => <Card key={i} index={i} data={post} handleModal={this.props.handleModal} />) }
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
