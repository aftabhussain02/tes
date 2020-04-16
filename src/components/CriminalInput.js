import React, {PureComponent} from 'react';
import {View, Text, Switch} from 'react-native';
import {InputText} from './InputText';

export class CriminalInput extends PureComponent {
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
    return (
      <View style={{width: '100%'}}>
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
        {this.state.switchValue && (
          <InputText label="Details of your criminal record" />
        )}
      </View>
    );
  }
}
