import React from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import {demoStyles} from '../constant';

export const MapButton = props => (
  <View style={styles.buttonContainer}>
    <Button {...props} containerStyle={{width: '90%'}} />
  </View>
);

const styles = {
  buttonContainer: [
    demoStyles.elevationStyle,
    {
      position: 'absolute',
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: 80,
      zIndex: 100,
      backgroundColor: 'rgba(255,255,255,0.8)',
    },
  ],
};
