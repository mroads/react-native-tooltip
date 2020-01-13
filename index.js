/**
 * @flow
 */

import React from 'react';
import { View } from 'react-native';
import store from './src/store';


console.info('store', store);


export interface TooltipProps{
  children: Array<any>;
  style?: Object;
  overlayStyle?: Object;
}

function Tooltip(props:TooltipProps) {
  const { children, style, overlayStyle } = props;
  return (
    <View style={[{
      flex: 1,
      width: '100%',
      height: '100%',
    }, style]}
    >
      <View style={[{
        position: 'absolute',
        width: '100%',
        height: '100%',
      }, overlayStyle]}
      />
      {children}
    </View>
  );
}


export default Tooltip;
