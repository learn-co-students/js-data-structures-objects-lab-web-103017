// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(obj, k, v){
  return Object.assign({}, obj, {[k]: v})

}

function destructivelyUpdateDriverWithKeyAndValue(obj, k, v) {
  obj[k] = v
  return obj
}

function deleteFromDriverByKey(obj, k) {
  newObj = Object.assign({}, obj)
  delete newObj[k]
  return newObj
}

function destructivelyDeleteFromDriverByKey(obj, k) {
  delete obj[k]
  return obj
}
