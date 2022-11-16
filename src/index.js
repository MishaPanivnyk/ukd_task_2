// TASK 1
const arr = [10, 12, 15, 2, 9, 4, 7];

function search(arr, e) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === e) {
      return i;
    }
  }
  return -1;
}

console.log(`Index: ${search(arr, 7)}`);
// TASK 2
const user = [
  { index: 17, userName: "Misha Panivnyk", age: 17, occupation: "developer" },
  {
    index: 15,
    userName: "Dmytro Spivak",
    age: 55,
    occupation: "developer",
  },
  { index: 33, userName: "Vasyl Struk", age: 48, occupation: "manager" },
  { index: 12, userName: "John Duo", age: 22, occupation: "plumber" },
  { index: 13, userName: "Dmytro Tuschuk", age: 23, occupation: "driver" },
];

function search2(arr, e) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].index === e) {
    }
  }
  return -1;
}

console.log(`Index user: ${search2(user, 45)}`);
// TASK 3
const arr2 = [
  [5, 7, 2, 1, 3],
  [38, 45, 24, 38, 96],
  [187, 1205, 1588, 1022, 1547, 1987],
  [27, 53, 623, 872],
];

function search3(arr, e) {
  for (let j = 0; j < arr.length; j += 1)
    for (let i = 0; i < arr[j].length; i += 1) {
      if (arr[j][i] === e) {
        return "[" + j + "][" + i + "]";
      }
    }
  return -1;
}

console.log(`Index: ${search3(arr2, 53)}`);
