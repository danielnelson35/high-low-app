import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [longest, setLongest] = useState(0);
  const [num, setNum] = useState(Math.floor(Math.random() * (10 - 1 + 1)) + 1);
  const [prev, setPrev] = useState(null);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    if (count > longest) {
      setLongest(count);
    }
  }, [count])

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleGuess = (higher) => {
    const newNum = randomNumber(1, 10);
    const correctGuess = higher ? newNum >= num : newNum <= num;
    if (correctGuess) {
      setCount((count) => count + 1);
      setFeedback('correct');
    } else {
      setCount(0);
      setFeedback('incorrect');
    }

    setPrev(num);
    setNum(newNum);

    setTimeout(() => {
      setFeedback(null);
    }, 750);
  };

  return (
    <>
      <div className="subRoot">
        <h1>Higher or Lower</h1>
        <div>
          <p>
            Previous: {prev}
          </p>
        </div>
        <div className="card">
          <button onClick={() => handleGuess(false)}>
            Lower
          </button>
          <div className={`currentNumber ${feedback}`}>
            <h2>{num}</h2>
          </div>
          <button onClick={() => handleGuess(true)}>
            Higher
          </button>
        </div>
        <div>
          <p>
            Longest streak: {longest}
          </p>
          <p>
            Current Streak: {count}
          </p>
        </div>
      </div>
    </>
  )
}

export default App
