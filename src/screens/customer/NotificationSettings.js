import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Platform,
  Switch,
} from 'react-native';

export default class NotificationSettings extends Component {
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
    this.setState({showDetail: !this.state.showDetail});
  }

  static navigationOptions = {
    drawerLabel: 'Notification',
    drawerIcon: ({tintColor}) => (
      <Image
        source={require('../../images/settings-white.png')}
        style={[styles.icon, {tintColor: 'white'}]}
      />
    ),
  };
  render() {
    return (
      <ScrollView contentContainerStyle={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.container}>
            <View
              style={{
                marginTop: '5%',
                marginBottom: '3%',
                marginHorizontal: '5%',
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                  style={{
                    color: 'gray',
                    fontSize: 16,
                    alignSelf: 'flex-start',
                  }}>
                  Account & trip update
                </Text>

                <Switch
                  style={{
                    color: 'green',
                  }}
                  value={this.state.switchValue}
                  onValueChange={value => {
                    this.onSwitchChange(value);
                  }}
                />
              </View>

              <View style={styles.lineStyle} />

              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                  style={{
                    color: 'gray',
                    fontSize: 16,
                    alignSelf: 'flex-start',
                  }}>
                  Discount & news
                </Text>

                <Switch
                  style={{
                    color: 'green',
                  }}
                  value={this.state.switchValue}
                  onValueChange={value => {
                    this.onSwitchChange(value);
                  }}
                />
              </View>

              <View style={styles.lineStyle} />

              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                  style={{
                    color: 'gray',
                    fontSize: 16,
                    alignSelf: 'flex-start',
                  }}>
                  Location
                </Text>

                <Switch
                  style={{
                    color: 'green',
                  }}
                  value={this.state.switchValue}
                  onValueChange={value => {
                    this.onSwitchChange(value);
                  }}
                />
              </View>
              <View style={styles.lineStyle} />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  lineStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    borderWidth: 0.5,
    borderColor: '#c4c4c4',
    alignSelf: 'stretch',
    marginBottom: '5%',
    marginTop: '2%',
  },
});
