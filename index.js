// Write your solution in this file!
const driver = { name: 'Bro' }

function updateDriverWithKeyAndValue(driver, k, v){
  const newObj = {...driver};
  newObj[k] = v;
  return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key){
  const newObj = {...driver}
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}
