import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";
import { Provider } from "react-redux";
import store from "./store";
import { Navigation } from "./Components/Navigation";
import { Sidebar } from "./Components/Sidebar";
import { SidebarContents } from "./Components/SidebarContents";
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ManageData from "./Components/Layout/ManageData";
import { HomeCom } from './Components/Layout/Home.js';
import { Picklist } from "./Components/Layout/Picklist";
import { Rankings } from "./Components/Layout/Rankings";
import { Settings } from "./Components/Layout/Settings";


let counter = 1;

export class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  state = {
    activePage: 0,
  };

  //set highest state to data and pass down through props
  getTeams = async () => {
    const response = await axios.get('https://jsonbox.io/box_5a9767899ab8ef9ab5d0/data/5fb0b24b9c0ec50017038679')
    this.setState({
      data: response
    })
    console.log(this.state.data)
  }


  //initial setstate FIX LATER THIS IS VERY JANK
  pullDataState = () => {
    if (counter === 1) {
      this.getTeams();
      console.log("this worked")
    }
    counter++;
  }

  render() {
    { this.pullDataState() }
    if (this.state.activePage == 0) {
      // this is temp lol
      return (
        <Provider store={store}>
          <div style={jumbotronStyle}>
            <Jumbotron
              className="container-full-bg"
              fluid
              style={jumbotronStyle}
            >
              <div style={bigSpacer}></div>
              <div style={center}>
                <h1 className="display-3" style={center}>
                  Nemesis Scouting
                </h1>
                <div style={smallSpacer}></div>
                <p>
                  <Button
                    variant="primary"
                    onClick={this.goToDashboard}
                    style={center}
                  >
                    Start Scouting
                  </Button>
                </p>
              </div>
            </Jumbotron>
          </div>
        </Provider>
      );
    } else {
      return (
        <Provider store={store}>
          <div>
            <Router>
              <Navigation />
              <Switch>
                <Route path="/" exact component={HomeCom}></Route>
                <Route path="/data" component={ManageData}></Route>
                <Route path="/picklist" component={Picklist}></Route>
                <Route path="/rankings" component={Rankings}></Route>
                <Route path="/settings" component={Settings}></Route>
              </Switch>
            </Router>
          </div>
        </Provider>
      );
    }
  }
  goToDashboard = () => {
    this.setState({
      activePage: 1,
    });
  };
}
const fixedPos = {
  position: "fixed",
  textAlign: "center",
};
const bigSpacer = {
  padding: "8%",
};
const smallSpacer = {
  padding: "1%",
};
const jumbotronStyle = {
  textAlign: "center",
  height: "100vh",
  color: "white",
  backgroundColor: "black",
  backgroundImage:
    "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.8)),url(https://source.unsplash.com/collection/8536824/1600x900)",
};
const center = {
  margin: "auto",
};
export default App;
