import { ipcRenderer } from 'electron';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import { App } from './App';

const Main = ({ store }) => (
	<Provider store={store}>
		<App />
	</Provider>
);

ipcRenderer.on('receive-windows', (event, windows) => {
	console.log(windows);
	const store = configureStore();
	ReactDOM.render(<Main store={store} />, document.getElementById('app'));
});

ipcRenderer.send('request-windows');