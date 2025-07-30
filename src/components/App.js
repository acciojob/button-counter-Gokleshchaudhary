
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
      <h2>Button Counter</h2>
      <button onClick={handleClick}>Click Me</button>
      <p>Button clicked {count} times</p>
    </div>
  )
}

export default App
