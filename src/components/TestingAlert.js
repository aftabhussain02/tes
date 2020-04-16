import React from 'react';
import {Alert} from 'react-native';

export const TestingAlert = text =>
  Alert.alert(
    'Alert Title',
    text,
    [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ],
    {cancelable: true},
  );
