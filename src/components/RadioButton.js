import React from 'react';
import {StyleSheet} from 'react-native';
import {CheckBox} from 'react-native-elements';

export const RadioButton = props => (
  <CheckBox
    center
    titleProps={{
      style: [
        styles.checboxTitleStyle,
        props.titleStyle,
        props.checked && props.checkedTitleStyle,
      ],
    }}
    title="Debit Card"
    checkedIcon="dot-circle-o"
    uncheckedIcon="circle-o"
    containerStyle={styles.containerStyle}
    {...props}
  />
);

const styles = StyleSheet.create({
  checboxTitleStyle: {
    color: '#848484',
    fontFamily: 'Poppins-Medium',
    fontWeight: 'bold',
  },
  containerStyle: {
    padding: 0,
    margin: 0,
    backgroundColor: 'transparent',
    borderWidth: 0,
    marginLeft: 0,
    marginRight: 0,
  },
});
