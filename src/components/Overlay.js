/**
 * @flow
 */
import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { connect, Provider } from 'react-redux';
import { store } from './Tooltip';
import { clearTooltip } from '../actions/actions';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 2,
  },
  innerContainer: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
});

export interface Props {
  toolTipContent: any;
}


function dispatchClearTooltip() {
  store.dispatch(clearTooltip());
}


function Overlay({ toolTipContent }:Props) {
  const { xCoordinate: x, yCoordinate: y, content } = toolTipContent || {};
  return toolTipContent ? (
    <TouchableOpacity style={styles.container} onPress={dispatchClearTooltip}>
      <View style={[styles.innerContainer, { top: y, left: x }]}>
        {content}
      </View>
    </TouchableOpacity>
  ) : null;
}


const mapStateToProps = (state) => {
  const { toolTipContent } = state;
  return {
    toolTipContent,
  };
};

const ConnectedOverlay = connect(mapStateToProps)(Overlay);


export default () => (
  <Provider store={store}>
    <ConnectedOverlay />
  </Provider>
);
