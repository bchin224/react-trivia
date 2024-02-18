import { useState } from 'react'
import Button from './Button';
// import Questions from './Questions';

interface Props {
    questionText: string;
    answer1: string;
    answer1_val: boolean;
    answer2: string;
    answer2_val: boolean;
    answer3: string;
    answer3_val: boolean;
    answer4: string;
    answer4_val: boolean;
}

const Card = ({ questionText, answer1, answer2, answer3, answer4, answer1_val, answer2_val, answer3_val, answer4_val }: Props) => {
    const [score, setScore] = useState(0)



    const handleAnswerClick = (value:boolean, answer_num:string) => {
        const correct = value['answer'+answer_num+'_val'];
        console.log('Answer Val:', correct);

        if (correct) {
            setScore(score + 1)
        }
    }

    return (
       <div className="card" style={{width: '18rem'}}>
            <div className="card-body">
                <p className="card-text">{questionText}</p>
            </div>

            <ul className="list-group list-group-flush">

                <li className="list-group-item"><Button color='secondary' onClick={() => handleAnswerClick({answer1_val},'1')}> {answer1}</Button></li>
                <li className="list-group-item"><Button color='secondary' onClick={() => handleAnswerClick({answer2_val},'2')}>{answer2}</Button></li>
                <li className="list-group-item"><Button color='secondary' onClick={() => handleAnswerClick({answer3_val},'3')}>{answer3}</Button></li>
                <li className="list-group-item"><Button color='secondary' onClick={() => handleAnswerClick({answer4_val},'4')}>{answer4}</Button></li>
            </ul>
            <div>Score: {score}</div>
        </div>
  )
}

export default Card