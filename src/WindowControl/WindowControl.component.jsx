import * as React from 'react';

export const WindowControl = ({ handle, title, opacity, changeOpacity }) => (
	<div>
		<h3>{title}</h3>
		<input type="range" min="1" max="255" value={opacity} onChange={changeOpacity.bind(null, handle)} />
	</div>
);