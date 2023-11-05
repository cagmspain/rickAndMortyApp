import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import TimeLine from "./components/TimeLine/Timeline";
import Spinner from "react-bootstrap/Spinner";
//import characters from "./data/characters.json";
function App() {
	const [characters, setCharacters] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchData() {
			const response = await fetch("https://rickandmortyapi.com/api/character");
			const data = await response.json();
			setLoading(false);
			setCharacters(data.results);
		}
		fetchData();
	}, []);
	return (
		<div className="App bg-black text-white">
			<header>
				<h1>Ricky and Morty Characters</h1>
			</header>
			{loading ? (
				<div className="container text-center">
					<Spinner animation="border" role="status">
						<span className="visually-hidden">Loading...</span>
					</Spinner>
				</div>
			) : (
				<main>
					<TimeLine className="container" data={characters} />
				</main>
			)}
		</div>
	);
}

export default App;
