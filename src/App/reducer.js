import { ACTION_TYPES } from './actions';
import { ACTION_TYPES as WIN_CONTROL_ACTION } from '../WindowControl/actions';

const initialState = {
	windows: []
};

export function reducer(state = initialState, action) {
	switch (action.type) {
		case ACTION_TYPES.RECEIVE_WINDOWS:
			return {
				...state,
				windows: action.windows
			};

		case WIN_CONTROL_ACTION.CHANGE_OPACITY:
			return {
				...state,
				windows: state.windows.map(win => {
					if (win.handle === action.handle) {
						return { ...win, opacity: action.opacity };
					}
					return win;
				})
			};

		default:
			return state;
	}
}