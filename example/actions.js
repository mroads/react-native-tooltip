import * as actionTypes from './actionConstants';

export const addToolTip = (content, xCoordinate, yCoordinate) => {
  return {
    type: actionTypes.ADD_TOOLTIP_CONTENT,
    payload: {content, xCoordinate, yCoordinate},
  };
};

export const clearTooltip = () => {
  return {
    type: actionTypes.CLEAR_TOOLTIP,
  };
};
