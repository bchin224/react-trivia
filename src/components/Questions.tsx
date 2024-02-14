import Card from './Card';

interface Props {
    questionNum: string;
}

const Questions = ({ questionNum }: Props) => {

    const questions = [
		{
			questionText: 'What is the capital of France?',
			answers: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answers: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answers: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answers: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];


  return (
    <>
        <div>{questions.length}</div>
        <div>{questions[0].questionText}</div>
		<Card 
			questionText={questions[0].questionText}
			answer1={questions[0].answers[0].answerText}
			answer2={questions[0].answers[1].answerText}
			answer3={questions[0].answers[2].answerText}
			answer4={questions[0].answers[3].answerText}
			></Card>
    </>
  )
}

export default Questions