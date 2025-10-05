import './App.css'

function App() {



  function plaindrope(num) {
    for (let i = 0; i = num.length / 2; i++) {
      if (num[i] !== num[num.length - 1 - i]) {
        return false, { num }
      }
      return true

    }


  }
  console.log(plaindrope("racecar"));
  
  console.log(plaindrope("hello"));

  return (
    <>
      <h2>Check the console for output</h2>
    </>
  )
}

export default App
