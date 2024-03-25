import React from "react";
import Seconds from "./counter";

//include images into your bundle


//create your first component
const Home = () => {
	return (
		<>
			<h1>Probando</h1>
			<Seconds secs={0} />
		</>
		
	);
};

export default Home;