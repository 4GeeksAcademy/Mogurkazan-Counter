import React from "react";
import SecondsCounter from "./secondscounter";



//include images into your bundle


//create your first component
const Home = () => {
	return (
		<>
			<SecondsCounter secs={1234567} nombre="juan" ciudad="madrid"/>
		</>
		
	);
};

export default Home;