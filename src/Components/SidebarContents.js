import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import { ViewMatchesConn } from "./Layout/ViewMatches";
import { ManageData } from "./Layout/ManageData";
import { HomeCom } from "./Layout/Home";
import { Settings } from "./Layout/Settings";
import { Compare } from "./Layout/Compare.js";
import { Export } from "./Layout/Export.js";
import { Rankings } from "./Layout/Rankings.js";
import { Picklist } from './Layout/Picklist';

export class SidebarContents extends Component {
  render() {
    return (
      <Col sm={10}>
        <Tab.Content>
          <Tab.Pane eventKey="1">
            <HomeCom data={this.props.data}/>
          </Tab.Pane>
          <Tab.Pane eventKey="2">
            <ManageData data={this.props.data}/>
          </Tab.Pane>
          <Tab.Pane eventKey="3">
            <ViewMatchesConn/>
          </Tab.Pane>
          <Tab.Pane eventKey="4">
            <Compare data={this.props.data}/>
          </Tab.Pane>
          <Tab.Pane eventKey="5">
            <Export />
          </Tab.Pane>
          <Tab.Pane eventKey="6">
            <Rankings data={this.props.data}/>
          </Tab.Pane>
          <Tab.Pane eventKey="7">
            <Picklist data={this.props.data}/>
          </Tab.Pane>
          <Tab.Pane eventKey="8">
            <Settings data={this.props.data}/>
          </Tab.Pane>
        </Tab.Content>
      </Col>
    );
  }
}

export default SidebarContents;
