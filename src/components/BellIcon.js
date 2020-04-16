import React from 'react';
import {View} from 'react-native';
import {Icon, Badge} from 'react-native-elements';
import {colors} from '../constant';

export const BellIcon = ({navigation}) => (
  <View style={{paddingRight: 15}}>
    <Icon
      name="bell-o"
      color="#fff"
      type="font-awesome"
      underlayColor={colors.primary}
      onPress={() => navigation.navigate('Notification_Notifications')}
    />
    <Badge
      status="error"
      containerStyle={{position: 'absolute', top: -2, right: 16}}
    />
  </View>
);
