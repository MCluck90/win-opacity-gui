import * as React from 'react';
import { Header } from './Header.component';
import { WindowList } from '../WindowList';
import * as styles from './App.css';

export class App extends React.Component {
	constructor({ requestWindows }) {
		super();
		requestWindows();
	}

	render() {
		const { requestWindows, windows } = this.props;

		return (
			<div className={styles.app}>
				<Header />
				<button className={styles.refreshButton} onClick={requestWindows}>Refresh</button>
				<WindowList windows={windows} />
			</div>
		);
	}
}