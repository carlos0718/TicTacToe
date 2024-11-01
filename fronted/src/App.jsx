import { useState } from "react";
import TicTacToe from "../components/TicTacToe";
import "./App.css";

function App() {
	return (
		<main className='App'>
			<section className='App-section'>
				<TicTacToe />
			</section>
		</main>
	);
}

export default App;
