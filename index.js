// Your code here
function mapToNegativize(arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++ ) {
    newArr.push(-1 * arr[i])
  }
  return newArr
}

function mapToNoChange(arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++ ) {
    newArr.push(arr[i])
  }
  return newArr
}

function mapToDouble(arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++ ) {
    newArr.push(2 * arr[i])
  }
  return newArr
}

function mapToSquare(arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++ ) {
    newArr.push(arr[i] * arr[i])
  }
  return newArr
}