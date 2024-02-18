import { useState } from 'react'
import './App.css'
import Questions from './components/Questions';
// import Button from './components/Button';
// import Card from './components/Card';


function App() {
  let [start, setStart] = useState(0)
  let [number, setNumber] = useState(0)

  const handleStartClick  = () => setStart(1);
  const handlePrevClick  = () => {
    if (number - 1 < 0) {
      setNumber(0)
    } else {
      setNumber(number-1)
    }
  };
  const handleNextClick  = () => {
    if (number + 1 < 21) {
      setNumber(number+1);
    } else {
      alert("You've reached the end of Foodie Trivia!")
    }
  }

  return (
    <>
      <h1>Ultimate Foodie Trivia!</h1>
      { start === 0 ? 
          <button className='startButton' color='primary' onClick={handleStartClick}>
            Start
          </button>
      : 
        <>
          <h5 className="card-title">Question #{number+1}</h5>
          <div className='questions'>
            <button className='prevButton' onClick={handlePrevClick}>Prev</button>
            <Questions questionNum = {number}></Questions>
            <button className='nextButton' onClick={handleNextClick}>Next</button>
          </div>
        </>
      }



      
    </>
  )
}

export default App
