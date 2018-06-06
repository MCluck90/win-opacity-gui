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
		const { windows } = this.props;

		return (
			<div className={styles.app}>
				<Header />
				<WindowList windows={windows} />
			</div>
		);
	}
}