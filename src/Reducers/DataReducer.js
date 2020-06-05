// import types
import Team from "./Team";
import { SET_TEAMS } from "../Actions/types";
import { ADDPEND_MATCHDATA } from "../Actions/types";
import { SET_COMPDATA } from "../Actions/types";

const dataInitState = {
  teams: [new Team(0, 0)],
};
const dataReducer = (state = dataInitState, action = {}) => {
  switch (action.type) {
    case SET_TEAMS:
      let newTeams = [];
      for (const teamNum of action.payload) {
        newTeams.push(new Team(teamNum, newTeams.length));
      }
      console.log("TEAMS ARE NOW P MUCH SET");
      return {
        ...state,
        teams: newTeams,
      };
      break;
    case ADDPEND_MATCHDATA:
      let teams = state.teams;
      for (const matchDataObj of action.payload) {
        let index = teams.findIndex(
          (team) => team.teamNumber == matchDataObj.teamNum
        );
        try {
          teams[index].appendData(matchDataObj);
          teams[index].aggregate();
        } catch (err) {
          console.log(err);
        }
      }
      return {
        ...state,
        teams: teams,
      };
    case SET_COMPDATA:
      let teamsRaw = state.teams;
      console.log(teamsRaw);
      console.log(action.payload);
      for (const team of teamsRaw) {
        let teamFromImport = action.payload.find(
          (teamFromImport) => teamFromImport.teamNumber == team.teamNumber
        );
        console.log("FROM IMPORT");
        console.log(teamFromImport);
        console.log("RAW");
        console.log(team);
        team.setData(teamFromImport);
      }
      return {
        ...state,
        teams: teamsRaw,
      };
    default:
      return state;
  }
};
export default dataReducer;
