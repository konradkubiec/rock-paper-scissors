import { RULES} from './rockPaperScissors';

const TIE = "Tie!";

export default class GameEngine {
	constructor(avaiableMoves = RULES) {
		this.moves = avaiableMoves;
		// @ts-ignore
        this.movesInUse = {};
	}

	/**
	 * Add player move
	 * @param {string} playerName 
	 * @param {string|undefined} moveName 
     * @returns {string}
	 */
	add(playerName, moveName) {
		if (typeof moveName === 'undefined') {
			const randomIndex = Math.round(Math.random() * 100);
			const movesNames = Object.keys(this.moves);
			const numberOfNames = movesNames.length;
            moveName = movesNames[randomIndex % numberOfNames];
		}
		this.players = {
			...{
				[playerName]: moveName
	}
		};

		this.movesInUse = {
			...this.movesInUse, ...{
				[moveName]: Array.isArray(this.movesInUse[moveName]) ?
					this.movesInUse[moveName].concat(playerName) : [playerName]
			}
        }
	}

}
