import React, {Component} from 'react';
import {View, SafeAreaView, StyleSheet, TextInput, Text} from 'react-native';
import {Button, CheckBox} from 'react-native-elements';
import {SketchCanvas} from '@terrylinla/react-native-sketch-canvas';

class VDeliveryConfirmation extends Component {
  state = {
    checked: false,
    isSignaturePlaceHolderVisible: false,
  };

  render() {
    return (
      <SafeAreaView style={styles.safeAreaStyle}>
        <View style={styles.containerViewStyle}>
          <TextInput
            placeholder="Number of Packages"
            keyboardType="number-pad"
            underlineColorAndroid="transparent"
            style={styles.numberOfPackageStyle}
          />

          <View style={styles.signatureStyle}>
            <SketchCanvas
              style={{flex: 1}}
              strokeColor={'black'}
              strokeWidth={7}
              onStrokeStart={() => {
                console.log('yaha');
                this.setState({isSignaturePlaceHolderVisible: true});
              }}
            />
          </View>
          <CheckBox
            title="Click Here"
            checked={this.state.checked}
            onPress={() => {
              this.setState(prevState => ({
                checked: !prevState.checked,
              }));
            }}
            containerStyle={{
              backgroundColor: 'transparent',
              borderColor: 'white',
              alignSelf: 'flex-start',
            }}
            textStyle={{
              fontFamily: 'Poppins-Medium',
              color: 'gray',
            }}
          />

          <Button title="Submit" containerStyle={styles.submitStyle} />
          {this.state.isSignaturePlaceHolderVisible === false ? (
            <Text
              style={{
                position: 'absolute',
                top: 100,
                width: '94%',
                color: 'gray',
              }}>
              Signature
            </Text>
          ) : null}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaStyle: {flex: 1, backgroundColor: '#19a0d4'},
  containerViewStyle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  numberOfPackageStyle: {
    width: '96%',
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 14,
    marginTop: 20,
    backgroundColor: '#FFFFFF',
    fontFamily: 'Poppins-Regular',
  },
  submitStyle: {
    width: '80%',
    marginTop: 20,
    marginHorizontal: 8,
    marginBottom: 20,
  },
  signatureStyle: {
    width: '96%',
    height: 150,
    borderWidth: 1,
    borderColor: 'gray',
    flexDirection: 'row',
    borderRadius: 10,
    marginTop: 20,
  },
});

export default VDeliveryConfirmation;
