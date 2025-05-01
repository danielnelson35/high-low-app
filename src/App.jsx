import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [longest, setLongest] = useState(0);
  const [num, setNum] = useState(Math.floor(Math.random() * (10 - 1 + 1)) + 1);
  const [prev, setPrev] = useState(null);
  const [higher, setHigher] = useState(null)

  useEffect(() => {
    if ((higher && (num >= prev)) || (!higher && (num <= prev))) {
      setCount((count) => count + 1);
    } else {
      setCount(0);
    }
  }, [num])

  useEffect(() => {
    if (count > longest) {
      setLongest(count);
    }
  }, [count])

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleNumber = () => {
    setNum(randomNumber(1, 10));
  };

  const handleHigherClick = () => {
    setHigher(true);
    setPrev(num);
    handleNumber();
  };

  const handleLowerClick = () => {
    setHigher(false);
    setPrev(num);
    handleNumber();
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
      <h1>Previous: {prev}</h1>
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
