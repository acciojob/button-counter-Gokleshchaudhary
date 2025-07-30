import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  // ✅ Correctly define the state
  const [count, setCount] = useState(0);

  // ✅ Define the event handler function
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      {/* Do not remove the main div */}
      <button onClick={handleClick}>Click Me</button>
      <p>Button clicked {count} times</p>
    </div>
  );
};

export default App;
