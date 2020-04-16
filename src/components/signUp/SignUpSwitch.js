import React from 'react';
import {View, Text, Switch} from 'react-native';

const SignUpSwitch = ({switchValue, switchChange}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignSelf: 'stretch',
        marginTop: 30,
        justifyContent: 'space-between',
      }}>
      <Text
        style={{
          color: 'gray',
          fontSize: 16,
          alignSelf: 'flex-start',
        }}>
        Have any criminal record?
      </Text>
      <Switch
        style={{
          color: 'green',
        }}
        value={switchValue}
        onValueChange={switchChange}
      />
    </View>
  );
};

export default SignUpSwitch;
