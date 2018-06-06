import * as React from 'react';
import { WindowControl } from '../WindowControl';

export const WindowList = ({ windows }) => (
	<ul>
		{
			windows.map(win => (
				<li key={win.handle}>
					<WindowControl {...win} />
				</li>
			))
		}
	</ul>
);