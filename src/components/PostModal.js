import React, {Component} from 'react';
import {Row, Col, Button, Modal} from 'react-bootstrap';
import styled from 'styled-components';

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {open: false};
    }

    _open() {
        this.setState({open: true});
    }

    render() {
        const Col1 = styled(Col)``;
        const Col2 = styled(Col)`
            padding-top: 32px;
        `;

        const Image = styled.img`
            max-height: 50vh;
        `;

        return (
            <div>
                { this.props.show && <Modal show={true} dialogClassName="custom-modal" onHide={this.props.close}>
                    <Modal.Body>
                        <Row>
                            <Col1 xs={8}>
                                <Image src={this.props.post.url} alt=""/>
                            </Col1>
                            <Col2 xs={4}>
                                <p><strong>{this.props.post.title}</strong></p>
                                <Button onClick={this.props.close}>Close</Button>
                            </Col2>
                        </Row>
                    </Modal.Body>
                </Modal> }
            </div>
        );
    }
}
