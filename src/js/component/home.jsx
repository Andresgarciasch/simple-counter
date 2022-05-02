import React from "react";
// import { fontawesome } from "@fortawesome/react-fontawesome";

//create your first component
const Home = () => {
	return (
		<>
			<div className="counter">
				<div className="innercounter">
					<div className="clock"></div>
					<div className="five">0</div>
					<div className="four">0</div>
					<div className="three">0</div>
					<div className="two">0</div>
					<div className="one">0</div>
				</div>
			</div>
		</>
	);
};

export default Home;
