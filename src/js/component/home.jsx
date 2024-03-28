import React from "react";
import SecondsCounter from "./secondscounter";
import { Probando } from "./pruebas";


//include images into your bundle


//create your first component
const Home = () => {
	return (
		<>
			<h1>Probando</h1>
			<SecondsCounter secs={1234567} nombre="juan" ciudad="madrid"/>
		</>
		
	);
};

export default Home;