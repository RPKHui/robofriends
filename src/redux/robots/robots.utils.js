export const filterRobots = (robots, search) =>
  robots.filter((robot) => {
    return robot.name.toLowerCase().includes(search.toLowerCase());
  });
