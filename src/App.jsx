import './App.css'

function App() {



  // function plaindrope(str) {
  //   // Loop only halfway through the string
  //   for (let i = 0; i < str.length / 2; i++) {
  //     // Compare characters from both ends
  //     if (str[i] !== str[str.length - 1 - i]) {
  //       return false;
  //     }
  //   }
  //   return true;
  // }

  // console.log(plaindrope("racecar")); // true
  // console.log(plaindrope("hello"));   // false

  // console.log(plaindrope("racecar"));

  // console.log(plaindrope("hello"));


  // function frictional(num) {
  //   let result = 1
  //   for (let i = 1; i < num; i++) {
  //     result = result * i
  //   }
  //   return result
  // }
  // console.log(frictional(5));

  // function fibonacci(num) {
  //   let a = 0, b = 1, c
  //   if (num === 0) return 0;
  //   for (let i = 2; i <= num; i++) {

  //     c = a + b
  //     a = b
  //     b = c

  //   }
  //   return b

  // }
  // console.log(fibonacci(7));
  // function sumDigits(num) {
  //   let sum = 0;
  //   while (num > 0) {
  //     sum = sum + num % 10;
  //     num = Math.floor(num / 10);
  //   }
  //   return sum;
  // }
  // console.log(sumDigits(1234)); // 10


  // function maxarray(arr) {
  //   let max = arr[0]
  //   for (let i = 1; i <= arr.length; i++) {
  //     if (arr[i] > max) {
  //       max=arr[i]
  //     }
  //   }
  //   return max
  // }
  // console.log(maxarray([1,3,5,2,6,2]));

//   function largestarr(arr) {
//     let result = []
//     for (let i = 1; i <= arr.length; i++) {
//       if (arr[i] > result) {
//       result = arr[i]
//       }
//     }
//     return result
//   }
// console.log(largestarr([1,5,3,4,2]));



  return (
    <>
      <h2>Check the console for output</h2>
    </>
  )
}

export default App
