import * as React from 'react';
import * as styles from './Header.css';

export const Header = () => (
	<div className={styles.header}>
		<div className={styles.filler} />
		<div className={styles.closeButton}>x</div>
	</div>
);