import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import StarRating from 'react-native-star-rating';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

var {width} = Dimensions.get('screen');

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

  constructor(props) {
    super(props);
    this.state = {
      showDetail: true,
      starCount: 3.5,
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating,
    });
  }

  onActionSelected = position => {
    if (position === 0) {
      // index of 'Settings'

      this.props.navigation.navigate('Notifications');
    }
  };

  toggleDetail = () => {
    this.setState({showDetail: !this.state.showDetail});
  };

  render() {
    const {showDetail} = this.state;
    console.log(showDetail);
    return (
      <ScrollView contentContainerStyle={{flex: 1}}>
        <View style={styles.container}>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
            }}>
            <MapView
              provider={PROVIDER_GOOGLE}
              style={{flex: 1}}
              region={{
                latitude: 23.0231,
                longitude: 72.5068,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              showsUserLocation={true}
            />

            <View style={styles.bottomSheet}>
              <View style={styles.driverDetailContainer}>
                <View style={styles.arrowIconContainer}>
                  <TouchableWithoutFeedback onPress={this.toggleDetail}>
                    <Image
                      style={[
                        styles.arrowIcon,
                        showDetail && styles.rotateStyle,
                      ]}
                      source={require('../../images/circle-arrow.png')}
                    />
                  </TouchableWithoutFeedback>
                </View>
                <View style={styles.driverDetailLeftContainer}>
                  <Image
                    style={styles.driverProfilePic}
                    source={require('../../images/profile-pic.png')}
                  />
                  <View style={styles.driverDetail}>
                    <Text style={styles.driverName}>{`Steven Myers`}</Text>
                    <StarRating
                      fullStarColor={'#FAC917'}
                      disabled
                      maxStars={5}
                      starSize={15}
                      containerStyle={{marginBottom: 5}}
                      buttonStyle={{paddingHorizontal: -2}}
                      rating={3}
                      selectedStar={rating => this.onStarRatingPress(rating)}
                    />
                    <Text style={styles.phoneNumber}>{`909090132923`}</Text>
                  </View>
                </View>
                <View style={styles.contactDetails}>
                  <Text style={styles.orderId}>
                    <Text
                      style={{
                        fontFamily: 'Poppins-Regular',
                      }}>{`Order Id :`}</Text>
                    <Text
                      style={{fontFamily: 'Poppins-Medium'}}>{`#2323232`}</Text>
                  </Text>
                  <View style={{paddingLeft: '70%'}}>
                    <Image
                      style={styles.phoneImage}
                      source={require('../../images/call-answer.png')}
                    />
                  </View>
                </View>
              </View>
              {showDetail && (
                <View style={styles.topDetailContainer}>
                  <View style={styles.topContainer}>
                    <View style={styles.addressesContainer}>
                      <View style={styles.addressContainer}>
                        <Text
                          style={styles.addressHeaderText}>{`Pick up`}</Text>
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
                          style={
                            styles.addressTextRight
                          }>{`Receiver name`}</Text>
                        <Text
                          style={
                            styles.addressTextRight
                          }>{`54 Fermont St. Picataway St. Picataway, MN 08854`}</Text>
                        <Text
                          style={styles.addressTextRight}>{`9090909091`}</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.basicDetailContainer}>
                    <View style={styles.basicDetail}>
                      <Text style={styles.basicDetailLabel}>{`Date`}</Text>
                      <Text
                        style={styles.basicDetailValue}>{`12/02/2019`}</Text>
                    </View>
                    <View style={styles.basicDetail}>
                      <Text style={styles.basicDetailLabel}>{`Time`}</Text>
                      <Text style={styles.basicDetailValue}>{`10:45 am`}</Text>
                    </View>
                    <View style={styles.basicDetail}>
                      <Text style={styles.basicDetailLabel}>{`Status`}</Text>
                      <Text style={styles.statusText}>{`On Way`}</Text>
                    </View>
                    <Image
                      source={require('../../images/qrcode.png')}
                      resizeMode={'contain'}
                      style={[
                        styles.basicDetail,
                        {
                          width: 64,
                          height: 64,
                        },
                      ]}
                    />
                  </View>
                </View>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  rotateStyle: {
    transform: [{rotate: '180deg'}],
  },
  icon: {
    width: 20,
    height: 20,
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
  },
  driverDetailContainer: {
    padding: 16,
    backgroundColor: '#19a0d4',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    position: 'relative',
    alignItems: 'center',
  },
  arrowIconContainer: {
    position: 'absolute',
    top: -25,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowIcon: {
    width: 25,
    height: 25,
    left: width / 2.25,
  },
  driverDetailLeftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '60%',
  },
  driverProfilePic: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  driverDetail: {
    flexDirection: 'column',
    marginLeft: 16,
  },
  driverName: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    color: 'white',
  },
  phoneNumber: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: 'white',
  },
  contactDetails: {
    flexDirection: 'column',
    width: '40%',
  },
  orderId: {
    fontSize: 12,
    paddingLeft: '10%',
    fontFamily: 'Poppins-Regular',
    color: 'white',
    marginBottom: 8,
  },
  phoneImage: {
    width: 24,
    height: 24,
  },
  topDetailContainer: {
    flexDirection: 'column',
    width: '100%',
    paddingHorizontal: 16,
  },
  topContainer: {
    flexDirection: 'column',
    width: '100%',
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f6f6f6',
    paddingVertical: 8,
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

  statusText: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
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
  basicDetailLabel: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: 'gray',
  },
  basicDetailValue: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
});
