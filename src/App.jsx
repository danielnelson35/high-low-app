import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [longest, setLongest] = useState(0);
  const [num, setNum] = useState(Math.floor(Math.random() * (10 - 1 + 1)) + 1);
  const [prev, setPrev] = useState(0);

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleNumber = () => {
    setNum(randomNumber(1, 10));
  };

  const handleHigherClick = () => {
    console.log("prev: " + prev);
    setPrev(num);
    console.log("prev: " + prev);
    console.log("num: " + num);
    handleNumber();
    console.log("num: " + num);
    if (num >= prev) {
      setCount((count) => count + 1);
      handleLongest();
    } else {
      setCount(0);
    }
  };

  const handleLowerClick = () => {
    setPrev(num);
    handleNumber();
    if (num <= prev) {
      setCount((count) => count + 1);
      handleLongest();
    } else {
      setCount(0);
    }
  };

  const handleLongest = () => {
    if (count > longest) {
      setLongest(count);
    }
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Number: {num}</h1>
      <div className="card">
        <button onClick={handleLowerClick}>
          Lower
        </button>
        <button onClick={handleHigherClick}>
          Higher
        </button>
        <p>
        Longest streak is {longest}
        </p>
        <p>
          Current Streak is {count}
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
