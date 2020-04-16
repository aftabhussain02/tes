import React, {Component} from 'react';
import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';

export default class CountryLanguage extends Component {
  static navigationOptions = {
    drawerLabel: 'Country Language',
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
        <Text
          style={
            styles.notificationText
          }>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}</Text>
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
  },
  notificationText: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: 'black',
    padding: 8,
    margin: 15,
    textAlign: 'justify',
  },
});
