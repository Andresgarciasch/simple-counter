import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

// variables

//create your first component
const Home = (props) => {
	const five = Math.floor((props.second / 10000) % 10);
	const four = Math.floor((props.second / 1000) % 10);
	const three = Math.floor((props.second / 100) % 10);
	const two = Math.floor((props.second / 10) % 10);
	const one = Math.floor((props.second / 1) % 10);
	return (
		<>
			<div className="counter">
				<div className="innercounter">
					<div className="clock">
						<FontAwesomeIcon icon={faClock} />
					</div>
					<div className="five"> {five} </div>
					<div className="four"> {four} </div>
					<div className="three">{three} </div>
					<div className="two"> {two} </div>
					<div className="one"> {one}</div>
				</div>
			</div>
		</>
	);
};

Home.propTypes = {
	second: PropTypes.number,
};

export default Home;
