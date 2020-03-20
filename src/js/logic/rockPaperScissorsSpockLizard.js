import {
	ROCK,
	PAPER,
	SCISSORS
} from './rockPaperScissors';

export const
	SPOCK = "Spock!",
	LIZZARD = "Lizzard!";

export const RULES = {
	[ROCK]: {
		winsWith: [SCISSORS, LIZZARD],
		losesWith: [PAPER, SPOCK]
	},
	[PAPER]: {
		winsWith: [ROCK, SPOCK],
		losesWith: [SCISSORS, LIZZARD]
	},
	[SCISSORS]: {
		winsWith: [PAPER, LIZZARD],
		losesWith: [ROCK, SPOCK]
	},
    [SPOCK]: {
        winsWith: [SCISSORS, ROCK],
        losesWith: [LIZZARD, PAPER]
    },
    [LIZZARD]: {
        winsWith: [SPOCK, PAPER],
        losesWith: [ROCK, SCISSORS]
    }
}
