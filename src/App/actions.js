import { ipcRenderer } from 'electron';

export const ACTION_TYPES = {
	REQUEST_WINDOWS: 'App/RequestWindows',
	RECEIVE_WINDOWS: 'App/ReceiveWindows'
};

export const requestWindows = () => (dispatch) => {
	dispatch({ type: ACTION_TYPES.REQUEST_WINDOWS });
	ipcRenderer.once('receive-windows', (_, windows) => dispatch(receiveWindows(windows)));
	ipcRenderer.send('request-windows');
};

export const receiveWindows = (windows) => ({
	type: ACTION_TYPES.RECEIVE_WINDOWS,
	windows
});