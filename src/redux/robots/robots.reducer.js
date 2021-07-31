import { RobotActionTypes } from "./robots.types";
import { filterRobots } from "./robots.utils";

const INITIAL_STATE = {
  all_robots: [],
  loading: true,
  error: "",
  robots: []
};

const robotReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RobotActionTypes.FETCH_ROBOTS_START:
      return {
        ...state,
        loading: true,
      };
    case RobotActionTypes.FETCH_ROBOTS_SUCCESS:
      return {
        ...state,
        all_robots: action.payload,
        robots: action.payload,
        loading: false,
      };

    case RobotActionTypes.FETCH_ROBOTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case RobotActionTypes.FILTER_ROBOTS:
      return {
        ...state,
        robots: filterRobots(state.all_robots, action.payload),
      };
    default:
        return state
  }
};

export default robotReducer;