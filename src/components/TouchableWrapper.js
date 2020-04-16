import React from 'react';
import {TouchableHighlight} from 'react-native';

export const TouchableWrapper = props => (
  <TouchableHighlight {...props} underlayColor="gray">
    {props.children}
  </TouchableHighlight>
);
