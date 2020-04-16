import React from 'react';
import {Text, View, Image} from 'react-native';
import {Icon} from 'react-native-elements';
import {colors, demoStyles} from '../constant';

export const UploadPhoto = ({containerStyle, heading, source, imageHeading}) =>
  source ? (
    <View
      style={[
        styles.container,
        demoStyles.elevationStyle,
        {marginBottom: 0},
        containerStyle,
      ]}>
      <Icon
        name="closecircle"
        containerStyle={{
          position: 'absolute',
          top: -0,
          right: -0,
          zIndex: 1000,
        }}
        type="antdesign"
        color="#C30705"
        underlayColor="transparent"
        size={16}
        onPress={() => console.log('touchable')}
      />
      <Image source={source} style={{height: '100%', width: '100%'}} />
    </View>
  ) : (
    <View style={[styles.container, containerStyle]}>
      <Icon name="plus" type="antdesign" size={30} color="#7F7F7F" />
    </View>
  );

const styles = {
  container: {
    borderWidth: 1,
    borderRadius: 0.5,
    borderStyle: 'dashed',
    borderColor: '#7F7F7F',
    height: '28%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    overflow: 'hidden',
  },
  headingStyle: {
    textTransform: 'capitalize',
    marginTop: 4,
  },
  imageHeadingStyle: {
    height: 20,
    width: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
  },
};
