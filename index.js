// Code your solution in this file
function findMatching (drivers, string) {
  let newdrivers = drivers.filter(function (name) {return name === string; });
  return newdrivers;
}
