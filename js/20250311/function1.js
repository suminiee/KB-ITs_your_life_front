function add(a, b) {
  return a + b;
}

let add2 = function (a, b) {
  return a + b;
};

let add3 = (a, b) => {
  return a + b;
};

function toUpperCase(str) {
  return str.toUpperCase();
}

let toUpperCase = function (str) {
  return str.toUpperCase();
};

let toUpperCase = (str) => {
  return str.toUpperCase();
};

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

let sumArray = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

let sumArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
