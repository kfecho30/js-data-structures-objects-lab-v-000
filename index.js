// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  const driver1  = Object.assign({}, driver, key, value);
  return driver;
}
