import React, {Component} from 'react';
import {
  Platform,
  View,
  StyleSheet,
  Image,
  ScrollView,
  ToolbarAndroid,
  SafeAreaView,
} from 'react-native';
import {MyProfileImage} from '../../components/MyProfileImage';
import {ListDetailItem} from '../../components';
import ListDetailImageItem from '../../components/ListDetailImageItem';

export default class VehicleOwnerProfile extends Component {
  static navigationOptions = {
    drawerLabel: 'My profile',
    drawerIcon: ({tintColor}) => (
      <Image
        source={require('../../images/profiles.png')}
        style={[styles.icon, {tintColor: 'white'}]}
      />
    ),
  };

  onActionSelected = position => {
    if (position === 0) {
      this.props.navigation.navigate('EditVehicleOwnerProfile');
    }
    if (position === 1) {
      this.props.navigation.navigate('Notifications');
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.safeAreaStyle}>
        <View style={styles.containerViewStyle}>
          <ScrollView style={styles.containerStyle}>
            <MyProfileImage />
            <View style={styles.insideContainer}>
              <ListDetailItem title="Business Type" value="Lorem ipsum" />
              <ListDetailImageItem title="Pan Card" />
              <ListDetailImageItem title="Aadhaar Card" />
              <ListDetailImageItem title="Business Registration Certificate" />
              <ListDetailImageItem title="Driving License" />
              <ListDetailItem
                title="Working Hours"
                value="9:00 AM to 5:00 PM"
              />
              <ListDetailItem
                title="Home Address"
                value="935 Ridgewood St.Piscataway,NJ 08854"
              />
              <ListDetailItem
                title="Work Address"
                value="935 Ridgewood St.Piscataway,NJ 08854"
              />
              <ListDetailItem title="House Number" value="A823" />
              <ListDetailItem title="Street" value="Mondeal Houses" />
              <ListDetailItem title="City" value="New Jersey" />
              <ListDetailItem title="Zipcode" value="83001" />
              <ListDetailItem title="State" value="New Jersey" />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {flex: 1, flexDirection: 'column', width: '100%'},
  safeAreaStyle: {flex: 1, backgroundColor: '#19a0d4'},
  androidToolBarStyle: {
    height: 56,
    width: '100%',
    backgroundColor: '#19a0d4',
    elevation: 0,
  },
  containerViewStyle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  insideContainer: {
    padding: 20,
  },
});
