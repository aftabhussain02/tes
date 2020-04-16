import React from 'react';
import FloatingLabel from 'react-native-floating-labels';
import {StyleSheet} from 'react-native';

const SignUpFloatingLabel = ({labelText}) => {
  return (
    <FloatingLabel
      labelStyle={styles.labelInput}
      inputStyle={styles.input}
      style={{
        borderBottomWidth: 1,
        borderColor: 'gray',
        alignSelf: 'stretch',
        marginTop: 10,
      }}
      disableFullscreenUI={true}>
      {labelText}
    </FloatingLabel>
  );
};

const styles = StyleSheet.create({
  labelInput: {
    color: 'gray',
    fontSize: 14,
  },
  input: {
    borderWidth: 0,
  },
});

export default SignUpFloatingLabel;
