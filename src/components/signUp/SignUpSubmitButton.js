import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SignUpSubmitButton = ({changeDialogVisibility}) => {
  return (
    <View style={styles.continueCon}>
      <Text onPress={changeDialogVisibility} style={styles.continueStyle}>
        Submit
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  continueCon: {
    marginTop: 60,
    justifyContent: 'center',
    padding: 10,
    borderRadius: 30,
    flexDirection: 'row',
    backgroundColor: '#009fd6',
  },
  continueStyle: {
    flex: 1,
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
  },
});

export default SignUpSubmitButton;
