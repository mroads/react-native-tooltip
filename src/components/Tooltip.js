/**
 * @flow
 */

import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStore, combineReducers } from 'redux';

import toolTipContent from '../reducers/reducer';
import { addToolTip, clearTooltip } from '../actions/actions';

const rootReducer = combineReducers({
  toolTipContent,
});

const store = createStore(rootReducer);

function dispatchAddToolTip(
  content: any,
  xCoordinate: number,
  yCoordinate: number,
) {
  store.dispatch(addToolTip(content, xCoordinate, yCoordinate));
}

function dispatchClearTooltip() {
  store.dispatch(clearTooltip());
}

export { store, dispatchAddToolTip, dispatchClearTooltip };

export interface Props {
  dispatchAddToolTip: Function;
  direction: String;
  content: any;
  children: any;
}

class Tooltip extends React.Component<Props> {
  contentRef: any;

  setCoordinates = () => {
    const { content, direction } = this.props;
    if (this.contentRef) {
      this.contentRef.measureInWindow((x, y, w, h) => {
        console.log(x, y, w, h);
        if (direction === 'top') {
          dispatchAddToolTip(content, x, y - h - 10);
        } else if (direction === 'left') {
          dispatchAddToolTip(content, x - w - 10, y);
        } else if (direction === 'right') {
          dispatchAddToolTip(content, x + w + 10, y);
        } else {
          dispatchAddToolTip(content, x, y + h + 10);
        }
      });
    }
  };

  render() {
    const { children } = this.props;
    return (
      <TouchableOpacity
        ref={(reference) => {
          if (!this.contentRef) {
            this.contentRef = reference;
          }
        }}
        onPress={this.setCoordinates}
      >
        {children}
      </TouchableOpacity>
    );
  }
}

export default Tooltip;
