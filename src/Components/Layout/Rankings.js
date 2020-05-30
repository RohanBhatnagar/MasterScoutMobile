import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import { RankRow } from "../RankRow.js";
import { connect } from "react-redux";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

export class RankingsRaw extends Component {
  state = {
    sortMethod: "Inner",
  };
  selectSortBy = (event) => {
    console.log(event.target.getAttribute("sort"));
    this.setState({
      sortMethod: event.target.getAttribute("sort"),
    });
  };
  getSortedTeams = (sortby) => {
    let sorted = this.props.dataReducer.teams;
    switch (sortby) {
      case "Inner":
        sorted.sort(
          (a, b) =>
            b.aggregated[0][4] +
            b.aggregated[1][2] -
            (a.aggregated[0][4] + a.aggregated[1][2])
        );
        break;
      case "Outer":
        sorted.sort(
          (a, b) =>
            b.aggregated[0][3] +
            b.aggregated[1][1] -
            (a.aggregated[0][3] + a.aggregated[1][1])
        );
        break;
      case "Bottom":
        sorted.sort(
          (a, b) =>
            b.aggregated[0][2] +
            b.aggregated[1][0] -
            (a.aggregated[0][2] + a.aggregated[1][0])
        );
        break;
      case "Missed":
        sorted.sort((a, b) => b.aggregated[1][3] - a.aggregated[1][3]);
        break;
    }
    console.log("SORTED");
    console.log(sorted);
    return sorted;
  };
  render() {
    return (
      <Container>
        <h3 style={mainHead}>Team Rankings</h3>

        <Table hover style={noTop} striped>
          <thead style={{ textAlign: "center" }}>
            <tr>
              <td>Rank</td>
              <td>Team Num</td>
              <td>
                <Button
                  variant="outline-dark"
                  style={fullWidth}
                  onClick={this.selectSortBy}
                  sort={"Inner"}
                >
                  Inner
                </Button>
              </td>
              <td>
                <Button
                  variant="outline-dark"
                  style={fullWidth}
                  onClick={this.selectSortBy}
                  sort={"Outer"}
                >
                  Outer
                </Button>
              </td>
              <td>
                <Button
                  variant="outline-dark"
                  style={fullWidth}
                  onClick={this.selectSortBy}
                  sort={"Bottom"}
                >
                  Bottom
                </Button>
              </td>
              <td>
                <Button
                  variant="outline-dark"
                  style={fullWidth}
                  onClick={this.selectSortBy}
                  sort={"Missed"}
                >
                  Missed
                </Button>
              </td>
            </tr>
          </thead>
          <tbody>
            {this.getSortedTeams(this.state.sortMethod).map((team, index) => {
              return <RankRow team={team} row={index} />;
            })}
            {console.log(this.props.dataReducer.teams)}
          </tbody>
        </Table>
      </Container>
    );
  }
}
const center = {
  textAlign: "center",
  width: "16%",
};
const fullWidth = {
  width: "100%",
};
const noTop = {
  top: "0px",
  marginTop: "0px",
  bottom: "0px",
  marginBottom: "0px",
  width: "100%",
};
const mainHead = {
  textAlign: "center",
  marginTop: "1%",
};
const mapStateToProps = (state) => {
  return {
    dataReducer: state.dataReducer,
  };
};

export const Rankings = connect(mapStateToProps)(RankingsRaw);