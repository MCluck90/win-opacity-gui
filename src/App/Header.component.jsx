import { remote } from 'electron';
import * as React from 'react';
import * as styles from './Header.css';

const onClose = () => {
	remote.getCurrentWindow().close();
};

export const Header = () => (
	<div className={styles.header}>
		<div className={styles.filler} />
		<div className={styles.closeButton} onClick={onClose}>x</div>
	</div>
);