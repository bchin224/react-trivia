import { useState } from 'react'
import './App.css'
import Button from './components/Button';
import Questions from './components/Questions';


function App() {


  return (
    <>
      <h1>Ultimate Foodie Trivia!</h1>
      <div className="card">
          <Button color='primary' onClick={() => console.log('Clicked')}>
            Start
          </Button>
      </div>
      <div>
        <Questions></Questions>
      </div>


    </>
  )
}

export default App
