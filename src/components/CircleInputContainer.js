import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {colors} from '../constant';

export const CircleInputContainer = ({children, error}) => (
  <View style={styles.containerStyle}>
    {children}
    {error != '' && <Text style={styles.errorStyle}>{error}</Text>}
  </View>
);

const styles = StyleSheet.create({
  containerStyle: {
    padding: 10,
    borderBottomColor: '#ECECEC',
    borderBottomWidth: 0.5,
    width: '100%',
  },
  errorStyle: {
    fontSize: 12,
    color: 'rgba(255, 0, 0, 0.8)',
    marginLeft: 20,
    marginTop: 2,
  },
});
