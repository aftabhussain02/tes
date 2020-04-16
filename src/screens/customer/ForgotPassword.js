import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  ScrollView,
} from 'react-native';
import {colors} from '../../constant';
import {Logo, InputText} from '../../components';
import {Button} from 'react-native-elements';
import ForgotPasswordSignInText from '../../components/forgotPassword/ForgotPasswordSignInText';

var {height, width} = Dimensions.get('screen');

export default class ForgotPassword extends Component {
  state = {
    Number: '',
  };

  render() {
    return (
      <ScrollView style={styles.contentContainer}>
        <View style={styles.backgroundImage}>
          <Logo />
          <Text style={styles.txtContinue}>
            Please enter your mobile number, we will send a 4 digit verification
            code to change your password.
          </Text>
          <InputText label="Mobile Number" />
          <Button
            onPress={() => this.props.navigation.navigate('OTPScreen')}
            title="Continue"
            containerStyle={styles.continueStyle}
          />
          <ForgotPasswordSignInText
            goToSignInPressed={() => this.props.navigation.goBack()}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 40,
    // or 'stretch'
  },
  logo: {
    tintColor: 'black',
    resizeMode: 'contain',
    height: width / 6,
    marginTop: height / 10,
  },
  subText: {
    marginTop: 60,
    fontSize: 30,
    color: 'white',
    fontFamily: 'Poppins-Regular',
  },
  txtContinue: {
    marginBottom: 40,
    fontSize: 16,
    color: 'black',
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
  },
  edbtnContainer: {
    backgroundColor: 'white',
    borderRadius: 40,
    alignContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  edContainer: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'flex-end',
    alignItems: 'center',
    padding: 8,
  },
  edMobile: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 10,
    fontFamily: 'Poppins-Regular',
  },
  nextStyle: {
    backgroundColor: '#009fd6',
    borderRadius: 30,
    color: 'white',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    fontFamily: 'Poppins-Regular',
  },
  registerDialog: {
    alignItems: 'center',
  },
  registerNew: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'Poppins-Medium',
  },
  registerSubText: {
    fontSize: 15,
    color: 'black',
    marginTop: 10,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  continueCon: {
    marginTop: 60,
    justifyContent: 'center',
    padding: 10,
    borderRadius: 30,
    flexDirection: 'row',
    backgroundColor: '#009fd6',
  },
  contentContainer: {
    backgroundColor: 'white',
  },
  continueStyle: {
    marginTop: 40,
    width: '100%',
  },
  con: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 10,
    fontFamily: 'Poppins-Regular',
  },
  labelInput: {
    color: 'gray',
  },
  formInput: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    alignSelf: 'stretch',
    marginTop: 20,
  },
  input: {
    borderWidth: 0,
  },
});
