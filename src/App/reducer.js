import { ACTION_TYPES } from './actions';
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

		default:
			return state;
	}
}