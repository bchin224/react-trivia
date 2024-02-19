import { useState, useEffect } from 'react'
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
    number: number;
}

const Card = ({ questionText, answer1, answer2, answer3, answer4, answer1_val, answer2_val, answer3_val, answer4_val, number }: Props) => {
    const [score, setScore] = useState(0);
    const [buttonClicked, setButtonClicked] = useState<{
        1?: boolean;
        2?: boolean;
        3?: boolean;
        4?: boolean;
      }>({});

      useEffect(() => {
        // Reset button colors to 'primary' with every new question
        setButtonClicked({});
      }, [number]); 

    const handleAnswerClick = (value:boolean, answer_num:string) => {
        const correct = value['answer'+answer_num+'_val'];

        setButtonClicked((prev) => ({ ...prev, [answer_num]: true }));

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

                <li className="list-group-item">
                    <Button color={buttonClicked['1'] ? (answer1_val ? 'success' : 'danger') : 'primary'} onClick={() => handleAnswerClick({answer1_val},'1')}> {answer1}</Button>
                    </li>
                <li className="list-group-item">
                    <Button color={buttonClicked['2'] ? (answer2_val ? 'success' : 'danger') : 'primary'} onClick={() => handleAnswerClick({answer2_val},'2')}>{answer2}</Button>
                </li>
                <li className="list-group-item">
                    <Button color={buttonClicked['3'] ? (answer3_val ? 'success' : 'danger') : 'primary'} onClick={() => handleAnswerClick({answer3_val},'3')}>{answer3}</Button>
                </li>
                <li className="list-group-item">
                    <Button color={buttonClicked['4'] ? (answer4_val ? 'success' : 'danger') : 'primary'} onClick={() => handleAnswerClick({answer4_val},'4')}>{answer4}</Button>
                </li>
            </ul>
            <div className='score'>Score: {score}</div>
        </div>
    )
}

export default Card