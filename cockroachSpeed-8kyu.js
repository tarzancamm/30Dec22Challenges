// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).


const cockroachSpeed = (km) => {
    let cmPerSecond = km * 27.7777777778
    return Math.floor(cmPerSecond)
}

console.log(cockroachSpeed(1.08))