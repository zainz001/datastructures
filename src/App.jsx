import './App.css'

function App() {



   function plaindrope(str) {
    // Loop only halfway through the string
    for (let i = 0; i < str.length / 2; i++) {
      // Compare characters from both ends
      if (str[i] !== str[str.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }

  // console.log(plaindrope("racecar")); // true
  console.log(plaindrope("hello"));   // false

  // console.log(plaindrope("racecar"));

  // console.log(plaindrope("hello"));


  function frictional(num) {
    let result = 1
    for (let i = 1; i < num; i++) {
      result = result * i
    }
    return result
  }
  console.log(frictional(5));
  

  return (
    <>
      <h2>Check the console for output</h2>
    </>
  )
}

export default App
