import React from 'react';
import {Icon} from 'react-native-elements';
import {colors} from '../constant';

export const BarIcon = ({navigation}) => (
  <Icon
    name="bars"
    color="#fff"
    underlayColor={colors.primary}
    type="font-awesome"
    onPress={() => navigation.toggleDrawer()}
    containerStyle={{paddingLeft: 10}}
  />
);
