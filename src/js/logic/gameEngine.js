import { RULES} from './rockPaperScissors';

const TIE = "Tie!";

export default class GameEngine {
	constructor(avaiableMoves = RULES) {
		this.moves = avaiableMoves;
	}


}
