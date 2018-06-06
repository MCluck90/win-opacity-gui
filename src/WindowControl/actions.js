export const ACTION_TYPES = {
	CHANGE_OPACITY: 'WindowControl/ChangeOpacity'
};

export const changeOpacity = (handle, opacity) => ({
	type: ACTION_TYPES.CHANGE_OPACITY,
	handle,
	opacity
});