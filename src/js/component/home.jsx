import React from "react";
import PropTypes from "prop-types";
// import { fontawesome } from "@fortawesome/react-fontawesome";

//create your first component
const Home = (props) => {
	return (
		<>
			<div className="counter">
				<div className="innercounter">
					<div className="clock"></div>
					<div className="five"> {props.five} </div>
					<div className="four"> {props.four} </div>
					<div className="three">{props.three} </div>
					<div className="two"> {props.two} </div>
					<div className="one"> {props.one}</div>
				</div>
			</div>
		</>
	);
};

Home.propTypes = {
	five: PropTypes.number,
	four: PropTypes.number,
	three: PropTypes.number,
	two: PropTypes.number,
	one: PropTypes.number,
};

let counter = 0;
setInterval(() => {
	const five = Math.floor(counter / 10000);
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
	console.log(five, four, three, two, one % 10);

	counter++;
}, 1000);

export default Home;