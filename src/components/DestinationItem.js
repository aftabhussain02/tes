import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import {TouchableWrapper} from './TouchableWrapper';
import {colors} from '../constant';

export const DestinationItem = ({title, subTitle, onPress}) => (
  <TouchableWrapper style={{flex: 1}} onPress={onPress}>
    <View style={styles.itemContainer}>
      <Image
        source={require('../images/pin-circle.png')}
        style={styles.iconContainerStyle}
      />
      <View style={styles.detailContainer}>
        <Text style={styles.titleStyle} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.titleStyle} numberOfLines={1}>
          {subTitle}
        </Text>
      </View>
    </View>
  </TouchableWrapper>
);

const styles = StyleSheet.create({
  itemContainer: {
    padding: 20,
    flexDirection: 'row',
    borderBottomColor: colors.borderColor,
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  iconContainerStyle: {
    height: 40,
    width: 40,
  },
  detailContainer: {
    height: 50,
    justifyContent: 'space-between',
    width: '84%',
  },
  titleStyle: {
    fontSize: 14,
    width: '100%',
    fontFamily: 'Poppins-Medium',
  },
});
