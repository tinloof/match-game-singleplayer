import { Component } from 'preact';
import { Router } from 'preact-router';

import Home from '../routes/home';
import Game from '../routes/game';
import Win from '../routes/win';

/**
 * helper function to generate a schuffled array of cards
 */
function generateGridCards () {
	const emojis = ['🚀', '😺', '🐶', '🏈', '📦', '🙊'];

	return [...emojis, ...emojis]
		.sort(() => Math.random() - Math.random())
		.map((emoji, idx) => ({ key: idx, emoji }));
}

export default class App extends Component {
	render() {
		return (
			<div id="app">
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Game path="/game" cards={generateGridCards()} />
					<Win path="/win" />
				</Router>
			</div>
		);
	}
}
