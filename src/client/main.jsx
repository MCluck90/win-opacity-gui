import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ipcRenderer } from 'electron';

class Main extends React.Component {
	render() {
		return (
			<h1>Hello, world!</h1>
		);
	}
}

ipcRenderer.on('receive-windows', (event, windows) => {
	console.log(windows);
	ReactDOM.render(<Main />, document.getElementById('app'));
});

ipcRenderer.send('request-windows');