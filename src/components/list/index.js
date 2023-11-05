import "./style.css";

export const List = ({ data, render }) => {
	return (
		<div className="container">
			<ul className="row">{data.map(render)}</ul>
		</div>
	);
};
