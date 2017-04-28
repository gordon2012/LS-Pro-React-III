import React, {Component} from 'react';
// import {Row, Col, Button, Modal} from 'react-bootstrap';
import styled from 'styled-components';

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: props.show
        };
        // console.log(props);

    }

    // _open() {
    //     this.setState({open: true});
    // }

    componentDidMount() {
        console.log(this.props);
    }


    render() {

        // const {title, url} = this.props.post;


        // const Col1 = styled(Col)`
        //     // background: chartreuse;
        // `;
        // const Col2 = styled(Col)`
        //     // background: magenta;
        //     padding-top: 32px;
        // `;

        // console.log(this.state);

        const Overlay = styled.div`
            position: fixed;
            background: rgba(0,0,0,0.6);
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 5

            display: inline-block;
            justify-content: center;
            // flex-direction: column;
        `;

        const Modal = styled.div`

            flex: 0 1 80vw;

            display: inline-block;

            // max-height: 50vh;

            // position: fixed;

            // height: 100px;

            background: white;

            // top: 15vh;
            // bottom: 15vh;

            // left: 15vw;
            // right: 15vw;

            z-index: 6;
        `;




        return this.state.show && (
            <div> 
                <Overlay>
                    <Modal>

                        {this.props.children}

                    </Modal>
                </Overlay>
            </div>
        );
    }
}
