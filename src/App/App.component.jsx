import * as React from 'react';
import * as styles from './App.css';

export class App extends React.Component {
	constructor({ requestWindows }) {
		super();
		requestWindows();
	}

	render() {
		const { windows } = this.props;

		return (
			<div className={styles.app}>
				{ windows.map(w => (<h1 key={w.handle}>{w.title}</h1>)) }
			</div>
		);
	}
}