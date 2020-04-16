import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Text} from 'react-native-elements';

const ListDetailImageItem = ({
  title,
  imageValue,
  titleComponent,
  reverseColor,
  titleStyle,
}) => (
  <View style={styles.containerStyle}>
    {titleComponent || (
      <Text
        style={[
          styles.titleStyle,
          reverseColor && {color: '#7E7E7E'},
          titleStyle,
        ]}>
        {title}
      </Text>
    )}
    <Image
      source={require('../images/dummy.png')}
      style={{width: 25, height: 25, resizeMode: 'contain'}}
    />
  </View>
);

export default ListDetailImageItem;

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
