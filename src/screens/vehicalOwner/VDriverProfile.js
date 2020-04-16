import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import {ListDetailItem, MyProfileImage} from '../../components';
import {Icon} from 'react-native-elements';

class VDriverProfile extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#19a0d4'}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'white',
          }}>
          <ScrollView style={styles.containerStyle}>
            <MyProfileImage />
            <View style={styles.insideContainer}>
              <ListDetailItem title="Full Name" value="Lorem ipsum" />
              <ListDetailItem
                title="Type of Vehicle"
                value="Cars, Vans, Truck"
              />
              <ListDetailItem
                title="Pan Card"
                valueComponent={
                  <Icon type="font-awesome" color="#7E7E7E" name="image" />
                }
              />
              <ListDetailItem
                title="Aadhaar Card"
                valueComponent={
                  <Icon type="font-awesome" color="#7E7E7E" name="image" />
                }
              />
              <ListDetailItem
                title="Driving License"
                valueComponent={
                  <Icon type="font-awesome" color="#7E7E7E" name="image" />
                }
              />
              <ListDetailItem title="Experience in Driving" value="5 Years" />
              <ListDetailItem
                title="Email Address"
                value="loremipsum@gmail.com"
              />
              <ListDetailItem title="Mobile Number" value="9090909090" />
              <ListDetailItem
                title="Address"
                value="935, Ridewood St. Piscataway, NJ 08854"
              />
              <ListDetailItem
                title="Address Proof"
                valueComponent={
                  <Icon type="font-awesome" color="#7E7E7E" name="image" />
                }
              />
              <ListDetailItem title="Have any Criminal Record" value="No" />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
  containerStyle: {flex: 1, flexDirection: 'column', width: '100%'},
  insideContainer: {
    padding: 20,
  },
});

export default VDriverProfile;
