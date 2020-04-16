import React from 'react';
import {StatusBar} from 'react-native';

export const StatusBarComponent = () => {
  return (
    <StatusBar
      backgroundColor="#117eb6"
      barStyle="light-content"
      hidden={false}
      translucent={true}
    />
  );
};
