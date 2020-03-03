import React from 'react'
import styles from './AnswersList.module.scss'
import AnswerItem from '../AnswerItem/AnswerItem'
const AnswersList = props => {
	return (
		<ul className={styles.AnswersList}>
			{props.answers.map((answer, index) => {
				return (
					<AnswerItem
						key={index}
						answer={answer}
						onAnswerClick={props.onAnswerClick}
						state={props.state ? props.state[answer.id] : null}
					/>
				)
			})}
		</ul>
	)
}


export default AnswersList