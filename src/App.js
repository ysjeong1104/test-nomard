import { useState } from "react";
import "./styles.css";

const App = () => {
  const [item, setItem] = useState(1);

  const incrementItem = () => {
    setItem((current) => current + 1);
  };

  const decrementItem = () => {
    setItem((current) => current - 1);
  };
  return (
    <div className="App">
      <h1>hello {item}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={incrementItem}>Increment</button>
      <button onClick={decrementItem}>Decrement</button>
    </div>
  );
};

export default App;
