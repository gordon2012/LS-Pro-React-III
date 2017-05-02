import React, {Component} from 'react';
import styled from 'styled-components';

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: props.show
        };
    }

    render() {
        const Overlay = styled.div`
            position: fixed;
            background: rgba(0,0,0,0.6);
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 5

            display: flex;
            justify-content: center;
            align-items: center;
        `;

        const Modal = styled.div`
            flex: 0 1 80vw;
            background: white;
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
