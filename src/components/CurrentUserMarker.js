import React from 'react';
import {Image} from 'react-native';

export const CurretnUserMarker = ({params}) => (
  <Image
    source={require('../images/current-point.png')}
    style={{height: 40, width: 40, zIndex: 1000}}
  />
);
