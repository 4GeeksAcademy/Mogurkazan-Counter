import React from "react";
import Seconds from "./counter";
import { Probando } from "./pruebas";


//include images into your bundle


//create your first component
const Home = () => {
	return (
		<>
			<h1>Probando</h1>
			<Seconds secs={1234567} nombre="juan" ciudad="madrid"/>
			<Probando/>
		</>
		
	);
};

export default Home;