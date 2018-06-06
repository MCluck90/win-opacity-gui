import * as React from 'react';
import { WindowControl } from '../WindowControl';
import * as styles from './WindowList.css';

export const WindowList = ({ windows }) => (
	<ul className={styles.windowList}>
		{
			windows.map(win => (
				<li key={win.handle}>
					<WindowControl {...win} />
				</li>
			))
		}
	</ul>
);