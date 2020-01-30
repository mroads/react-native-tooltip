import * as actionTypes from '../actions/actionConstants';

export default (state = null, action) => {
  switch (action.type) {
    case actionTypes.ADD_TOOLTIP_CONTENT:
      return { ...state, ...action.payload };
    case actionTypes.CLEAR_TOOLTIP:
      return null;
    default:
      return state;
  }
};
