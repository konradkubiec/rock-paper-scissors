import "core-js/stable";
import "regenerator-runtime/runtime";

import logger from './logger';

import '../css/index.scss';
import GameEngine from '../js/logic/gameEngine';

logger('it works well!');

const form = document.querySelector("#game");
const log = document.querySelector("#log");
const back = document.querySelector("#backToGame");
let gamesCount = 0;

/**
 * Based on inputs generate game and output text message with the result
 * @param {object} inputs 
 */
function playRockPaperScissors(inputs) {
	let output = '';

	const {
		name,
		ai,
		gesture
	} = inputs;

    gamesCount++;
	output = `<p>Welcome <i>${name}</i>,</br> Time to see who won <i>${gamesCount}.</i> game!<p>`;
	output += `<p>This match was against ${ai} opponent${ai == 1 ? '' : 's'}:</p><ul>`;

	let game = new GameEngine();
	for (let i = Number(ai); i--; i > 0) {
		const aiName = `AI Player ${i+1}`;
		output += `<li> <i>${aiName}</i> who played <i>${game.add(aiName)}</i></li>`;
	}
	output += `<li> And you played <i>${game.add(name, gesture)}</i></li></ul>`;

	const result = game.execute();
	if (result === 'Tie!') {
        output += `<p>And the result is... <b>a Tie!</b><br/>
                    Play one more time to find ultimate winner!</p>`
	} else {
		output += `<p>And the winner is... <i><b>${result}!</b></i><br/>`;
		if (result !== name) {
			output += `Try your luck one more time <i>${name}</i>!</p>`;
		} else {
			output += `Nice one <i>${result}</i>!</p>`;
		}
	}

	return output;
}


if (form !== null) {
	form.addEventListener("submit", function (event) {
		var data = new FormData(form);
		let inputs = {};
		for (const entry of data) {
			inputs[entry[0]] = entry[1];
		}

		console.log(JSON.stringify(inputs, null, 4));
		log.innerHTML = playRockPaperScissors(inputs);
		log.focus();

		event.preventDefault();
	}, false);
}

if (back !== null) {
	back.addEventListener("click", function () {
		if (form !== null) {
			form.focus();
		}
	}, false);
}
