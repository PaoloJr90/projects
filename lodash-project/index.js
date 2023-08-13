class _ {
  // helps divide an array into chunks of arrays
  static chunk(array, size = 1) {
    let newArray = [];
    for (let i = 0; i < array.length; i += size) {
      let chunk = array.slice(i, i + size);
      newArray.push(chunk);
    }
    return newArray;
  }
  // helps remove falsy values from an array
  static compact(array) {
    let newArray = array.filter((val) => {
      return Boolean(val) === true;
    });
    return newArray;
  }
  // helps concatenate arrays
  static concat(array, ...values) {
    for (let i = 0; i < values.length; i++) {
      array = array.concat(values[i]);
    }
    return array;
  }
  // helps remove elements from the beginning of an array
  static drop(array, n = 1) {
    return array.slice(n, array.length);
  }
  // helps remove elements from the end of an array
  static dropRight(array, n = 1) {
    return array.slice(0, -n);
  }
  // helps fill elements of an array with a value
  static fill(array, value, start = 0, end = array.length) {
    for (let i = start; i < end; i++) {
      array[i] = value;
    }
    return array;
  }
  // helps flatten an array one-level deep
  static flatten(array) {
    return [].concat(...array);
  }
  // helps find the intersection of values in arrays
  static intersection(...arrays) {
    if (arrays.length === 0) {
      return [];
    }
    let intersection = arrays.reduce((prev, current) => {
      return prev.filter((element) => current.includes(element));
    });

    return [...new Set(intersection)]; //remove duplicates
  }
  // helps remove elements from an array based on a condition
  static remove(array, predicate) {
    let truthy = array.filter(predicate); // predicate is a function specifying the condition(s)
    for (let i of truthy) {
      let n = array.indexOf(i);
      array.splice(n, 1);
    }
    return array;
  }
  // helps create an array of unique values from multiple arrays
  static union(...arrays) {
    let total = [];
    for (let i of arrays) {
      total.push(...i);
    }
    return [...new Set(total)];
  }
  // help create an array of values that satisfy a condition
  static filter(collection, predicate) {
    return collection.filter(predicate);
  }
  // helps find the first value that satisfies a condition
  static find(collection, predicate, fromIndex = 0) {
    let ans = collection.slice(fromIndex, collection.length);
    return ans.find(predicate);
  }
  // help separate an array into two arrays based on conditions
  static partition(collection, predicate) {
    let truthy = collection.filter(predicate); // first condition
    let falsy = collection; // second condition

    for (let i of truthy) {
      let n = falsy[i];
      falsy.splice(n, 1);
    }

    return [truthy, falsy];
  }
  // helps create a new array that is randomized
  static shuffle(collection) {
    function sh(array = collection, shuffled = [], length = collection.length) {
      if (length === 0) {
        return shuffled;
      }

      let rand = Math.floor(Math.random() * length);

      shuffled.push(array[rand]);

      length -= 1;

      array.splice(rand, 1);

      return sh(array, shuffled, length);
    }
    return sh();
  }
  // help calculate the average value of elements in an array
  static mean(array) {
    let sum = array.reduce((accumulator, current) => {
      return accumulator + current;
    }, 0);
    return sum / array.length;
  }
  // helps find the maximum value in an array
  static max(array) {
    return Math.max(...array);
  }
  // help find the minimum value in an array
  static min(array) {
    return Math.min(...array);
  }
  // helps calculate the sum of elements in an array
  static sum(array) {
    let total = array.reduce((accumulator, current) => {
      return accumulator + current;
    }, 0);
    return total;
  }
  // helps create an array containing the properties of an object
  static keys(object) {
    return Object.keys(object);
  }
  // helps create an array containing the values of an object
  static values(object) {
    return Object.values(object);
  }
  // helps create a string that has been duplicated a number of times
  static repeat(string = "", n = 1) {
    let repeated = "";

    for (let i = 0; i < n; i++) {
      repeated += string;
    }
    return repeated;
  }
  // split a string by a separator and stores the parts in an array
  static split(string = "", separator, limit) {
    let spl = string.split(separator);
    let limited = [];

    if (limit === undefined) {
      return spl;
    } else {
      for (let i = 0; i < limit; i++) {
        limited.push(spl[i]);
      }
      return limited;
    }
  }
}

let arrayChunk = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(_.chunk(arrayChunk, 3));

let arrayCompact = [0, 1, false, 2, "", 3, null, 4, undefined, 5, NaN, 6];
console.log(_.compact(arrayCompact));

let arrayConcat = [1, 2, 3];
console.log(_.concat(arrayConcat, 4, [5], [[6]]));

let arrayDrop = [1, 2, 3];
console.log(_.drop(arrayDrop, 2));

let arrayDropRight = [1, 2, 3];
console.log(_.dropRight(arrayDropRight, 2));

let arrayFill = [1, 2, 3];
console.log(_.fill(arrayFill, "a"));

let arrayFlatten = [1, [2, 3], [4, 5]];
console.log(_.flatten(arrayFlatten));

let preference1 = ["Post", "View", "Comment"];
let preference2 = ["Like", "Comment", "Share"];
let preference3 = ["View", "Share", "Comment"];
console.log(_.intersection(preference1, preference2, preference3));

let arrayRemove = [1, 2, 3, 4];
let predicate = (n) => {
  return n % 2 === 0;
};
console.log(_.remove(arrayRemove, predicate));

let basket1 = ["Egg", "Shoe", "Milk"];
let basket2 = ["Shoe", "Milk", "Honey"];
console.log(_.union(basket1, basket2));

let users = [
  { name: "Zoe", age: 24, active: false },
  { name: "Aisha", age: 20, active: true },
  { name: "Alex", age: 19, active: true },
];
console.log(_.filter(users, (element) => element.age > 20));

let products = [
  { name: "Rice", qty: 20 },
  { name: "Egg", qty: 24 },
  { name: "Milk", qty: 19 },
  { name: "Wheat", qty: 20 },
];
console.log(_.find(products, (element) => element.qty > 15));

let products1 = [
  { name: "Milk", sold: true },
  { name: "Cream", sold: false },
  { name: "Bicycle", sold: true },
  { name: "Socks", sold: false },
];
console.log(_.partition(products1, (element) => element.sold === true));

let quizQuestions = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(_.shuffle(quizQuestions));

let mathScore = [60, 70, 50, 80];
console.log(_.mean(mathScore));

let topStockPrices = [545, 230, 123, 1004, 890, 890];
console.log(_.max(topStockPrices));

let productPrice = [200, 150, 500, 230, 99];
console.log(_.min(productPrice));

let sales = [20000, 34000, 21000, 15000];
console.log(_.sum(sales));

console.log(_.keys({ name: "john", age: 7 }));
console.log(_.values({ name: "john", age: 7 }));

console.log(_.repeat("hello", 3));
console.log(_.repeat("-", 10));

//Splits all the characters
console.log(_.split("hello", ""));
//Split using _ as separator
console.log(_.split("h_e_l_l_o", "_"));
// Splits the string using + as a separator and limits the elements to 2
console.log(_.split("how+to+cook+rice", "+", 2));
