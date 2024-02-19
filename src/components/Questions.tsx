import Card from './Card';

interface Props {
    questionNum: number;
	number: number
}

const Questions = ({ questionNum, number }: Props) => {

    const questions = [
		{
			questionText: 'Ketchup is a sauce traditionally with a base of what ingredient?',
			answers: [
				{ answerText: 'Corn', isCorrect: false },
				{ answerText: 'Cherries', isCorrect: false },
				{ answerText: 'Tomato', isCorrect: true },
				{ answerText: 'Apples', isCorrect: false },
			],
		},
		{
			questionText: 'If pasta is cooked to be firm but not hard, what is it called?',
			answers: [
				{ answerText: 'stracotto', isCorrect: false },
				{ answerText: 'Al dente', isCorrect: true },
				{ answerText: 'Molto al dente', isCorrect: false },
				{ answerText: 'Crudo', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following dressings is traditionally made with buttermilk?',
			answers: [
				{ answerText: 'Ranch', isCorrect: true },
				{ answerText: 'Caesar', isCorrect: false },
				{ answerText: 'Russian', isCorrect: false },
				{ answerText: 'French', isCorrect: false },
			],
		},
		{
			questionText: 'What is done to dry fondant to make it into fondant?',
			answers: [
				{ answerText: 'Add salt', isCorrect: false },
				{ answerText: 'Bake at low temp', isCorrect: false },
				{ answerText: 'Cool at room temp', isCorrect: false },
				{ answerText: 'Add liquid', isCorrect: true },
			],
		},
		{
			questionText: 'When did the phrase "junk food" first pass into common usage?',
			answers: [
				{ answerText: '1968', isCorrect: false },
				{ answerText: '1976', isCorrect: true },
				{ answerText: '1985', isCorrect: false },
				{ answerText: '1993', isCorrect: false },
			],
		},
		{
			questionText: 'Where in the world would you most likely be served Obsttorte?',
			answers: [
				{ answerText: 'Germany', isCorrect: true },
				{ answerText: 'Belgium', isCorrect: false },
				{ answerText: 'Italy', isCorrect: false },
				{ answerText: 'Greece', isCorrect: false },
			],
		},
		{
			questionText: 'Which color is not an M&M?',
			answers: [
				{ answerText: 'Yellow', isCorrect: false },
				{ answerText: 'Green', isCorrect: false },
				{ answerText: 'Purple', isCorrect: true },
				{ answerText: 'Red', isCorrect: false },
			],
		},
		{
			questionText: 'Which of these is highest in Vitamin K?',
			answers: [
				{ answerText: 'Oranges', isCorrect: false },
				{ answerText: 'Spinach', isCorrect: false },
				{ answerText: 'Quinoa', isCorrect: false },
				{ answerText: 'Kale', isCorrect: true },
			],
		},
		{
			questionText: 'Pears Helene is native cuisine to which country?',
			answers: [
				{ answerText: 'Turkey', isCorrect: false },
				{ answerText: 'France', isCorrect: true },
				{ answerText: 'Spain', isCorrect: false },
				{ answerText: 'Italy', isCorrect: false },
			],
		},
		{
			questionText: 'What number is on the front of bottles of Jack Daniels Whiskey sour mash whiskey?',
			answers: [
				{ answerText: '7', isCorrect: true },
				{ answerText: '13', isCorrect: false },
				{ answerText: '5', isCorrect: false },
				{ answerText: '1', isCorrect: false },
			],
		},
		{
			questionText: 'What is the name given to a dish consisting of chicken, duck, and turkey?',
			answers: [
				{ answerText: 'Tuckeny', isCorrect: false },
				{ answerText: 'Chuckey', isCorrect: false },
				{ answerText: 'Durkeny', isCorrect: false },
				{ answerText: 'Turducken', isCorrect: true },
			],
		},
		{
			questionText: 'In what country is a baked potato commonly referred to as a jacket potato?',
			answers: [
				{ answerText: 'United Kingdom', isCorrect: true },
				{ answerText: 'Denmark', isCorrect: false },
				{ answerText: 'Poland', isCorrect: false },
				{ answerText: 'Ireland', isCorrect: false },
			],
		},
		{
			questionText: 'Which former president took a big interest in macaroni on a trip to France?',
			answers: [
				{ answerText: 'John F. Kennedy', isCorrect: false },
				{ answerText: 'Bill Clinton', isCorrect: false },
				{ answerText: 'Calvin Coolidge', isCorrect: false },
				{ answerText: 'Thomas Jefferson', isCorrect: true },
			],
		},
		{
			questionText: 'Where in the world would you eat a Bocadillo?',
			answers: [
				{ answerText: 'Brazil', isCorrect: false },
				{ answerText: 'Spain', isCorrect: true },
				{ answerText: 'Mexico', isCorrect: false },
				{ answerText: 'Portugal', isCorrect: false },
			],
		},
		{
			questionText: 'Elephant ears, beaver tails, and frying saucers are all nicknames for what?',
			answers: [
				{ answerText: 'Pepperoni', isCorrect: false },
				{ answerText: 'Tortilla Chips', isCorrect: false },
				{ answerText: 'Ice cream sandwiches', isCorrect: false },
				{ answerText: 'Fried Dough', isCorrect: true },
			],
		},
		{
			questionText: 'To slowly heat wine or cider with spices and sugar is known as what?',
			answers: [
				{ answerText: 'Sous vide', isCorrect: false },
				{ answerText: 'Char', isCorrect: false },
				{ answerText: 'Steep', isCorrect: false },
				{ answerText: 'Mull', isCorrect: true },
			],
		},
		{
			questionText: 'Which of these is acceptable to eat on a vegan diet?',
			answers: [
				{ answerText: 'Clams', isCorrect: false },
				{ answerText: 'Ricotta Cheese', isCorrect: false },
				{ answerText: 'Oreos', isCorrect: true },
				{ answerText: 'Hard boiled eggs', isCorrect: false },
			],
		},
		{
			questionText: 'Shredded cabbage is a main ingredient of which of the following?',
			answers: [
				{ answerText: 'Coleslaw', isCorrect: true },
				{ answerText: 'Tiramisu', isCorrect: false },
				{ answerText: 'Callilou', isCorrect: false },
				{ answerText: 'Haggis', isCorrect: false },
			],
		},
		{
			questionText: 'What is the base ingredient of gummy bears?',
			answers: [
				{ answerText: 'Gum', isCorrect: false },
				{ answerText: 'High fructose corn syrup', isCorrect: false },
				{ answerText: 'Cornstarch', isCorrect: false },
				{ answerText: 'Gelatin', isCorrect: true },
			],
		},
		{
			questionText: 'Which spice is derived fromt eh Crocus flower and is one of the most expensive spices in the world?',
			answers: [
				{ answerText: 'Saffron', isCorrect: true },
				{ answerText: 'Vanilla', isCorrect: false },
				{ answerText: 'Star anise', isCorrect: false },
				{ answerText: 'Turmeric', isCorrect: false },
			],
		},
		{
			questionText: 'How many tablespoons are in a cup?',
			answers: [
				{ answerText: '12', isCorrect: false },
				{ answerText: '24', isCorrect: false },
				{ answerText: '8', isCorrect: false },
				{ answerText: '16', isCorrect: true },
			],
		}
	];

  return (
    <>
		<Card 
			questionText={questions[questionNum].questionText}
			answer1={questions[questionNum].answers[0].answerText}
			answer1_val={questions[questionNum].answers[0].isCorrect}
			answer2={questions[questionNum].answers[1].answerText}
			answer2_val={questions[questionNum].answers[1].isCorrect}
			answer3={questions[questionNum].answers[2].answerText}
			answer3_val={questions[questionNum].answers[2].isCorrect}
			answer4={questions[questionNum].answers[3].answerText}
			answer4_val={questions[questionNum].answers[3].isCorrect}
			number = {number}
			></Card>
    </>
  )
}

export default Questions