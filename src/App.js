import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { Provider } from "react-redux";
import store from "./store";
import { Navigation } from "./Components/Navigation";
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ManageData from "./Components/Layout/ManageData";
import { HomeCom } from './Components/Layout/Home.js';
import { Picklist } from "./Components/Layout/Picklist";
import { Rankings } from "./Components/Layout/Rankings";
import { Settings } from "./Components/Layout/Settings";
import Matches from "./Components/Matches";
import { Compare } from "./Components/Layout/Compare";
import MatchPlanning from "./Components/Layout/Canvas/MatchPlanning.jsx";


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

  getData = async () => {
    const response = await axios.get('https://jsonbox.io/box_5a9767899ab8ef9ab5d0/data/5fb0b24b9c0ec50017038679')
    try {
      this.setState({
        data: response.data
      });
    } catch(err){
      console.log('err')
    } 
    console.log(this.state.data)
  }

  pullDataState = () => {
    if(counter === 1){
      this.getData();
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
                <Route path="/matches" component={Matches}></Route>
                <Route path="/compare" component={Compare}></Route>
                <Route path="/matchPlanning" component={MatchPlanning}></Route>
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
