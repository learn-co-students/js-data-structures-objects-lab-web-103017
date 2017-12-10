// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  return newObject = Object.assign({}, driver, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  newObject= {...driver}
  delete newObject[key]
  return newObject
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}
