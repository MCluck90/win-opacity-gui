import { ipcRenderer } from 'electron';

export const ACTION_TYPES = {
	CHANGE_OPACITY: 'WindowControl/ChangeOpacity'
};

export const changeOpacity = (handle, opacity) => {
	ipcRenderer.send('change-opacity', handle, opacity);

	return {
		type: ACTION_TYPES.CHANGE_OPACITY,
		handle,
		opacity
	}
};