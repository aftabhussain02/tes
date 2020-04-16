import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';

export const ListDetailItem = ({
  title,
  value,
  titleComponent,
  valueSuffix,
  reverseColor,
  valueStyle,
  titleStyle,
  containerStyle,
  eclipseStyle,
  valueComponent,
}) => (
  <View style={[styles.containerStyle, containerStyle]}>
    {titleComponent || (
      <Text
        style={[
          styles.titleStyle,
          reverseColor && {color: '#7E7E7E'},
          titleStyle,
        ]}
        numberOfLines={eclipseStyle ? 1 : undefined}>
        {title}
      </Text>
    )}
    {valueComponent || (
      <Text
        style={[
          styles.valueStyle,
          reverseColor && {color: '#373737'},
          valueStyle,
        ]}
        numberOfLines={eclipseStyle ? 1 : undefined}>
        {valueSuffix ? valueSuffix + value : value}
      </Text>
    )}
  </View>
);

const styles = StyleSheet.create({
  containerStyle: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingBottom: 10,
  },
  titleStyle: {
    color: '#373737',
    textTransform: 'capitalize',
    width: '50%',
    fontFamily: 'Poppins-Regular',
  },
  valueStyle: {
    color: '#7E7E7E',
    textAlign: 'right',
    width: '50%',
    fontFamily: 'Poppins-Regular',
  },
});
