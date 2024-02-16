import { useState } from 'react'
import './App.css'
import Questions from './components/Questions';
// import Button from './components/Button';
// import Card from './components/Card';


function App() {
  let number = 1;
  let [start, setStart] = useState(0)

  const handleStartClick  = () => setStart(1);

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
            <Questions questionNum = {number}></Questions>
          </div>
          {/* // <div>
          //   <Card></Card>
          // </div> */}
          <div>
            <button>Prev</button><button>Next</button>
          </div>
        </>
      }



      
    </>
  )
}

export default App
