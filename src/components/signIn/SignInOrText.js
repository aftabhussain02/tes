import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SignInOrText = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 30,
        marginStart: 50,
        marginEnd: 50,
      }}>
      <View style={styles.lineStyle} />
      <Text style={{color: '#919191'}}>OR</Text>
      <View style={styles.lineStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  lineStyle: {
    flex: 1,
    marginRight: 10,
    marginLeft: 10,
    borderBottomWidth: 0.5,
    height: 1,
    borderBottomColor: '#919191',
  },
});

export default SignInOrText;
