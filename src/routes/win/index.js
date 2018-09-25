import { Component } from 'preact';
import { route } from 'preact-router';
import style from './style.css';


export default class Win extends Component{
	startGame = () => {
		route('/game');
	};
	
	render () {
		return (
			<div class={style.win}>
				<div class={style.head}>
					<div class={style.emoji}>🎉</div>
					<div>You won!</div>
				</div>
				<button class={style.button} onClick={this.startGame}>New Game</button>
			</div>
		);

	}
}