import { createSelector } from 'reselect'

const selectRobot = state => state.robot

export const selectFilteredRobots = createSelector(
    [selectRobot],
    robot => robot.robots
)

export const isRobotLoading = createSelector(
    [selectRobot],
    robot => robot.loading
)