import React from 'react';
import {View, Image} from 'react-native';
import {Text} from 'react-native-elements';
import {demoStyles, colors} from '../constant';
import {TouchableWrapper} from './TouchableWrapper';
import {ListDetailItem} from './ListDetailItem';

export const DriverListItem = ({onPress}) => (
  <TouchableWrapper onPress={onPress}>
    <View style={styles.container}>
      <View style={styles.imageContainerStyle}>
        <Image
          source={require('../images/driver-copy.jpg')}
          style={styles.imageStyle}
        />
      </View>
      <View style={styles.detailContainer}>
        <ListDetailItem
          title="Lorem Ipsum"
          titleStyle={{fontFamily: 'Poppins-Bold'}}
        />
        <ListDetailItem
          title="Mobile Number"
          value="9090909090"
          eclipseStyle
          reverseColor
        />
        <ListDetailItem
          title="Email Address"
          value="loremipsum@gmail.com"
          eclipseStyle
          reverseColor
        />
      </View>
      <View style={styles.viewTextStyle}>
        <Text
          style={{
            color: '#fff',
            transform: [{rotate: '-90deg'}],
            position: 'absolute',
            width: 100,
            textAlign: 'center',
          }}>
          View Details
        </Text>
      </View>
    </View>
  </TouchableWrapper>
);

const styles = {
  container: [
    demoStyles.elevationStyle,
    {
      flexDirection: 'row',
      borderRadius: 5,
      overflow: 'hidden',
      flex: 1,
    },
  ],
  imageContainerStyle: {
    backgroundColor: '#fff',
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  imageStyle: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  detailContainer: {
    flex: 0.7,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  viewTextStyle: {
    flex: 0.05,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
};
