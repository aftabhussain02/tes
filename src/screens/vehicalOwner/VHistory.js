import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
  FlatList,
} from 'react-native';
import {Card} from 'react-native-elements';

const list = [
  {
    senderName: 'John',
    receiverName: 'Steven',
    address: '935 Ridgewood St. Picataway St. Picataway, NJ 08854',
    receiver: '185 Fermont St. Picataway St. Picataway, MN 08854',
    phone: '9090909090',
    receiverphone: '9090909191',
    driver: 'Steven Myers',
    status: 'Pickup',
  },
  {
    senderName: 'Steven',
    receiverName: 'John',
    address: '54 Fermont St. Picataway St. Picataway, MN 08854',
    receiver: '12 Fermont St. Picataway St. Picataway, MN 08854',
    phone: '9090909091',
    receiverphone: '9098909191',
    driver: 'Steven Myers',
    status: 'On Way',
  },
];

export default class VHistory extends Component {
  renderRow = ({item}) => {
    return (
      <TouchableOpacity
        style={{borderColor: 'white'}}
        onPress={() => {
          this.props.navigation.navigate('VHistoryDetail');
        }}>
        <Card
          containerStyle={{
            paddingBottom: 0,
            paddingTop: 0,
            paddingLeft: 0,
            paddingRight: 0,
            borderRadius: 5,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: '97%'}}>
              <View style={{backgroundColor: 'white', padding: '2%'}}>
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
                        style={
                          styles.addressHeaderTextRight
                        }>{`Drop off`}</Text>
                      <Text
                        style={styles.addressTextRight}>{`Receiver name`}</Text>
                      <Text
                        style={
                          styles.addressTextRight
                        }>{`54 Fermont St. Picataway St. Picataway, MN 08854`}</Text>
                      <Text
                        style={styles.addressTextRight}>{`9090909091`}</Text>
                    </View>
                  </View>
                  <View style={styles.statusContainer}>
                    <View style={styles.statusLeftContainer}>
                      <Image
                        style={styles.profileImage}
                        source={require('../../images/steering-wheel-gray.png')}
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
                    <Text
                      style={styles.basicDetailLabel}>{`Saved Emission`}</Text>
                    <Text style={styles.basicDetailValue}>{`113g/km`}</Text>
                  </View>
                  <Image
                    source={require('../../images/qrcode.png')}
                    resizeMode={'contain'}
                    style={[styles.basicDetail, {width: 64, height: 64}]}
                  />
                </View>
              </View>
            </View>

            <View
              style={{
                backgroundColor: '#19a0d4',
                width: '4%',
                justifyContent: 'center',
                borderBottomRightRadius: 5,
                borderTopRightRadius: 5,
              }}>
              <Image
                source={require('../../images/view-details.png')}
                style={styles.view}
              />
            </View>
          </View>
        </Card>
      </TouchableOpacity>
    );
  };

  handleClick = () => {
    alert('pressed!');
  };

  render() {
    return (
      <View
        style={{flex: 1, flexDirection: 'column', backgroundColor: 'white'}}>
        <FlatList
          data={list}
          renderItem={this.renderRow}
          keyExtractor={item => item.name}
          extraData={styles}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
  view: {
    resizeMode: 'contain',
    paddingLeft: '90%',
    width: '0.5%',
    height: 70,
  },
  lineStyle: {
    flex: 1,

    alignItems: 'stretch',
    borderWidth: 0.5,
    borderColor: '#D3D3D3',
    alignSelf: 'stretch',
    marginTop: 10,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    position: 'relative',
    width: '100%',
  },
  bottomSheet: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowRadius: 8,
    shadowOpacity: 1,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  topContainer: {
    flexDirection: 'column',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#f6f6f6',
    paddingBottom: 20,
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
    paddingLeft: 5,
    paddingTop: 5,
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: 'gray',
  },
  addressText: {
    paddingLeft: 5,
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
  addressHeaderTextRight: {
    paddingTop: 5,
    paddingRight: 5,
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: 'gray',
    textAlign: 'right',
  },
  addressTextRight: {
    paddingRight: 5,
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
    fontSize: 16,
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
    alignItems: 'center',
  },
  basicDetail: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
  },
  basicDetailLabel: {
    fontSize: 12,
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
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: 'gray',
  },
  detailValue: {
    fontSize: 10,
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
