import React from 'react';
import {Modal, View, Text} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Icon} from 'react-native-elements';

export const ModalBox = ({
  children,
  heading,
  visible,
  onPressClose,
  animationType = 'fade',
}) => (
  <Modal animationType={animationType} transparent={true} visible={visible}>
    <View style={styless.container}>
      <View style={styless.innerContainer}>
        {onPressClose && (
          <Icon
            name="close"
            onPress={onPressClose}
            color="#333"
            underlayColor="#fff"
            containerStyle={{position: 'absolute', top: 10, right: 10}}
          />
        )}
        <Text style={styless.headingStyle}>{heading}</Text>
        {children}
      </View>
    </View>
  </Modal>
);

const styless = {
  container: {
    marginTop: 22,
    backgroundColor: 'rgba(0,0,0,0.4)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 20,
    paddingBottom: 20,
    alignSelf: 'center',
    color: '#333',
  },
  innerContainer: {
    width: wp('95%') > 400 ? 400 : wp('95%'),
    borderRadius: 10,
    paddingTop: 0,
    backgroundColor: '#fff',
  },
};
