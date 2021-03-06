import React from 'react'
import styles from './ActiveQuiz.module.scss'
import AnswerList from './AnswersList/AnswersList'

const ActiveQuiz = props => {
	return (
		<div className={styles.ActiveQuiz}>
			<p className={styles.Question}>
				<span>
					<strong>{props.answerNumber}.</strong>&nbsp;
					{props.question}
				</span>

			<small>{props.answerNumber} из {props.quizLenght}</small>
			</p>
			<AnswerList
				state={props.state}
				answers={props.answers}
				onAnswerClick={props.onAnswerClick}
			/>
		</div>
	)
}




export default ActiveQuiz