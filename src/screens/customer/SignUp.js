import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, SafeAreaView, Switch} from 'react-native';
import {InputText, Logo, Form, ErrorModal} from '../../components';
import {Text, Button} from 'react-native-elements';
import {connect} from 'react-redux';
import {
  dispatchType,
  RESET_CUSTOMER_SIGNUP,
  updateCustomerSignUpProps,
  customerSignupAttempt,
} from '../../actions';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      switchValue: false,
      showDetail: false,
    };
  }

  onSubmit = () => {
    this.refs.myForm.validate().then(() =>
      this.refs.myForm2.validate().then(s =>
        this.props
          .customerSignupAttempt(this.props.formData)
          .then(s => this.props.dispatchType(RESET_CUSTOMER_SIGNUP))
          .catch(e => console.log(e)),
      ),
    );
  };

  onChangeText = (name, value) => {
    this.props.updateCustomerSignUpProps(name, value);
  };

  onSwitchChange = value => {
    this.setState({
      switchValue: value,
    });
    this.onChangeText('have_creminal_record', value ? 'yes' : 'no');
  };

  render() {
    const {showDetail} = this.state;
    return (
      <SafeAreaView style={{flex: 1}} backgroundColor="white">
        <ScrollView
          style={{flex: 1}}
          contentContainerStyle={styles.contentContainer}
          keyboardShouldPersistTaps="always">
          <Logo />
          <Form
            ref="myForm"
            style={[styles.deviderContainer, {marginTop: 0}]}
            errors={this.props.errors}
            onChangeText={this.onChangeText}>
            <InputText
              label="First name"
              name="first_name"
              value={this.props.formData.first_name}
              containerStyle={{width: '48%'}}
              validators={{required: true}}
            />
            <InputText
              label="Last name"
              name="last_name"
              value={this.props.formData.last_name}
              containerStyle={{width: '48%'}}
              validators={{required: true}}
            />
          </Form>
          <Form
            ref="myForm2"
            errors={this.props.errors}
            onChangeText={this.onChangeText}>
            <InputText
              label="Email address"
              name="email"
              value={this.props.formData.email}
              validators={{required: true}}
            />

            <InputText
              label="Mobile number"
              name="mobile_number"
              value={this.props.formData.mobile_number}
              validators={{required: true, min: 10, max: 10}}
            />

            <InputText
              label="Address"
              name="address"
              value={this.props.formData.address}
              validators={{required: true}}
            />
            <InputText
              inputType="imagePicker"
              label="Address proof"
              // validators={{required: true}}
            />
            <View style={styles.deviderContainer}>
              <Text style={styles.crimeText}>Have any criminal record?</Text>

              <Switch
                style={{
                  color: 'green',
                }}
                value={this.state.switchValue}
                onValueChange={this.onSwitchChange}
              />
            </View>

            {(showDetail && (
              <InputText
                label="Detail about their criminal record"
                name="criminal_record_details"
                value={this.props.formData.criminal_record_details}
              />
            )) || <View />}
          </Form>
          <Button
            title="Continue"
            onPress={this.onSubmit}
            containerStyle={styles.continueStyle}
          />

          <Text style={styles.haveAccountTextStyle}>
            Already have an Account?{' '}
            <Text
              onPress={() => this.props.navigation.goBack()}
              style={styles.signInText}>
              Sign In
            </Text>
          </Text>
        </ScrollView>

        <ErrorModal
          visible={!this.props.success && this.props.message}
          description={this.props.message}
          onPress={() =>
            this.props.updateCustomerSignUpProps('message', '', true)
          }
        />
      </SafeAreaView>
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
  deviderContainer: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  signInText: {
    textDecorationLine: 'underline',
    color: '#009fd6',
    fontFamily: 'Poppins-Medium',
  },
  crimeText: {
    color: 'gray',
    fontSize: 16,
    alignSelf: 'flex-start',
  },
  haveAccountTextStyle: {
    marginTop: 50,
    color: 'black',
    fontFamily: 'Poppins-Regular',
  },
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: 40,
    paddingBottom: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueStyle: {
    width: '100%',
    marginTop: 20,
  },
});

const mapStateToProps = state => {
  const {formData, isLoading, success, message} = state.customerSignup;
  return {formData, isLoading, success, message};
};

export default connect(mapStateToProps, {
  updateCustomerSignUpProps,
  customerSignupAttempt,
  dispatchType,
})(SignUp);
