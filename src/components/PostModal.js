import React, {Component} from 'react';
import {Button, Modal} from 'react-bootstrap';

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {open: false};
    }

    _open() {
        this.setState({open: true});
    }


    render() {

        // const {title, url} = this.props.post;

        return (
            <div>
                { this.props.show && <Modal show={true} dialogClassName="CustomModal" onHide={this.props.close}>
                    <Modal.Body>
                        <h2>{this.props.index}</h2>
                        <h3>{this.props.post.title}</h3>
                        <h4>{this.props.post.url}</h4>
                        <Button onClick={this.props.close}>Close</Button>
                    </Modal.Body>
                </Modal> }
            </div>
        );
    }
}
