import React from 'react';
import {Text, View} from 'react-native';
import {Callout} from 'react-native-maps';

export const CustomCallOut = ({params}) => (
  <Callout style={{width: 120, padding: 10, borderRadius: 10}}>
    <Text style={{fontFamily: 'Poppins-Bold', fontSize: 12}}>Sender Name</Text>
    <Text style={{paddingBottom: 4, fontSize: 12}}>
      935, Ridgewood St, Piscataway, NJ 08854
    </Text>
    <Text style={{fontSize: 12}}>9090909090</Text>
  </Callout>
);
