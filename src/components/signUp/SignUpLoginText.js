import React from 'react';
import {Text} from 'react-native';

const SignUpLoginText = ({goToLogin}) => {
  return (
    <Text
      style={{
        marginTop: 50,
        color: 'black',
        fontFamily: 'Poppins-Regular',
      }}>
      Already have an Account?{' '}
      <Text
        onPress={() => goToLogin()}
        style={{
          textDecorationLine: 'underline',
          color: '#009fd6',
          fontFamily: 'Poppins-Medium',
        }}>
        Sign In
      </Text>
    </Text>
  );
};

export default SignUpLoginText;
