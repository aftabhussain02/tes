import React from 'react';
import {Text, View} from 'react-native';
import {CustomDialog} from './CustomDialog';
import {Button, Icon} from 'react-native-elements';

export const ErrorModal = ({visible, onPress, description}) => (
  <CustomDialog visible={visible ? true : false} onTouchOutside={onPress}>
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Icon name="ios-warning" type="ionicon" color="#F65656" size={40} />
        <Text style={styles.headingStyle}>Oh Snap!</Text>
        <Text style={styles.descriptionStyle}>
          {description || 'Something Went Wrong Please Try!'}
        </Text>
      </View>
      <Button
        title="Dismiss"
        buttonStyle={styles.buttonStyle}
        containerStyle={{width: '100%', borderRadius: 0, margin: 0}}
        onPress={onPress}
      />
    </View>
  </CustomDialog>
);

const styles = {
  container: {
    borderRadius: 4,
    overFlow: 'hidden',
    width: '100%',
  },
  innerContainer: {
    padding: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingStyle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    marginTop: 10,
  },
  descriptionStyle: {
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
  buttonStyle: {
    backgroundColor: '#F65656',
    width: '100%',
    borderRadius: 0,
  },
};
