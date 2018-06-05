import * as React from 'react';
import * as ReactDOM from 'react-dom';

class Main extends React.Component {
	render() {
		return (
			<h1>Hello, world!</h1>
		);
	}
}

ReactDOM.render(<Main />, document.getElementById('app'));