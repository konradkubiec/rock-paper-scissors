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

		this.movesInUse = {
			...this.movesInUse, ...{
				[moveName]: Array.isArray(this.movesInUse[moveName]) ?
					this.movesInUse[moveName].concat(playerName) : [playerName]
			}
        }
        return moveName;
	}

	/**
	 * Execute game to find a winner
	 */
	execute() {
		let leaders = null,
			winningMove = null;

		const {
			moves,
			movesInUse
		} = this;

		const numberOfMovesInUse = Object.keys(movesInUse).length;
		const numberOfKnownMoves = Object.keys(moves).length;
        let loosingMoves = [];

		if (numberOfKnownMoves === numberOfMovesInUse ||
			numberOfKnownMoves === 1) return TIE;

		for (const move in movesInUse) {
			const arrayOfPlayers = movesInUse[move];

			if (leaders !== null) {
				// @ts-ignore
				if (moves[move].winsWith.indexOf(winningMove) > -1) {
					loosingMoves.push(winningMove);
					leaders = arrayOfPlayers;
                    winningMove = move;
				}
			} else {
				leaders = arrayOfPlayers;
                winningMove = move;
                // @ts-ignore
                loosingMoves.push(...moves[move].winsWith);
			}
        }
        
        // Closed graph exception
		if (winningMove !== null &&
			loosingMoves.indexOf(winningMove) > -1) return TIE;

        // 2+ players use the same winning move
		if (leaders.length > 1) return TIE;
		return leaders[0] || "Error!";
	}

}
