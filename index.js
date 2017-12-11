// Write your solution in this file!
driver = {}

function updateDriverWithKeyAndValue(driver, key, value){
  return Object.assign({}, driver, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value
  return driver
}

function deleteFromDriverByKey(driver, key){
  object = Object.assign({}, driver);
  return delete object[key];
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];
  return driver;
}
