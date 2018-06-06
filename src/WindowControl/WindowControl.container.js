import { connect } from 'react-redux';
import { changeOpacity } from './actions';
import { WindowControl as WindowControlComponent } from './WindowControl.component';

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
	changeOpacity: (handle, event) => {
		const opacity = Number(event.target.value);
		return dispatch(changeOpacity(handle, opacity));
	}
});

export const WindowControl = connect(
	mapStateToProps,
	mapDispatchToProps
)(WindowControlComponent);