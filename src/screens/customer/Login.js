import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';

import {
  StatusBarComponent,
  LoginTextInput,
  LoginDialog,
  LoginSignUpText,
  ErrorModal,
} from '../../components';
import {connect} from 'react-redux';
import {updateLoginProps, vehicleLoginAttempt} from '../../actions';

var {height, width} = Dimensions.get('screen');

var radio_props = [
  {label: 'Customer', value: 0},
  {label: 'Vehicle Owner', value: 1},
];

class Login extends Component {
  state = {
    dialogVisible: false,
    ldialogVisible: false,
  };

  componentDidMount() {
    this.props.navigation.navigate('HomeDestination');
  }

  setDialogVisible(visible) {
    this.setState({dialogVisible: visible});
  }

  setLDialogVisible(visible) {
    this.setState({ldialogVisible: visible});
  }

  loginContinuePress = value => {
    this.setState({ldialogVisible: false});
    if (value) {
      this.props
        .vehicleLoginAttempt(this.props.formData)
        .then(() => this.props.navigation.navigate('VSignInOtpScreen'));
    } else {
      this.props.navigation.navigate('SignInScreen');
    }
  };

  signupContinuePress = value => {
    this.setState({dialogVisible: false});
    if (value) {
      this.props.navigation.navigate('VSignUpScreen');
    } else {
      this.props.navigation.navigate('SignUp');
    }
  };

  render() {
    return (
      <ImageBackground
        source={require('../../images/splashbg.jpg')}
        style={styles.backgroundImage}>
        <StatusBarComponent />
        <Image style={styles.logo} source={require('../../images/logo.png')} />
        <Text style={styles.subText}>Welcome Back,</Text>
        <Text style={styles.txtContinue}>Sign-in to continue</Text>
        <LoginTextInput
          setLDialogVisible={this.setLDialogVisible.bind(this)}
          value={this.props.formData.mobile}
          onChangeText={text => this.props.updateLoginProps('mobile', text)}
        />
        <LoginDialog
          visible={this.state.dialogVisible}
          headerText="Register New user"
          subTitleText={`Please Select your choice \n for new register.`}
          radio_props={radio_props}
          onTouchOutside={() => this.setState({dialogVisible: false})}
          radioFormValue={value => this.setState({value: value})}
          continueClicked={this.signupContinuePress}
        />
        <LoginDialog
          visible={this.state.ldialogVisible}
          headerText="Login"
          subTitleText={`Please select your choice \n for login.`}
          radio_props={radio_props}
          onTouchOutside={() => this.setState({ldialogVisible: false})}
          continueClicked={this.loginContinuePress}
        />
        <ErrorModal
          visible={!this.props.success && this.props.message}
          description={this.props.message}
          onPress={() => this.props.updateLoginProps('message', '')}
        />
        <LoginSignUpText setDialogVisible={this.setDialogVisible.bind(this)} />
      </ImageBackground>
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
    // or 'stretch'
  },
  logo: {
    resizeMode: 'contain',
    height: width / 6,
    marginTop: height / 5,
  },
  subText: {
    marginTop: 60,
    fontSize: 26,
    color: 'white',
    fontFamily: 'Poppins-Bold',
  },
  txtContinue: {
    marginTop: 5,
    fontSize: 18,
    color: 'white',
    fontFamily: 'Poppins-Medium',
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
});

const mapStateToProps = state => {
  const {formData, success, errors, isLoading, message} = state.vehicleLogin;
  return {formData, success, errors, isLoading, message};
};

export default connect(mapStateToProps, {
  updateLoginProps,
  vehicleLoginAttempt,
})(Login);
