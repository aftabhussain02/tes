import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  Dimensions,
  ScrollView,
} from 'react-native';

import {InputText} from '../../components';
import {Button} from 'react-native-elements';

var {height, width} = Dimensions.get('screen');

export default class ChangePassword extends Component {
  state = {
    password: '',
  };

  render() {
    return (
      <ScrollView
        style={{backgroundColor: 'white'}}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.backgroundImage}>
          <StatusBar
            backgroundColor="#117eb6"
            barStyle="light-content"
            hidden={false}
            translucent={true}
          />
          <Image
            style={styles.logo}
            source={require('../../images/logo.png')}
          />
          <Text style={styles.txtContinue}>Please change your password.</Text>

          <InputText label="Password" secureTextEntry />
          <InputText label="New Password" secureTextEntry />

          <Button title="Submit" containerStyle={styles.buttonContainerStyle} />

          <Text
            style={{
              marginTop: 50,
              color: 'black',
              fontFamily: 'Poppins-Bold',
            }}>
            Back to{' '}
            <Text
              onPress={() => this.props.navigation.navigate('SignInScreen')}
              style={{
                textDecorationLine: 'underline',
                color: '#009fd6',
                fontFamily: 'Poppins-Bold',
              }}>
              Sign In
            </Text>
          </Text>
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
    padding: 40,
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
    marginTop: 60,
    fontSize: 16,
    color: 'black',
    fontFamily: 'Poppins-Regular',
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
    paddingVertical: 10,
  },
  continueStyle: {
    flex: 1,
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
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
  buttonContainerStyle: {
    paddingTop: 40,
    width: '100%',
    paddingBottom: 20,
  },
});
