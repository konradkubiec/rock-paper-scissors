export const
	ROCK = "Rock!",
	PAPER = "Paper!",
	SCISSORS = "Scissors!";

export const RULES = {
	[ROCK]: {
		winsWith: [SCISSORS],
		losesWith: [PAPER]
	},
	[PAPER]: {
		winsWith: [ROCK],
		losesWith: [SCISSORS]
	},
	[SCISSORS]: {
		winsWith: [PAPER],
		losesWith: [ROCK]
	},
};