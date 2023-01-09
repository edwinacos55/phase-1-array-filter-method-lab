// Code your solution here
function findMatching (drivers, string) {
  return  drivers.filter(element => element.toUpperCase()=== string.toUpperCase());
}

function fuzzyMatch(drivers, firstLetter) {
    return  drivers.filter(element => element.slice(0, 2) === firstLetter);
}

function matchName (drivers, names) {
    return drivers.filter(element => element.name===names);
}