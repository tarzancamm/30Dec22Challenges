// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.

const wave = (str) => {
  waveArray = [];

  if ([...str].length === 0) {
    return [];
  }

  for (let i = 0; i < str.length; i++) {
    let splitString = str.split("");
    if (splitString[i] === " ") continue;
    splitString[i] = splitString[i].toUpperCase("");
    waveArray.push(splitString.join(""));
  }

  return waveArray;
};

console.log(wave("hello there"));
