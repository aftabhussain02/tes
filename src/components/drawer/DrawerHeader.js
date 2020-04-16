import React from 'react';
import {View, Text, Image} from 'react-native';

const DrawerHeader = ({}) => (
  <View
    style={{
      flexDirection: 'row',
      height: 180,
      alignItems: 'center',
      marginLeft: 20,
    }}>
    <Image
      source={require('../../images/profile-pic.png')}
      style={{height: 70, width: 70, borderRadius: 50}}
    />
    <View style={{marginLeft: 20}}>
      <Text
        style={{
          fontSize: 20,
          color: 'white',
          fontFamily: 'Poppins-Medium',
        }}>
        Username
      </Text>
      <Text
        style={{
          fontSize: 15,
          color: 'white',
          fontFamily: 'Poppins-Regular',
        }}>
        User Id: CUST001
      </Text>
    </View>
  </View>
);

export default DrawerHeader;
