import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StatusBar,
  Dimensions,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from 'react-native';

import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

var {height, width} = Dimensions.get('screen');

export default class HistoryDetail extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({tintColor}) => (
      <Image
        source={require('../../images/house.png')}
        style={[styles.icon, {tintColor: 'white'}]}
      />
    ),
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{flex: 0.4}}
          region={{
            latitude: 23.0231,
            longitude: 72.5068,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation={true}
        />
        <ScrollView contentContainerStyle={{flexGrow: 0.7}} style={{flex: 0.6}}>
          <View style={styles.bottomSheet}>
            <View style={styles.topContainer}>
              <View style={styles.addressesContainer}>
                <View style={styles.addressContainer}>
                  <Text style={styles.addressHeaderText}>{`Pick up`}</Text>
                  <Text style={styles.addressText}>{`Sender name`}</Text>
                  <Text
                    style={
                      styles.addressText
                    }>{`935 Ridgewood St. Picataway St. Picataway, NJ 08854`}</Text>
                  <Text style={styles.addressText}>{`9090909090`}</Text>
                </View>
                <View style={styles.addressContainer}>
                  <Text
                    style={styles.addressHeaderTextRight}>{`Drop off`}</Text>
                  <Text style={styles.addressTextRight}>{`Receiver name`}</Text>
                  <Text
                    style={
                      styles.addressTextRight
                    }>{`54 Fermont St. Picataway St. Picataway, MN 08854`}</Text>
                  <Text style={styles.addressTextRight}>{`9090909091`}</Text>
                </View>
              </View>
              <View style={styles.statusContainer}>
                <View style={styles.statusLeftContainer}>
                  <Image
                    style={styles.profileImage}
                    source={require('../../images/profile-pic.png')}
                  />
                  <Text style={styles.profileName}>{`Steven Myers`}</Text>
                </View>
                <View style={styles.statusRightContainer}>
                  <Text style={styles.statusLabel}>{`Status`}</Text>
                  <Text style={styles.statusText}>{`Pickup`}</Text>
                </View>
              </View>
            </View>
            <View style={styles.basicDetailContainer}>
              <View style={styles.basicDetail}>
                <Text style={styles.basicDetailLabel}>{`Date`}</Text>
                <Text style={styles.basicDetailValue}>{`12/02/2019`}</Text>
              </View>
              <View style={styles.basicDetail}>
                <Text style={styles.basicDetailLabel}>{`Time`}</Text>
                <Text style={styles.basicDetailValue}>{`10:45 AM`}</Text>
              </View>
              <View style={styles.basicDetail}>
                <Text style={styles.basicDetailLabel}>{`Saved Emission`}</Text>
                <Text style={styles.basicDetailValue}>{`113g/km`}</Text>
              </View>
              <Image
                source={require('../../images/qrcode.png')}
                resizeMode={'contain'}
                style={[styles.basicDetails, {width: 64, height: 64}]}
              />
            </View>
            <View style={styles.detailContainer}>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>{`Trip fare`}</Text>
                <Text style={styles.detailValue}>{`Rs.143.50`}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>{`Sub total`}</Text>
                <Text style={styles.detailValue}>{`Rs.143.50`}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>{`Wait time`}</Text>
                <Text style={styles.detailValue}>{`Rs.6.00`}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>{`Before taxes`}</Text>
                <Text style={styles.detailValue}>{`Rs.143.18`}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>{`Cgst(2.5%)`}</Text>
                <Text style={styles.detailValue}>{`Rs.3.58`}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>{`Sgst/Utgst(2.5%)`}</Text>
                <Text style={styles.detailValue}>{`Rs.3.58`}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>{`Insurance`}</Text>
                <Text style={styles.detailValue}>{`Rs.3.58`}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>{`Total`}</Text>
                <Text style={styles.totalText}>{`Rs.150.34`}</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
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
    width: '100%',
  },
  bottomSheet: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowRadius: 8,
    shadowOpacity: 1,
    bottom: 0,
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 8,
    height: '70%',
  },
  topContainer: {
    flexDirection: 'column',
    width: '100%',
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f6f6f6',
    marginBottom: 16,
  },
  addressesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 16,
  },
  addressContainer: {
    flexDirection: 'column',
    width: '48%',
  },
  addressHeaderText: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: 'gray',
  },
  addressText: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
  addressHeaderTextRight: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: 'gray',
    textAlign: 'right',
  },
  addressTextRight: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: 'black',
    textAlign: 'right',
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 20,
    height: 20,
    borderRadius: 16,
  },
  profileName: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: 'black',
    marginLeft: 8,
  },
  statusLeftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
  },
  statusRightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
  },
  statusLabel: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: 'gray',
    marginRight: 4,
  },

  statusText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#59c083',
  },
  basicDetailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 24,
  },
  basicDetail: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  basicDetails: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  basicDetailLabel: {
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    color: 'gray',
  },
  basicDetailValue: {
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
  detailContainer: {
    flexDirection: 'column',
    width: '100%',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
    width: '100%',
  },
  detailLabel: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: 'gray',
  },
  detailValue: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: 'black',
    textAlign: 'right',
  },
  totalText: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#1c7db1',
    textAlign: 'right',
  },
});
