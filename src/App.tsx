import { useState } from 'react'
import './App.css'
import Questions from './components/Questions';
// import Button from './components/Button';
// import Card from './components/Card';


function App() {
  // let number = 1;
  let [start, setStart] = useState(0)
  let [number, setNumber] = useState(0)

  const handleStartClick  = () => setStart(1);
  const handlePrevClick  = () => setNumber(number-1);
  const handleNextClick  = () => setNumber(number+1);

  return (
    <>
      <h1>Ultimate Foodie Trivia!</h1>
      { start === 0 ? 
          <button className='startButton' color='primary' onClick={handleStartClick}>
            Start
          </button>
      : 
        <>
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
