import * as React from 'react';

export const WindowControl = ({ title, handle }) => (
	<div>
		<b>{handle}:</b>
		{title}
	</div>
);