import React, {Component} from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import {CheckBox, Button, Icon} from 'react-native-elements';
import {InputText, CustomDropdown, RadioButton} from '../../components';
import {dropdownObj} from '../../constant';

export default class EditVehicleOwnerProfilePaymentDetails extends Component {
  state = {
    card: 'debit',
  };

  _renderForm() {
    if (this.state.card == 'debit') {
      return (
        <View styles={styles.formContainer}>
          <InputText
            label="Card Number"
            renderAccessory={() => (
              <Icon type="font-awesome" name="cc-mastercard" color="#8C8C8C" />
            )}
          />
          <InputText label="Card Holder Name" />
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
            }}>
            <CustomDropdown
              label="Expire Date"
              containerStyle={{width: '45%'}}
            />
            <CustomDropdown containerStyle={{width: '45%'}} label="" />
          </View>
          <InputText
            label="CVV"
            labelTextStyle={{textTransform: 'none'}}
            secureTextEntry
            passwordShowDisabled
          />
          <Button title="submit" containerStyle={styles.buttonContainer} />
        </View>
      );
    }
    return (
      <View styles={styles.formContainer}>
        <InputText
          label="Card Number"
          renderAccessory={() => (
            <Icon type="font-awesome" name="cc-mastercard" color="#8C8C8C" />
          )}
        />
        <InputText label="Card Holder Name" />
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
          }}>
          <CustomDropdown label="Expire Date" containerStyle={{width: '45%'}} />
          <CustomDropdown containerStyle={{width: '45%'}} label="" />
        </View>
        <InputText
          label="CVV"
          labelTextStyle={{textTransform: 'none'}}
          secureTextEntry
          passwordShowDisabled
        />
        <Button title="submit" containerStyle={styles.buttonContainer} />
      </View>
    );
  }
  render() {
    return (
      <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.backgroundImage}>
          <View style={styles.checkboxContainer}>
            <RadioButton
              title="Debit Card"
              checked={this.state.card == 'debit'}
              onPress={() =>
                this.setState({
                  card: 'debit',
                })
              }
            />

            <RadioButton
              title="Credit Card"
              checked={this.state.card == 'credit'}
              onPress={() =>
                this.setState({
                  card: 'credit',
                })
              }
            />
          </View>
          <View style={{width: '100%'}}>{this._renderForm()}</View>
        </View>
      </ScrollView>
    );
  }
}

const styles = {
  backgroundImage: {
    flex: 1,
    alignItems: 'center',
    padding: 40,
    paddingTop: 10,
    backgroundColor: 'white',
    // or 'stretch'
  },
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 30,
    width: '100%',
  },
  checboxTitleStyle: {
    color: '#848484',
    fontFamily: 'Poppins-Medium',
  },
  formContainer: {
    width: '100%',
  },
  buttonContainer: {
    paddingTop: 20,
  },
};
