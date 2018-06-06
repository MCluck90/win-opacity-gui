import * as React from 'react';
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
				<WindowList windows={windows} />
			</div>
		);
	}
}