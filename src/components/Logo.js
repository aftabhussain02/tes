import React from 'react';
import {Image} from 'react-native';

export const Logo = () => (
  <Image style={styles.logo} source={require('../images/logo.png')} />
);

const styles = {
  logo: {
    tintColor: 'black',
    resizeMode: 'contain',
    height: 200,
    width: 200,
    marginTop: 40,
  },
};
