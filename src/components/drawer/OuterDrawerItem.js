import React from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';

const OuterDrawerItem = ({label, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={{flexDirection: 'row', marginTop: 12, marginBottom: 24}}>
      <Image
        source={require('../../images/settings-white.png')}
        style={{
          tintColor: 'lightgray',
          height: 22,
          width: 22,
          marginLeft: 18,
          marginRight: 30,
        }}
      />
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>
        {label}
      </Text>
    </View>
  </TouchableOpacity>
);

export default OuterDrawerItem;
