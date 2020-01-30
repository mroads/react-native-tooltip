import * as actionTypes from '../actions/actionConstants';

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.ADD_TOOLTIP_CONTENT:
      return {...state, ...action.payload};
    case actionTypes.CLEAR_TOOLTIP:
      return {};
    default:
      return state;
  }
};
