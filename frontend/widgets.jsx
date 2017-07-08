import React from 'react';
import ReactDOM from 'react-dom';
import Congrats from './congrats';
import Clock from './clock';
import Weather from './weather';

// document.addEventListener("DOMContentLoaded", () => {
// 	const root = document.getElementById("root");
// 	ReactDOM.render(<Congrats/>, root);
// });

const app = (
	<div>
		<Clock/>
		<Weather/>
	</div>
);

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
  ReactDOM.render(app, root);
});
