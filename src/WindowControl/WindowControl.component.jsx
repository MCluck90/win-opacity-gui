import * as React from 'react';

export const WindowControl = ({ title, handle, opacity }) => (
	<div>
		<h3>{handle}</h3>
		<h3>{title}</h3>
		<h3>{opacity}</h3>
	</div>
);