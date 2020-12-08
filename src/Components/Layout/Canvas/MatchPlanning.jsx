import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import dScript from './drawingScript';
import Canvas from './Canvas';
import Media from 'react-bootstrap/Media';

export class MatchPlanning extends Component {

    render() {
        return (
            <Container style={pushLeft}>
                <Canvas id="canvas">
                    <Media>
                        <img
                            src='../../../../public/gameField2020.png'
                            alt="Generic placeholder"
                        />
                    </Media>
                </Canvas>
                <script src={dScript}></script>
            </Container>
        );
    }
}

const pushLeft = {
    marginLeft: "0",
}

export default MatchPlanning;
