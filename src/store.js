import { createStore, combineReducers } from 'redux';
import { reducer as app } from './App/reducer';

export const configureStore = () => createStore(combineReducers({
	app
}));