import React from 'react';
import {Text, View, ImageBackground, Image, Dimensions} from 'react-native';
import {Icon} from 'react-native-elements';
import {demoStyles} from '../constant';
const {height} = Dimensions.get('screen');

export const MyProfileImage = ({onPress}) => (
  <View style={styles.containerStyle}>
    <ImageBackground
      source={require('../images/profile-bg.jpg')}
      style={styles.imageBackgroundStyle}>
      <View style={styles.profileContainerStyle}>
        <Image
          source={require('../images/profile.png')}
          style={styles.imageStyle}
        />
        {onPress && (
          <Icon
            name="camera"
            containerStyle={styles.cameraIcon}
            type="font-awesome"
            color="#22B55C"
            reverse
            raised
            size={8}
          />
        )}
      </View>
      <Text style={styles.textStyle}>Lorem Ipsum</Text>
    </ImageBackground>
  </View>
);

const styles = {
  containerStyle: {
    marginTop: 0,
    width: '100%',
    height: height / 3.5,
    backgroundColor: 'clear',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBackgroundStyle: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  textStyle: {
    fontSize: 22,
    color: 'white',
    marginTop: 16,
    fontFamily: 'Poppins-Bold',
  },
  profileContainerStyle: [
    demoStyles.elevationStyle,
    {
      width: 70,
      height: 70,
      borderRadius: 70,
    },
  ],
  cameraIcon: {
    position: 'absolute',
    zIndex: 1000,
    bottom: 0,
    right: -10,
  },
};
