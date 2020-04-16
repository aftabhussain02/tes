import React from 'react';
import {Text} from 'react-native';

export const LoginSignUpText = ({setDialogVisible}) => {
  return (
    <Text
      style={{
        marginTop: 20,
        color: 'white',
      }}
      onPress={() => setDialogVisible(true)}>
      <Text style={{fontFamily: 'Poppins-Regular'}}>
        Don't have an Account?{' '}
      </Text>
      <Text
        style={{
          textDecorationLine: 'underline',
          fontFamily: 'Poppins-Bold',
        }}>
        SIGN UP
      </Text>
    </Text>
  );
};
