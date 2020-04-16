import React, {Component} from 'react';
import {Dialog} from 'react-native-simple-dialogs';
import {View, Text, StyleSheet} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import {Button} from 'react-native-elements';

export class LoginDialog extends Component {
  state = {
    value: 0,
  };
  radioFormValue = value => {
    this.setState({
      value,
    });
  };
  render() {
    const {
      visible,
      headerText,
      subTitleText,
      radio_props,
      onTouchOutside,
      continueClicked,
    } = this.props;
    return (
      <Dialog
        visible={visible}
        title=""
        animationType="fade"
        backgroundColor="black"
        dialogStyle={{borderRadius: 10}}
        onTouchOutside={onTouchOutside}>
        <View style={styles.registerDialog}>
          <Text style={styles.registerNew}>{headerText}</Text>
          <Text style={styles.registerSubText}>{subTitleText}</Text>
          <View style={{marginTop: 30}}>
            <RadioForm
              radio_props={radio_props}
              initial={this.state.value}
              formHorizontal={true}
              labelHorizontal={true}
              labelStyle={{paddingRight: '10%', paddingLeft: '3%'}}
              buttonColor={'#009fd6'}
              borderWidth={0}
              buttonInnerColor={'#009fd6'}
              buttonOuterColor={'#009fd6'}
              buttonSize={10}
              buttonOuterSize={20}
              buttonStyle={{borderWidth: 0.5, marginLeft: 15}}
              buttonWrapStyle={{marginLeft: 15}}
              animation={false}
              onPress={this.radioFormValue}
            />
          </View>
        </View>
        <Button
          title="Continue"
          containerStyle={{marginTop: 20}}
          onPress={() => continueClicked(this.state.value)}
        />
      </Dialog>
    );
  }
}

const styles = StyleSheet.create({
  registerDialog: {
    alignItems: 'center',
    borderRadius: 20,
  },
  registerNew: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'Poppins-Bold',
  },
  registerSubText: {
    fontSize: 15,
    color: 'black',
    marginTop: 10,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
  },
  continueCon: {
    marginTop: 30,
    justifyContent: 'center',
    padding: 10,
    borderRadius: 30,
    flexDirection: 'row',
    backgroundColor: '#009fd6',
  },
});
