import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, Switch} from 'react-native';
import {Button, Text} from 'react-native-elements';
import {connect} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import {InputText, Form, PromptModal} from '../../components';
import {
  customerUpdateAttempt,
  updateCustomerUpdateProps,
  customerSignInAttempt,
  customerDeleteAttempt,
} from '../../actions';
import {NavigationActions} from 'react-navigation';

class EditProfileInside extends Component {
  constructor() {
    super();
    this.state = {
      switchValue: false,
      deleteConfirmation: false,
    };
  }

  toggleDeleteModal = () =>
    this.setState(prev => ({
      deleteConfirmation: !prev.deleteConfirmation,
    }));

  componentDidMount() {
    this.props.customerSignInAttempt({first_name: 'first_name'});
    this.props.navigation.setParams({delete: this.toggleDeleteModal});
  }

  onSubmit = () => {
    this.refs.myForm.validate().then(() =>
      this.refs.myForm2.validate().then(s =>
        this.props
          .customerUpdateAttempt(this.props.formData)
          .then(s =>
            this.props
              .customerSignInAttempt({first_name: 'first_name'})
              .then(s =>
                this.props.navigation.dispatch(NavigationActions.back()),
              ),
          )
          .catch(e => console.log(e)),
      ),
    );
  };

  onChangeText = (name, value) => {
    this.props.updateCustomerUpdateProps(name, value);
  };

  onSwitchChange = value => {
    this.setState({
      switchValue: value,
    });
    this.onChangeText('have_creminal_record', value ? 'yes' : 'no');
  };

  render() {
    const {switchValue} = this.state;

    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={styles.backgroundImage}>
          <Form
            ref="myForm"
            style={{
              flex: 1,
              flexDirection: 'row',
              alignSelf: 'stretch',
              justifyContent: 'space-between',
            }}
            errors={this.props.errors}
            onChangeText={this.onChangeText}>
            <InputText
              label="First name"
              containerStyle={{
                width: '48%',
                alignSelf: 'stretch',
              }}
              name="first_name"
              value={this.props.formData.first_name}
              validators={{required: true}}
            />
            <InputText
              label="Last name"
              containerStyle={{
                width: '48%',
                alignSelf: 'stretch',
              }}
              name="last_name"
              value={this.props.formData.last_name}
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
              value={this.props.formData.mobile_number.toString()}
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

            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'stretch',
                marginTop: 30,
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  color: 'gray',
                  fontSize: 14,
                  alignSelf: 'flex-start',
                }}>
                Have any criminal record
              </Text>

              <Switch
                style={{
                  color: 'green',
                }}
                value={this.state.switchValue}
                onValueChange={value => this.onSwitchChange(value)}
              />
            </View>
            {switchValue ? (
              <InputText
                label="Detail about their criminal record"
                name="criminal_record_details"
                value={this.props.formData.criminal_record_details}
              />
            ) : (
              <View />
            )}
          </Form>
          <Button
            title="Submit"
            loading={this.props.isLoading}
            disabled={this.props.isLoading}
            onPress={this.onSubmit}
            containerStyle={styles.submitStyle}
          />
        </View>
        <Spinner visible={this.props.signInLoading} />
        <PromptModal
          visible={this.state.deleteConfirmation}
          onSubmit
          onCancel={this.toggleDeleteModal}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    alignItems: 'center',
    padding: 40,
    paddingTop: 10,
    backgroundColor: 'white',
  },
  submitStyle: {
    width: '100%',
    marginTop: 20,
  },
});

const mapStateToProps = state => {
  const signInLoading = state.customerSignIn.isLoading;
  const {formData, isLoading, success, message} = state.customerUpdate;
  return {formData, isLoading, success, message, signInLoading};
};

export default connect(mapStateToProps, {
  customerUpdateAttempt,
  updateCustomerUpdateProps,
  customerSignInAttempt,
  customerDeleteAttempt,
})(EditProfileInside);
