import React from 'react';
import {Image} from 'react-native';

export const CustomMarker = ({params}) => (
  <Image
    source={require('../images/package-location.png')}
    style={{height: 30, width: 30, zIndex: 1000}}
  />
);
