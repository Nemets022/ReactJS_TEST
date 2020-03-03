import React, { Component } from 'react'
import styles from './Quiz.module.scss'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishQuiz from '../../components/FinishQuiz/FinishQuiz'

class Quiz extends Component {
	state = {
		results:{}, // {[id]: success error}
		isFinished: false,
		activeQuestion: 0,
		answerState: null,
		quiz: [
			{
				id: 1,
				question: 'Какого цвета небо?',
				rightAnswerId: 2,
				answers: [
					{ text: 'Черный', id: 1 },
					{ text: 'Синий', id: 2 },
					{ text: 'Красный', id: 3 },
					{ text: 'Зеленый', id: 4 },
				]
			},
			{
				id: 2,
				question: 'В каком году основали Санкт-Петербург',
				rightAnswerId: 3,
				answers: [
					{ text: '1700', id: 1 },
					{ text: '1702', id: 2 },
					{ text: '1703', id: 3 },
					{ text: '1803', id: 4 },
				]
			}
		]
	}
	onAnswerClickHandler = (answerID) => {
		if(this.state.answerState) {
			const key = Object.keys(this.state.answerState)[0]
			if(this.state.answerState[key] === 'success'){
				return
			}
		}

		const question = this.state.quiz[this.state.activeQuestion]
		const results = this.state.results
		if (question.rightAnswerId === answerID) {
			if(!results[question.id]){
				results[question.id] = 'success'
			}
			this.setState({
				answerState: {[answerID]: 'success'},
				results
			})

			const timeout = window.setTimeout(() => {
				if (this.isQuizFinished()) {
					this.setState({
						isFinished: true
					})
				} else {
					this.setState({
						activeQuestion: this.state.activeQuestion + 1,
						answerState: null
					})
				}
				window.clearTimeout(timeout)
			}, 1000)
		} else {
			results[question.id] = 'error'
			this.setState({
				results,
				answerState: {[answerID]: 'error'}
			})
		}
	}
	isQuizFinished() {
		return this.state.activeQuestion + 1 === this.state.quiz.length
	}

	retryHandler = () => {
		this.setState({
			activeQuestion: 0,
			answerState: null,
			isFinished: false,
			results: {}
		})
	}

	componentDidMount(){
		console.log(this.props.match.params.id)
	}
	render() {
		return (
			<div className={styles.Quiz}>
				<div className={styles.QuizWrapper}>
					<h1>Ответьте на все вопросы</h1>
					{
						this.state.isFinished
						 ? <FinishQuiz 
						 results={this.state.results}
						 quiz={this.state.quiz}
						 onRetry={this.retryHandler}
							/>
						 :<ActiveQuiz
						 answers={this.state.quiz[this.state.activeQuestion].answers}
						 question={this.state.quiz[this.state.activeQuestion].question}
						 onAnswerClick={this.onAnswerClickHandler}
						 quizLenght={this.state.quiz.length}
						 state={this.state.answerState}
						 answerNumber={this.state.activeQuestion + 1}
					 />
					}
				</div>
			</div>
		)
	}
}

export default Quiz