import * as React from 'react';
import * as styles from './WindowControl.css';

export const WindowControl = ({ handle, title, opacity, changeOpacity }) => (
	<div className={styles.windowControl}>
		<h3>{title}</h3>
		<span>{opacity}</span>
		<input type="range" min="1" max="255" step="1" value={opacity} onChange={changeOpacity.bind(null, handle)} />
	</div>
);