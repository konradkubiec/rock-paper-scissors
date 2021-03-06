import GameEngine from '../../src/js/logic/gameEngine';
import {
	ROCK,
	PAPER,
	SCISSORS
} from '../../src/js/logic/rockPaperScissors';
import {
	SPOCK,
	LIZZARD,
	RULES
} from "../../src/js/logic/rockPaperScissorsSpockLizard";

const TIE = "Tie!",
	PLAYER1 = "Player 1",
	PLAYER2 = "Player 2",
	PLAYER3 = "Player 3",
	PLAYER4 = "Player 4";


/*
    I imagine the game as sync steps:
    - we define rules of the game by providing available moves set
    - we collect secret action of each player
    - we execute the game and unveil the winner name or "Tie!"

	KISS assumptions:
	- each player make their choice ONCE and only from available moves set
    - number of players is correct for the given size of available moves set
    - not tested with a not even-balanced set of available moves
	- players are responsible for executing the next game after the tie
	- winner is responsible for coresponding shout (e.g. "rock crushes scissors!");

	Pseudocode design:
	const = new GameEngine(avaiableMovesObject);
	game.add(playerName, moveName?);
	winnerName | "Tie!" = game.execute();
*/


describe('Game', () => {

	describe('for Rock Paper Scissors', () => {

		it('should provide "Player 1" as winner when: Scissors cut Paper (Player 2)', () => {
			const game = new GameEngine();
			game.add(PLAYER1, SCISSORS);
			game.add(PLAYER2, PAPER);
			const result = game.execute();

			expect(result).toMatch(PLAYER1);
		});

		it('should provide "Player 2" as winner when: Player\'s 2 Rock block Scissors)', () => {
			const game = new GameEngine();
			game.add(PLAYER1, SCISSORS);
			game.add(PLAYER2, ROCK);
			const result = game.execute();

			expect(result).toMatch(PLAYER2);
		});

		it('should provide "Tie!" when: 2 players use same move', () => {
			const game = new GameEngine();
			game.add(PLAYER1, SCISSORS);
			game.add(PLAYER2, SCISSORS);
			const result = game.execute();

			expect(result).toMatch(TIE);
		});

		it('should provide "Tie!" when 3 players pick 3 different moves', () => {
			const game = new GameEngine();
			game.add(PLAYER1, ROCK);
			game.add(PLAYER2, SCISSORS);
			game.add(PLAYER3, PAPER);
			const result = game.execute();

			expect(result).toMatch(TIE);
		});

		it('should return player move', () => {
			const game = new GameEngine();
			const move = game.add(PLAYER1, SCISSORS);

			expect(move).toMatch(SCISSORS);
		});

	});

	describe('for Rock Paper Scissors Spock Lizard game rules', () => {
		it('should provide "Player 1" as winner when: Scissors decapilates 2 Lizards (Player 2 & 3)', () => {
			const game = new GameEngine(RULES);
			game.add(PLAYER1, SCISSORS);
			game.add(PLAYER2, LIZZARD);
			game.add(PLAYER3, LIZZARD);
			const result = game.execute();

			expect(result).toMatch(PLAYER1);
		});

		it('should provide "Tie!" when moves are: Spock, Lizard, Paper, Scissors', () => {
			const game = new GameEngine(RULES);
			game.add(PLAYER1, SPOCK);
			game.add(PLAYER2, LIZZARD);
			game.add(PLAYER3, PAPER);
			game.add(PLAYER4, SCISSORS);
			const result = game.execute();

			expect(result).toMatch(TIE);
		});

		it('should provide "Player 1" as winner with Spock when oponents: Rock, Scissors x2', () => {
			const game = new GameEngine(RULES);
			game.add(PLAYER1, SPOCK);
			game.add(PLAYER2, ROCK);
			game.add(PLAYER3, SCISSORS);
			game.add(PLAYER4, SCISSORS);
			const result = game.execute();

			expect(result).toMatch(PLAYER1);
		});

		it('should provide "Tie!" when oponents: Rock x2, Scissors', () => {
			const game = new GameEngine(RULES);
			game.add(PLAYER1, ROCK);
			game.add(PLAYER2, ROCK);
			game.add(PLAYER3, SCISSORS);
			const result = game.execute();

			expect(result).toMatch(TIE);
		});
	});

});
