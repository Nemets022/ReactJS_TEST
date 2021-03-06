import React, { Component } from 'react'
import styles from './Auth.module.scss'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'

export default class Auth extends Component {
	loginHandler = () => {

	}
	registerHandler = () => {

	}
	submitHandler = event => {
		event.preventDefault()
	}
	render() {
		return (
			<div className={styles.Auth}>
				<div>
					<h1>Авторизация</h1>

					<form 
					className={styles.AuthForm}
					onSubmit={this.submitHandler}>

						<Input label="Email" />

						<Input label="Пароль" type="password"/>

						<Button type="success"
							onClick={this.loginHandler}
						>
							Войти</Button>
						<Button type="primary"
							onClick={this.registerHandler}
						>
							Зарегистрироваться</Button>

					</form>
				</div>
			</div>
		)
	}
}