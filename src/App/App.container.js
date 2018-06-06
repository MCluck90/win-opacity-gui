import { connect } from 'react-redux';
import { App as AppComponent } from './App.component';

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});

export const App = connect(
	mapStateToProps,
	mapDispatchToProps
)(AppComponent);