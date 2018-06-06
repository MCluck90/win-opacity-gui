import { connect } from 'react-redux';
import { requestWindows } from './actions';
import { App as AppComponent } from './App.component';

const mapStateToProps = (state) => ({
	windows: state.app.windows
});
const mapDispatchToProps = (dispatch) => ({
	requestWindows: () => dispatch(requestWindows())
});

export const App = connect(
	mapStateToProps,
	mapDispatchToProps
)(AppComponent);