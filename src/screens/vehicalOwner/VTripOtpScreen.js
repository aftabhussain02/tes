import React, {Component} from 'react';
import {View, KeyboardAvoidingView, Image} from 'react-native';
import {withTheme, Button, Text} from 'react-native-elements';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {Logo} from '../../components';

class VTripOtpScreen extends Component {
  state = {
    heading:
      'Please enter 4 digit verification code that you received from the parcel receiver.',
  };

  render() {
    const {
      colors: {fontColor, primary},
    } = this.props.theme;
    const {
      container,
      headingStyle,
      formContainer,
      logoContainer,
      forgotPasswordTextStyle,
      headingContainer,
      buttonContainerStyle,
      loginButtonStyle,
    } = styles;

    return (
      <View style={container}>
        <Text
          style={{fontFamily: 'Poppins-Bold', fontSize: 24, marginBottom: 40}}>
          Otp for Confirmation
        </Text>
        <View style={formContainer}>
          <View style={headingContainer}>
            <Text style={{...headingStyle, color: fontColor}}>
              {this.state.heading}
            </Text>
          </View>

          <OTPInputView
            style={styles.otpStyle}
            pinCount={4}
            autoFocusOnLoad
            codeInputFieldStyle={{borderColor: '#B8B8B8', borderRadius: 10}}
            codeInputHighlightStyle={{borderColor: primary}}
          />

          <Button
            onPress={() =>
              this.props.navigation.navigate('VDeliveryConfirmation')
            }
            title="Confirm"
            containerStyle={buttonContainerStyle}
          />

          <View
            style={{
              justifyContent: 'space-between',
              height: '8%',
              marginTop: 'auto',
            }}>
            <View style={forgotPasswordTextStyle}>
              <Text style={loginButtonStyle}>Resend OTP</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 40,
    paddingTop: 16,
  },
  headingStyle: {
    fontSize: 17,
    fontWeight: '800',
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
  },
  logoContainer: {
    height: hp('30%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingContainer: {
    paddingBottom: 30,
    justifyContent: 'center',
  },
  formContainer: {
    height: '70%',
    width: '100%',
  },
  forgotPasswordTextStyle: {
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
  buttonContainerStyle: {
    paddingTop: 40,
    paddingBottom: 20,
  },
  loginButtonStyle: {
    borderBottomWidth: 1,
    fontWeight: 'bold',
    marginLeft: 5,
    color: '#2C2C2C',
    borderColor: '#4E4E4E',
    fontFamily: 'Poppins-Bold',
  },
  otpStyle: {
    width: 240,
    height: 50,
    alignSelf: 'center',
  },
};

export default withTheme(VTripOtpScreen);
