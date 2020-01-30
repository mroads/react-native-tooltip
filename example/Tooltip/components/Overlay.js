/**
 * @flow
 */
import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: '#00000050',
    zIndex: 2,
  },
  innerContainer: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
});

export interface Props {
  onPress: Function;
  toolTipContent: any;
}

class Overlay extends React.Component<Props> {
  render() {
    const {toolTipContent, onPress} = this.props;
    const {xCoordinate: x, yCoordinate: y, content} = toolTipContent
      ? toolTipContent
      : {};
    return Object.keys(toolTipContent).length !== 0 ? (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={[styles.innerContainer, {top: y, left: x}]}>
          {content}
        </View>
      </TouchableOpacity>
    ) : null;
  }
}

const mapStateToProps = state => {
  const {toolTipContent} = state;
  return {
    toolTipContent,
  };
};

export default connect(mapStateToProps)(Overlay);
