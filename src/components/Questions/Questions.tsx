import React, { useState } from 'react';
import { Router } from 'react-router';
import { useHistory } from "react-router-dom";

function Questions({ ...props }: any) {
    const questions = [
		{
			questionText: 'Are you a person with disability?',
			answerOptions: [
				{ answerText: 'Yes' },
				{ answerText: 'No' }
			],
		},
		{
			questionText: 'What is you form of disability?',
			answerOptions: [
				{ answerText: 'Visual Impairment' },
				{ answerText: 'Color Blindness' },
				{ answerText: 'Dyslexia' },
				{ answerText: 'Others' },
			],
		},
		{
			questionText: 'What is the severity of your disability?',
			answerOptions: [
				{ answerText: '20-30%' },
				{ answerText: '30-50%' },
				{ answerText: '50-70%' },
				{ answerText: '70-100%' },
			],
		},
		{
			questionText: 'Would you like to enable our Accessibility settings?',
			answerOptions: [
				{ answerText: 'Yes' },
				{ answerText: 'No' },
			],
		},
	];
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const history = useHistory();
	const goToDashboard = () => history.push('/admin/dashboard');
	const handleAnswerOptionClick = () => {
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			goToDashboard();
		}
	};
	return (
		<div className="app">
			<div className='question-section'>
				<div className='question-count'>
				<span>Question {currentQuestion + 1}</span>/{questions.length}
				</div>
				<div className='question-text'>{questions[currentQuestion].questionText}</div>
			</div>
			<ul className='answer-section'>
				{questions[currentQuestion].answerOptions.map((answerOption) => (
					<li onClick={() => handleAnswerOptionClick()}>{answerOption.answerText}</li>
				))}
			</ul>
			<a onClick={goToDashboard}>Skip</a>
		</div>
	);
}

export default Questions;