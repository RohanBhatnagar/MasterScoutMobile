import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import dScript from './drawingScript';
import Canvas from './Canvas';
import gameField from './gameField2020.png'

export class MatchPlanning extends Component {

    render() {
        return (
            <Container style={pushLeft}>
                <Canvas id="canvas">
                </Canvas>
                <img className="invisible" id="image" src={gameField} alt="Game Field"/>
                <script src={dScript}></script>
            </Container>
        );
    }
}
const pushLeft = {
    marginLeft: "0",
}

export default MatchPlanning;
