import React from 'react';
import {Text} from 'react-native';

const ForgotPasswordSignInText = ({goToSignInPressed}) => {
  return (
    <Text
      style={{
        marginTop: 50,
        color: 'black',
        fontFamily: 'Poppins-Bold',
      }}
      onPress={goToSignInPressed}>
      Back to{' '}
      <Text
        style={{
          textDecorationLine: 'underline',
          color: '#009fd6',
          fontFamily: 'Poppins-Bold',
        }}>
        Sign In
      </Text>
    </Text>
  );
};

export default ForgotPasswordSignInText;
