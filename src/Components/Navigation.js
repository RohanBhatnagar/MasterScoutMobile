import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { searchTeam } from "../Actions/searchTeam";
import { Dropdown } from 'react-bootstrap';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import DropdownButton from 'react-bootstrap/DropdownButton';
import DoneIcon from '@material-ui/icons/Done';

export class NavigationRaw extends Component {
  searchHandle = (e) => {
    this.props.searchTeam(this._input.value);
    this._input.value = "";
    e.preventDefault();
  };
  render() {
    return (
      <Navbar
        bg="dark"
        variant="dark"
        className="shadow justify-content-between"
        style={positioning}
      >
        <Container fluid style={positioning}>
          <Row>
            <Col>
              <DropdownButton drop="right" variant="secondary" id="Dropdown">
                <Dropdown.Item>
                  <Link to="/">
                    Home
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/data">
                    Data
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/matches">
                    Matches
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/compare">
                    Compare
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/matchPlanning">
                    Match Planning
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/rankings">
                    Rankings
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/picklist">
                    Picklist
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/settings">
                    Settings
                  </Link>
                </Dropdown.Item>
              </DropdownButton>
            </Col>
            <Col sm={13}>
              <Form inline onSubmit={this.searchHandle}>
                <input
                  type="text"
                  className="mr-sm-2"
                  ref={(el) => {
                    this._input = el;
                  }}
                  placeholder="Search"
                  style={searchWidth}
                />
              </Form>
            </Col>
            <Col>
              <Button variant="outline-light" style={btnWidth}>
                <DoneIcon/>
              </Button>
            </Col>
          </Row>
        </Container>
      </Navbar>
    );
  }
}
const positioning = {
  position: "sticky",
  left: "0",
  top: "0",
  zIndex: "100",
};
const searchWidth = {
  width: "65vw",
  marginTop: "0.5vh",
};
const btnWidth = {
  width: "10vw",
  textJustify: "center",
  border: 'none', 
};
const mapStateToProps = (state) => {
  return {
    // nothing i think
  };
};
const mapDispatchToProps = (dispatch) => {
  // propName: (parameters) => dispatch(action)
  return {
    searchTeam: (teamNum) => dispatch(searchTeam(teamNum)),
  };
};

export const Navigation = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationRaw);
