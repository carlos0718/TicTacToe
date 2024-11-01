import { useState } from "react";
import "../src/App.css";
import Square from "./Square";

const TicTacToe = () => {
	const [squares, setSquares] = useState(Array(9).fill(null));
	const [player, setPlayer] = useState("X");
	const [winner, setWinner] = useState(null);
	console.log(squares.find((x) => x));
	const checkForWinner = (squares) => {
		let combos = {
			horizontal: [
				[0, 1, 2],
				[3, 4, 5],
				[6, 7, 8],
			],
			vertical: [
				[0, 3, 6],
				[1, 4, 7],
				[2, 5, 8],
			],
			diagonal: [
				[0, 4, 8],
				[2, 4, 6],
			],
		};

		for (let line in combos) {
			combos[line].forEach((pattern) => {
				if (squares[pattern[0]] === squares[pattern[1]] && squares[pattern[1]] === squares[pattern[2]]) {
					setWinner(squares[pattern[0]]);
				}
			});
		}
	};

	const handleReset = () => {
		setSquares(Array(9).fill(null));
		setPlayer("X");
		setWinner(null);
	};

	const handleClick = (num) => {
		const newSquares = [...squares];

		if (squares[num] !== null) alert("Please select another square");

		if (player === "X") {
			newSquares[num] = "X";
			setPlayer("O");
		} else {
			newSquares[num] = "O";
			setPlayer("X");
		}
		setSquares(newSquares);
		checkForWinner(newSquares);
	};

	return (
		<>
			<h1>TIC-TAC-TOE</h1>
			<div style={{ marginBottom: "20px" }}>Turn : {player === "X" ? "Player 1" : "Player 2"}</div>

			<div className='Grid-container'>
				{squares.map((_, i) => {
					return <Square key={i} num={i} handleClick={() => handleClick(i)} square={squares} />;
				})}
			</div>
			{squares.find((x) => x) !== undefined ? (
				winner ? (
					<div style={{ marginButton: "25px" }}>
						Winner : {winner === "X" ? "Player 1" : "Player 2"}
						<button className='Btn-reset' onClick={handleReset}>
							Play Again
						</button>
					</div>
				) : (
					<button className='Btn-reset' onClick={handleReset}>
						Play Again
					</button>
				)
			) : null}
		</>
	);
};

export default TicTacToe;
