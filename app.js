// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     logger() {
//         console.log(`salom ${this.name} aka sizning yoshiingiz ${this.age}`);
//     }
//     alert() {
//         console.log(this, "this");
//         alert(this.name);
//     }
// }

// console.log(Person.prototype)
// const eshmat = new Person("Eshmat", 20);
// const temur = new Person("Temur", 20);
// console.log(eshmat);


// class Animal{
//     constructor(name,color) {
//         this.name = name;
//         this.color = color;
//     }
//     speak() {
//         console.log(this.name + this.color + ' makes a noise');
//     }
// }
// class Mushuk extends Animal{
//     constructor(name,color,age) {
//         super(name,color);
//         this.age = age;
//     }
//     speak() {
//         console.log(this.name + this.color +  this.age +' makes a noise');
//     }
// }


// 1.Berilgan massivdan n-chi eng kichik elementni toping.
function nthSmallest(arr, n) {
    return arr.sort((a, b) => a - b)[n - 1];
}

console.log(nthSmallest([7, 10, 4, 3, 20, 15], 3)); // Output: 7
console.log(nthSmallest([7, 10, 4, 3, 20, 15], 4)); // Output: 10

// 2.Berilgan sonli massivda eng ko'p 
// takrorlangan elementni toping.
function mostFrequent(arr) {
let count = 0
let num = 0
for(let i = 0 ; i < arr.length; i++){
    let arr1 = arr[i]
    let number = 0
    for(let j = 0 ; j < arr.length; j++){
        if(arr[j] === arr1){
            number++
        }
    }
    if(number > count){
        count = number
        num = arr1
    }
}
return num

}
console.log(mostFrequent([1, 3, 1, 3, 2, 1])); // Output: 1
console.log(mostFrequent([3, 3, 3, 2, 2, 1])); // Output: 3

// 3.Berilgan harflar qatorida eng ko'p
//  takrorlangan harfni toping.
function mostFrequentChar(str) {
    let count = 0
    let num = 0
    for(let i = 0 ; i < str.length; i++){
        let arr1 = str[i]
        let number = 0
        for(let j = 0 ; j < str.length; j++){
            if(str[j] === arr1){
                number++
            }
        }
        if(number > count){
            count = number
            num = arr1
        }
    }
    return num
 }
 console.log(mostFrequentChar("aabbbcccc")); // Output: "c"
 console.log(mostFrequentChar("abcdabcdabcd")); // Output: "a"

//  4.Berilgan sonli massivdagi eng 
//  kichik musbat sonni toping.
function firstMissingPositive(nums) {
    let num = nums.filter((num) => num > 0);
    return Math.min(...num);
 }
 
 // Test case
 console.log(firstMissingPositive([3, 4, -1, 1])); // Output: 3
 console.log(firstMissingPositive([1, 2, 0])); // Output: 1

//  5.Berilgan stringdagi barcha harflarni
//   bir qatorga chop eting.
function printCharsInLine(s) {
    return s.split("").join(" ");
}
console.log(printCharsInLine("hello")); // Output: "h e l l o"

// 6.Berilgan stringlar massivida eng 
// uzun o'xshash prefiksni toping.
function longestCommonPrefix(strs) {
    let result = "";
    for (let i = 0; i < strs.length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[0][i] != strs[j][i]) {
                return result;
            }
        }
        result += strs[0][i];
    }
    return result;
}
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Output: ""

//   2 chi variyanti

function longestCommonPrefix(strs) {
    let arr = strs[0]
    for(let i = 0 ; i < arr.length ; i++){
          for( let item of strs){
              if( item[i] != arr[i]){
                return item.slice(0,i)
              }
          }
    }
}
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Output: ""



// 7.Berilgan qator ichidagi arrayda ichidagi
//  sonlar yi’g’indisi yuqori bo’lgan array
//   ni qaytaring
function maxSumSubmatrix(matrix, k) {
    let sum = 0
    for (let i = 0; i < matrix.length; i++) {
        let matrixSum = matrix[i].reduce((accumulator, currentValue) => accumulator + currentValue, 0,);
        if (matrixSum > sum) {
            sum = matrixSum
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i].reduce((accumulator, currentValue) => accumulator + currentValue, 0,) === sum) {
            console.log(matrix[i])
        }
    }
    return matrix
}
console.log( maxSumSubmatrix([
    [10, 2, 3],
    [4, 11, 6],
    [7, 8, 9]
]));; // [7, 8, 9]

//   2 chi variyanti
function maxSumSubmatrix(matrix,) {
    let max_count = 0
    let resault = 0
    for(let i = 0 ; i < matrix.length ; i++){
        let total = 0
        for(let j = 0 ; j < matrix[i].length ; j++){
            total += matrix[i][j]
        }
        if(total > max_count){
            max_count = total
            resault = matrix[i]
        }
    }
    return resault
  }
  console.log(maxSumSubmatrix([
      [10, 2, 3],
      [4, 11, 6],
      [7, 8, 9]
  ])); // [7, 8, 9]

// 8.Berilgan ikki massivdagi umumiy 
// elementlarni toping.
function intersection(nums1, nums2) {
    return nums1.filter((num) => nums2.includes(num));
}
console.log(intersection([1, 2, 2, 1], [2, 2])); // Output: [2]
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); // Output: [4, 9]

// 9.Berilgan sonlar qatorida berilgan
//  yig'indini topuvchi barcha ikkilik 
//  juftliklarni toping.
function twoSumPairs(nums, target) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
          result.push([nums[i], nums[j]]);
        }
      }
    }
    return result;
  }
  console.log(twoSumPairs([2, 7, 11, 15], 9)); // Output: [[2, 7]]
  console.log(twoSumPairs([3, 2, 4], 6)); // Output: [[2, 4]]

// 10.Berilgan stringda har bir belgini
//  qanchalik ko'p uchraganini hisoblang.
function charFrequency(s) {
    let obj = {};
    for (let i = 0; i < s.length; i++) {
      if (obj[s[i]]) {
        obj[s[i]]++;
      } else {
        obj[s[i]] = 1;
      }
    }
    return obj;
}
console.log(charFrequency("aabbcc")); // Output: { a: 2, b: 2, c: 2 }
console.log(charFrequency("hello")); // Output: { h: 1, e: 1, l: 2, o: 1 }

//   69.Berilgan objectda eng chuqur joylashgan qiymatni toping.
function deepestValue(obj) {
    let resault = null
    let total = 0
    let arr = [{value: obj,step:1}]
    for(let i = 0 ; i < arr.length ; i++){
        const {value,step} = arr[i]
        for(let key in value ){
            if(typeof value[key] == "object"){
                arr.push({value: value[key],step:step+1})
        }else if( step > total){
            total = step
            resault = value[key]
        }
        }
    }
    return resault
}
const obj = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3,
            f: {
                g: 4
            }
        }
    }
};
console.log(deepestValue(obj)); // Output: 4
