import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {InputText} from '../../components';
import {Button} from 'react-native-elements';

export default class EditVehicleOwnerProfilePassword extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.backgroundImage}>
          <View
            style={{
              flex: 1,
              alignSelf: 'stretch',
              justifyContent: 'space-between',
            }}>
            <InputText label="Current Password" secureTextEntry />
            <InputText label="New Password" secureTextEntry />
            <InputText label="Confirm Password" secureTextEntry />
            <Button title="Submit" containerStyle={{marginTop: 20}} />
          </View>
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
    // or 'stretch'
  },
});
