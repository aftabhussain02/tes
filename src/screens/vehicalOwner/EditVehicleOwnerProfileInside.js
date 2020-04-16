import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {InputText} from '../../components';
import {Button} from 'react-native-elements';

export default class EditVehicleOwnerProfileInside extends Component {
  render() {
    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={styles.backgroundImage}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignSelf: 'stretch',
              justifyContent: 'space-between',
            }}>
            <InputText
              label="First name"
              containerStyle={{
                width: '49%',
                alignSelf: 'stretch',
              }}
            />
            <InputText
              label="Last name"
              containerStyle={{
                width: '48%',
                alignSelf: 'stretch',
              }}
            />
          </View>
          <InputText label="Business Type" />
          <InputText label="Working Hours" />
          <InputText label="Home Address" isAddress />
          <InputText label="Work Address" isAddress />
          <InputText label="House Number" />
          <InputText label="Street" />
          <InputText label="City" />
          <InputText label="Zip Code" keyboardType="numeric" />
          <InputText label="State" />
          <Button title="Submit" containerStyle={styles.submitStyle} />
        </View>
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
