import { CharacterCard } from "../CharacterCard/index";
import { List } from "../list/index";
import "./styles.css";

const TimeLine = ({ data }) => {
	return (
		<section>
			<List
				data={data}
				render={(item) => {
					return (
						<li className="col-md-4" key={item.id}>
							<CharacterCard character={item} />
						</li>
					);
				}}
			/>
		</section>
	);
};

export default TimeLine;
