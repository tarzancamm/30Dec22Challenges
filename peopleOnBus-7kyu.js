// There is a bus moving in the city, and it takes and drop some people in each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

// Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

const numLeftOnBus = (busStops) => {
  let numPeopleOnBus = 0;

  busStops.forEach((element) => {
    numPeopleOnBus += element[0];
    numPeopleOnBus -= element[1];
  });

  return numPeopleOnBus;
};

console.log(
  numLeftOnBus([
    [10, 0],
    [3, 5],
    [5, 8],
  ])
); //5

console.log(
  numLeftOnBus([
    [3, 0],
    [9, 1],
    [4, 10],
    [12, 2],
    [6, 1],
    [7, 10],
  ])
); //17
