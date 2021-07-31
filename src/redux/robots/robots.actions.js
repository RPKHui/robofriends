import { RobotActionTypes } from "./robots.types";

export const fetchRobotsStart = () => ({
    type: RobotActionTypes.FETCH_ROBOTS_START
})

export const fetchRobotsSuccess = (robots) => ({
    type: RobotActionTypes.FETCH_ROBOTS_SUCCESS,
    payload: robots
})

export const fetchRobotsFailure = (error) => ({
    type: RobotActionTypes.FETCH_ROBOTS_FAILURE,
    payload: error
})

export const filterRobots = (search) => ({
    type: RobotActionTypes.FILTER_ROBOTS,
    payload: search
})