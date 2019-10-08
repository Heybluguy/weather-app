import React from 'react';

import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = '5fffdb579b7c80f227f0fcaee058413d';

class App extends React.Component {
	render() {
		return (
			<div>
				<Titles />
				<Form />
				<Weather />
			</div>
		);
	}
}

export default App;
