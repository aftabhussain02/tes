import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import {Text, Button, Icon} from 'react-native-elements';
import {connect} from 'react-redux';
import {InputText, Logo, FileInput, Form, ErrorModal} from '../../components';
import {updateVehicleSignUpProps, vehicleSignupAttempt} from '../../actions';
import {NavigationActions, StackActions} from 'react-navigation';

class VSignUpScreen extends Component {
  constructor() {
    super();
    this.state = {
      textValue: '',
      showDetail: false,
    };
  }

  onSubmit = () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: 'VSignUpOtpScreen'})],
    });
    this.refs.myForm1
      .validate()
      .then(() => {
        this.refs.myForm2
          .validate()
          .then(() => {
            this.props
              .vehicleSignupAttempt(this.props.formData)
              .then(s => this.props.navigation.dispatch(resetAction))
              .catch(e => console.log(e));
          })
          .catch(e => console.log('inside'));
      })
      .catch(() => this.refs.myForm2.validate());
  };

  onChangeText = (name, value) => {
    this.props.updateVehicleSignUpProps(name, value);
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}} backgroundColor="white">
        <ScrollView
          style={{flex: 1}}
          contentContainerStyle={styles.contentContainer}
          keyboardShouldPersistTaps="always">
          <Logo />
          <Form
            ref="myForm1"
            style={[styles.deviderContainer, {marginTop: 0}]}
            errors={this.props.errors}
            onChangeText={this.onChangeText}>
            <InputText
              label="First name"
              name="first_name"
              value={this.props.formData.first_name}
              validators={{required: true}}
              containerStyle={{width: '48%'}}
            />
            <InputText
              label="Last name"
              name="last_name"
              value={this.props.formData.last_name}
              validators={{required: true}}
              containerStyle={{width: '48%'}}
            />
          </Form>

          <Form
            ref="myForm2"
            errors={this.props.errors}
            onChangeText={this.onChangeText}>
            <InputText
              label="Bussiness Type"
              value={this.props.formData.last_name}
              name="business_type"
              validators={{required: true}}
            />
            <FileInput label="Pan Card" />
            <FileInput label="Adhaar Card" />
            <FileInput label="Business Registeration Certificate" />
            <FileInput label="Driving License" />
            <InputText
              label="Vehicle Number"
              name="vehicle_number"
              value={this.props.formData.vehicle_number}
              validators={{required: true}}
            />
            <InputText
              label="Working Hours"
              name="working_hours"
              value={this.props.formData.working_hours}
              validators={{required: true}}
            />
            <InputText
              label="Home Address"
              validators={{required: true}}
              renderAccessory={() => <Icon name="location-pin" />}
              name="home_address"
              value={this.props.formData.home_address}
            />
            <InputText
              label="Work Address"
              validators={{required: true}}
              renderAccessory={() => <Icon name="location-pin" />}
              name="work_address"
              value={this.props.formData.work_address}
            />
            <InputText
              label="House Number"
              validators={{required: true}}
              name="house_number"
              value={this.props.formData.house_number}
            />
            <InputText
              label="Street"
              name="street"
              validators={{required: true}}
              value={this.props.formData.street}
            />
            <InputText
              label="City"
              name="city"
              validators={{required: true}}
              value={this.props.formData.city}
            />
            <InputText
              label="Zip code"
              name="zip_code"
              keyboardType="numeric"
              validators={{required: true}}
              value={this.props.formData.zip_code}
            />
            <InputText
              name="state"
              label="State"
              validators={{required: true}}
              value={this.props.formData.state}
            />
          </Form>
          <Button
            title="Sign Up"
            loading={this.props.isLoading}
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
          <ErrorModal
            visible={!this.props.success && this.props.message}
            description={this.props.message}
            onPress={() =>
              this.props.updateVehicleSignUpProps('message', '', true)
            }
          />
        </ScrollView>
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
    padding: 40,
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
    padding: 40,
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
  const {formData, isLoading, success, message} = state.vehicleSignUp;
  return {formData, isLoading, success, message};
};

export default connect(mapStateToProps, {
  updateVehicleSignUpProps,
  vehicleSignupAttempt,
})(VSignUpScreen);
