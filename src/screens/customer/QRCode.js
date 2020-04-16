import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  Image,
  StyleSheet,
  Platform,
} from 'react-native';
import Dash from 'react-native-dash';

var {width} = Dimensions.get('screen');

export default class QRCode extends Component {
  onActionSelected = position => {
    if (position === 0) {
      // index of 'Settings'
      this.props.navigation.navigate('Notifications');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.qrDetailContainer}>
            <View style={styles.bottomSheet}>
              <Image
                source={require('../../images/qrcode.png')}
                resizeMode={'contain'}
                style={{height: width / 2.3, marginVertical: 40}}
              />
              <Dash style={{width: '98%', height: 1}} />
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
                    <Text
                      style={styles.addressTextRight}>{`Receiver name`}</Text>
                    <Text
                      style={
                        styles.addressTextRight
                      }>{`54 Fermont St. Picataway St. Picataway, MN 08854`}</Text>
                    <Text style={styles.addressTextRight}>{`9090909091`}</Text>
                  </View>
                </View>
              </View>
              <Dash style={{width: '98%', height: 1}} />
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
                  <Text style={styles.detailLabel}>{`Cgst ( 2.5% )`}</Text>
                  <Text style={styles.detailValue}>{`Rs.3.58`}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text
                    style={styles.detailLabel}>{`Sgst/Utgst ( 2.5% )`}</Text>
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
    position: 'relative',
    width: '100%',
    backgroundColor: '#19a0d4',
  },
  bottomSheet: {
    flexDirection: 'column',
    alignItems: 'center',
    shadowRadius: 8,
    shadowOpacity: 1,
    width: '100%',
  },
  topContainer: {
    flexDirection: 'column',
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#ECECEC',
  },
  addressesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  addressContainer: {
    flexDirection: 'column',
    width: '48%',
  },
  addressHeaderText: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: 'gray',
  },
  addressText: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: 'black',
  },
  addressHeaderTextRight: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: 'gray',
    textAlign: 'right',
  },
  addressTextRight: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: 'black',
    textAlign: 'right',
  },

  detailContainer: {
    flexDirection: 'column',
    width: '100%',
    paddingHorizontal: 16,
    backgroundColor: '#ECECEC',
    paddingVertical: 8,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
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
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    color: '#1c7db1',
    textAlign: 'right',
  },
  qrDetailContainer: {
    flex: 1,
    flexDirection: 'column',
    margin: 30,
    backgroundColor: 'white',
    borderRadius: 15,
    alignItems: 'center',
  },
});
