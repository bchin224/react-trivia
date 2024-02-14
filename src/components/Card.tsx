import Button from './Button';

interface Props {
    questionText: string;
    answer1: string;
    answer2: string;
    answer3: string;
    answer4: string;
}

const Card = ({ questionText, answer1, answer2, answer3, answer4 }: Props) => {
  return (
    <div className="card" style={{width: '18rem'}}>
        <div className="card-body">
            <h5 className="card-title">Question #1</h5>
            <p className="card-text">{questionText}</p>
        </div>
        <ul className="list-group list-group-flush">

            <li className="list-group-item"><Button color='primary' onClick={() => console.log('clicked')}>{answer1}</Button></li>
            <li className="list-group-item"><Button color='primary' onClick={() => console.log('clicked')}>{answer2}</Button></li>
            <li className="list-group-item"><Button color='primary' onClick={() => console.log('clicked')}>{answer3}</Button></li>
            <li className="list-group-item"><Button color='primary' onClick={() => console.log('clicked')}>{answer4}</Button></li>
        </ul>
    </div>
  )
}

export default Card