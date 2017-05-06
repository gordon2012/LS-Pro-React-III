import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import styled from 'styled-components';

export default class extends Component {
    render() {
        const BrandText = styled.div`
            font-size: 16px;
        `;
        return (
            <div className="Header wrap">
                <nav className="nav inner">
                    <div className="nav-left">
                        <div className="nav-item" style={{padding: 0}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M146.729,390.171c0.564,0.07,1.146,0.185,1.719,0.264h215.104c1.401-0.229,2.802-0.432,4.186-0.731  c10.98-2.335,19.951-11.492,22.102-22.534c0.22-1.207,0.396-2.406,0.59-3.604V148.434c-0.185-1.172-0.353-2.362-0.573-3.534  c-2.362-12.047-12.302-21.397-24.499-23.071c-0.511-0.062-0.996-0.176-1.498-0.264H148.139c-1.295,0.238-2.609,0.414-3.886,0.705  c-11.915,2.714-20.727,12.302-22.428,24.375c-0.07,0.502-0.176,1.005-0.255,1.507v215.712c0.247,1.357,0.44,2.741,0.749,4.098  C124.954,379.613,134.894,388.646,146.729,390.171z M314.123,154.348c0-6.089,4.829-10.945,10.892-10.954  c8.469-0.009,16.938,0,25.406,0c6.072,0.009,10.892,4.847,10.892,10.936c0,8.486,0,16.982,0,25.468  c0,5.702-4.635,10.584-10.328,10.725c-4.433,0.106-8.865,0.018-13.289,0.018v0.053c-4.08,0-8.169,0.009-12.249,0.009  c-5.023-0.026-9.13-2.776-10.654-7.253c-0.397-1.19-0.635-2.494-0.643-3.754C314.088,171.18,314.114,162.764,314.123,154.348z   M255.996,201.512c30.509-0.018,55.114,25.186,54.452,55.677c-0.643,29.584-25.265,53.906-55.704,53.254  c-29.258-0.626-53.659-24.781-53.228-55.272C201.931,225.492,226.174,201.495,255.996,201.512z M150.651,231.307v-0.723  c8.592,0,17.07,0,25.6,0c-6.662,22.789-4.847,44.75,6.512,65.662c7.632,14.038,18.559,24.922,32.474,32.721  c27.539,15.457,61.705,13.906,87.649-3.772c10.002-6.812,18.189-15.387,24.49-25.715s10.178-21.503,11.597-33.514  c1.419-12.011,0.308-23.794-3.313-35.373h25.662v0.828c0,39.727,0.009,79.48,0,119.215c0,5.772-4.926,10.681-10.707,10.681  c-63.097,0.009-126.186,0.009-189.284,0c-5.728,0-10.681-4.926-10.681-10.646C150.642,310.884,150.651,271.096,150.651,231.307z"/>
                            </svg>
                        </div>
                        <BrandText className="nav-item">|</BrandText>
                        <BrandText className="nav-item">Cards</BrandText>
                    </div>
                    <div className="nav-center">
                    </div>
                    <div className="nav-toggle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="nav-right nav-menu">
                        <div className="nav-item">
                            <div>
                                <Button className="get-app" bsStyle="success">Get the app</Button>
                                <Button className="web-app" bsStyle="danger">Web apps for life!</Button>
                            </div>
                        </div>
                        <div className="nav-item"><Button>Sign Up</Button></div>
                        <div className="nav-item"><Button>Log In</Button></div>
                    </div>
                </nav>
            </div>
        );
    }
}
