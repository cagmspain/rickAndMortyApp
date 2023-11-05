import Card from "react-bootstrap/Card";
export const CharacterCard = ({ character }) => {
	return (
		<Card className="text-center p-2 m-4" style={{ width: "18rem" }}>
			<Card.Img
				className="img-fluid rounded-pill"
				variant="top"
				src={character.image}
				alt={character.name}
			/>
			<Card.Body>
				<Card.Title>{character.name}</Card.Title>
				<Card.Text>{character.species}</Card.Text>
				<Card.Text>{character.status}</Card.Text>
				<Card.Text>{character.origin.name}</Card.Text>
			</Card.Body>
		</Card>
	);
};
