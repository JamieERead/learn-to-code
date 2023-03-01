import React, { useState } from "react";

// Step 1 - create component
// Step 2 - render component
// Step 3 - update component
// Step 4 - reconciliation

const MyComponent = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>You clicked me {count} times</p>
      <button onClick={increment}>Click me</button>
    </div>
  );
};

export default MyComponent;
