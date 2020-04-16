import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Dimensions,
  ScrollView,
  Image,
  StyleSheet,
  Platform,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import StarRating from 'react-native-star-rating';
import {Button} from 'react-native-elements';
import {colors} from '../../constant';

var {height, width} = Dimensions.get('screen');

export default class ReviewDriver extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starCount: 3.5,
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
          }}>
          <View>
            <MapView
              provider={PROVIDER_GOOGLE}
              style={{height: height / 3.5}}
              region={{
                latitude: 23.0231,
                longitude: 72.5068,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              showsUserLocation={true}
            />
          </View>
          <ScrollView
            contentContainerStyle={{flexGrow: 1, backgroundColor: 'white'}}>
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
                    <Text
                      style={styles.addressTextRight}>{`Reciever name`}</Text>
                    <Text
                      style={
                        styles.addressTextRight
                      }>{`54 Fermont St. Picataway St. Picataway, MN 08854`}</Text>
                    <Text style={styles.addressTextRight}>{`9090909091`}</Text>
                  </View>
                </View>
                <View style={styles.driverDetailContainer}>
                  <View style={styles.driverDetailLeftContainer}>
                    <Image
                      style={styles.driverProfilePic}
                      source={require('../../images/profile-pic.png')}
                    />
                    <View style={styles.driverDetail}>
                      <Text style={styles.driverName}>{`Steven Myers`}</Text>
                      <StarRating
                        fullStarColor={'#FAC917'}
                        disabled={true}
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
                    <Text style={styles.orderId}>{`Rs.150.34`}</Text>
                    <Text
                      style={{fontSize: 10, color: 'gray'}}>{`By Cash`}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.rateDriverContainer}>
                <Text style={styles.rateDriverText}>
                  {`Please Rate to Driver`}
                </Text>
                <View style={{marginVertical: 10}}>
                  <StarRating
                    fullStarColor={'#FAC917'}
                    disabled={false}
                    maxStars={5}
                    rating={this.state.starCount}
                    selectedStar={rating => this.onStarRatingPress(rating)}
                  />
                </View>
                <TextInput
                  placeholder="Leave a Comment"
                  style={styles.leaveComment}
                />
              </View>
              <Button
                title="Submit"
                onPress={() => {
                  this.props.navigation.navigate('HomeScreen_HomeScreen');
                }}
                containerStyle={{width: '90%'}}
              />
            </View>
          </ScrollView>
        </View>
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
  },
  bottomSheet: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowRadius: 8,
    shadowOpacity: 1,
    width: '100%',
    paddingVertical: 8,
  },
  addressesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 16,
    paddingHorizontal: 16,
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
    fontFamily: 'Poppins-Medium',
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
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  profileName: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: 'black',
    marginLeft: 8,
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
  driverDetailContainer: {
    paddingTop: 16,
    paddingBottom: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.borderColor,
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    position: 'relative',
    paddingHorizontal: 16,

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
    width: '80%',
  },
  driverProfilePic: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  driverDetail: {
    flexDirection: 'column',
    marginLeft: 16,
  },
  driverName: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
  phoneNumber: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: 'black',
  },
  contactDetails: {
    flexDirection: 'column',
    width: '20%',
  },
  orderId: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#1c7db1',
    paddingBottom: -3,
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
    paddingVertical: 8,
  },
  continueCon: {
    margin: 10,
    marginBottom: 15,
    justifyContent: 'center',
    padding: 10,
    borderRadius: 30,
    flexDirection: 'row',
    backgroundColor: '#009fd6',
  },
  continueStyle: {
    flex: 1,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  rateDriverContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 6,
    alignSelf: 'stretch',
  },
  rateDriverText: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: 'gray',
    marginBottom: 5,
  },
  leaveComment: {
    backgroundColor: '#ECECEC',
    fontFamily: 'Poppins-Regular',
    alignSelf: 'stretch',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
});
