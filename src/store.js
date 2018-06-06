import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as app } from './App/reducer';

export const configureStore = () => createStore(
	combineReducers({
		app
	}),
	applyMiddleware(thunk)
);