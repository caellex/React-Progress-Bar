import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProgressBar from '../components/ProgressBar' // Import ProgressBar component

function App() {
  const [val, setVal] = useState(50) // Hook for setting and changing the value of the progress bar
  const setValue = (e) => // Sets the value to the element that triggered the event's value
    setVal(Number(e.target.value), // in this case it's the input field with an onChange={setValue}
  );

  const logVal = (e) => { // made a log button because I was unsure where to put the log for a better understanding of what was going on, ended up making a button instead. So intuitive!
    e.preventDefault() // prevents event from triggering a page reload
    console.log(val)
  }

  return (
    <>
      <div className="App">
        <h1>Progress bar</h1>
        {<ProgressBar width={val} />} 
        <form>
          <label for="html">Input Percentage:</label>
          <input type="number" onChange={setValue} /> {/* Sets the value whenever the input field changes, but the change still has a slight delay.. why? */}
          <button onClick={logVal}>log (for bug testing)</button>  {/* see logVal (console logs the current value) */}
        </form>
      </div>
    </>
  );
}

export default App
