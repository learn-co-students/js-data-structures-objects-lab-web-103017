// Write your solution in this file!
const driver = {name: "Josh"}


function updateDriverWithKeyAndValue(driver, key, value){
  const newObj = {...driver}
  newObj[key] = value
  return newObj
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key,value){
  driver[key] = value
  return driver;
}

function deleteFromDriverByKey(driver, key){
  obj = {...driver}
  delete obj[key]
  return obj
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];
  return driver
}
