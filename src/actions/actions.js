import * as actionTypes from './actionConstants';

export const addToolTip = (content, xCoordinate, yCoordinate) => ({
  type: actionTypes.ADD_TOOLTIP_CONTENT,
  payload: { content, xCoordinate, yCoordinate },
});

export const clearTooltip = () => ({
  type: actionTypes.CLEAR_TOOLTIP,
});
