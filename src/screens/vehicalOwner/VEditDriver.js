import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, Switch} from 'react-native';
import {Dropdown} from 'react-native-material-dropdown';
import {
  InputText,
  FileInput,
  MyProfileImage,
  CustomDropdown,
  CriminalInput,
} from '../../components';
import {Button, Text, Icon} from 'react-native-elements';

export default class VEditDriver extends Component {
  constructor() {
    super();
    this.state = {
      switchValue: false,
    };
  }

  onSwitchChange(value) {
    this.setState({
      switchValue: value,
    });
  }
  render() {
    let data = [
      {
        value: 'Aadhar Card',
      },
      {
        value: 'Passport',
      },
      {
        value: 'Driving License',
      },
      {
        value: 'Pan card',
      },
    ];

    return (
      <View style={{flex: 1}}>
        <MyProfileImage onPress={() => console.log('onpre')} />
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
                  width: '48%',
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
            <CustomDropdown
              label="Select Type of Vehicle"
              data={['1', '2', '3']}
            />
            <FileInput label="Pan Card" />
            <FileInput label="Adhaar Card" />
            <FileInput label="Driving License" />
            <InputText label="Experience in Driving" keyboardType="numeric" />
            <InputText label="Email Address" />
            <InputText label="Mobile number" />
            <InputText
              label="Address"
              renderAccessory={() => <Icon name="location-pin" />}
            />
            <FileInput label="Address Proof" />
            <CriminalInput />
            <Button
              title="Submit"
              onPress={() => this.setState({dialogVisible: false})}
              containerStyle={styles.submitStyle}
            />
          </View>
        </ScrollView>
      </View>
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
