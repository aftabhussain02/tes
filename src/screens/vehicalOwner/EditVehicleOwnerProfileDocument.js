import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {FileInput} from '../../components';
import {Button} from 'react-native-elements';

export default class EditVehicleOwnerProfileDocument extends Component {
  render() {
    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={styles.backgroundImage}>
          <FileInput label="Pan Card" />
          <FileInput label="Aadhar Card" />
          <FileInput label="Business Registration Cerificate" />
          <FileInput label="Driving License" />
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
