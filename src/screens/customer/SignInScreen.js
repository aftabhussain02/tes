import React, {Component} from 'react';
import {View, ScrollView, StyleSheet, Image, Dimensions} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import {connect} from 'react-redux';
import SignInOrText from '../../components/signIn/SignInOrText';
import {StatusBarComponent, Logo, InputText, Form} from '../../components';
import {colors} from '../../constant';
import {customerSignInAttempt, updateCustomerSignInProps} from '../../actions';

var {width} = Dimensions.get('screen');

class SignInScreen extends Component {
  state = {
    password: '',
    Number: '',
  };

  onPress = () => {
    this.refs.myForm
      .validate()
      .then(s => this.props.customerSignInAttempt(this.props.formData));
  };

  onChangeText = (name, value) => {
    this.props.updateCustomerSignInProps(name, value);
  };

  render() {
    return (
      <ScrollView
        style={{backgroundColor: 'white'}}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <StatusBarComponent />
          <View style={styles.formContaninerStyle}>
            <Logo />
            <Form
              ref="myForm"
              errors={this.props.errors}
              onChangeText={this.onChangeText}>
              <InputText
                label="First Name"
                name="first_name"
                value={this.props.formData.first_name}
                validators={{required: true}}
              />
            </Form>
            <Button
              title="Login"
              titleStyle={{fontFamily: 'Poppins-Medium'}}
              onPress={this.onPress}
              containerStyle={styles.continueStyle}
            />
            <SignInOrText />
            <Button
              icon={
                <Icon
                  type="font-awesome"
                  name="facebook-square"
                  color="#fff"
                  containerStyle={{padding: 0, margin: 0, marginRight: 10}}
                />
              }
              titleStyle={{fontFamily: 'Poppins-Medium'}}
              containerStyle={styles.facebookStyle}
              title="Continue with Facebook"
              buttonStyle={{backgroundColor: '#3b5998'}}
            />
            <Button
              title="Forgot Password?"
              type="clear"
              titleStyle={{color: colors.pink, fontSize: 14}}
              onPress={() => {
                this.props.navigation.navigate('ForgotPassword');
              }}
              containerStyle={{marginTop: 'auto'}}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  formContaninerStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingBottom: 18,
  },
  container: {
    flex: 1,
    paddingHorizontal: 26,
    paddingBottom: 18,
  },
  containers: {
    flex: 1,
  },
  labelInput: {
    color: 'gray',
  },
  input: {
    borderWidth: 0,
  },

  logo: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'grey',
  },
  textInput: {
    height: 60,
    borderRadius: 3,
    borderWidth: 1,

    borderColor: '#ECF0F3',
    paddingHorizontal: 19,
  },
  imageview: {
    marginTop: 60,
    height: width / 6,

    alignSelf: 'center',
    resizeMode: 'contain',
    overflow: 'visible',
    tintColor: 'black',
  },

  formInput: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    alignSelf: 'stretch',
    marginTop: 30,
  },
  button: {
    marginTop: 40,
    fontSize: 14,
    padding: 10,
    borderRadius: 30,
    alignSelf: 'stretch',
    backgroundColor: '#009fd6',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  continueStyle: {
    width: '100%',
    marginTop: 30,
  },
  facebookStyle: {
    width: '100%',
  },
});

const mapStateToProps = state => {
  return {...state.customerSignIn};
};

export default connect(mapStateToProps, {
  customerSignInAttempt,
  updateCustomerSignInProps,
})(SignInScreen);
