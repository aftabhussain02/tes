import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {Button, CheckBox} from 'react-native-elements';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {CustomDialog, ListDetailItem} from '../../components';
import {demoStyles} from '../../constant';

const {height} = Dimensions.get('screen');

export default class HomeVehicle extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({tintColor}) => (
      <Image
        source={require('../../images/house.png')}
        style={[styles.icon, {tintColor: 'white'}]}
      />
    ),
  };

  state = {
    checked: false,
    tchecked: false,
    hchecked: false,
    conditionModalVisible: false,
    hazardModalVisible: false,
    insuranceModalVisible: false,
    vehiceData: [
      {
        name: 'Type 1',
        image: require('../../images/car.png'),
      },
      {
        name: 'Type 2',
        image: require('../../images/jeep.png'),
      },
      {
        name: 'Type 3',
        image: require('../../images/cycle.png'),
      },
      {
        name: 'Type 4',
        image: require('../../images/truck.png'),
      },
      {
        name: 'Type 5',
        image: require('../../images/bike.png'),
      },
      {
        name: 'Type 6',
        image: require('../../images/jeep.png'),
      },
    ],
    activeSlide: 0,
  };

  setDialogVisible(visible) {
    this.setState({dialogVisible: visible});
  }

  setLDialogVisible(visible) {
    this.setState({ldialogVisible: visible});
  }

  onActionSelected = position => {
    if (position === 0) {
      // index of 'Settings'

      this.props.navigation.navigate('Notifications');
    }
  };

  _renderVehicle = ({item}) => (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={item.image}
        style={{
          width: widthPercentageToDP('22%'),
          height: widthPercentageToDP('14%'),
        }}
      />
      <Text>{item.name}</Text>
    </View>
  );

  _renderPagination() {
    const {vehiceData, activeSlide} = this.state;
    return (
      <Pagination
        dotsLength={vehiceData.length}
        activeDotIndex={activeSlide}
        containerStyle={{
          backgroundColor: '#fff',
          margin: 0,
          paddingTop: 20,
        }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: '#00aeef',
        }}
        inactiveDotStyle={{
          backgroundColor: '00aeef',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }

  render() {
    const {
      hchecked,
      checked,
      tchecked,
      insuranceModalVisible,
      hazardModalVisible,
      conditionModalVisible,
    } = this.state;
    return (
      <View style={styles.container}>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <View>
            <MapView
              provider={PROVIDER_GOOGLE}
              style={{height: height / 4}}
              region={{
                latitude: 23.0231,
                longitude: 72.5068,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              showsUserLocation={true}
            />
          </View>

          <View
            style={[
              demoStyles.elevationStyle,
              {
                backgroundColor: 'white',
                flexDirection: 'row',
                justifyContent: 'center',
              },
            ]}>
            <Text style={styles.custName}>Type of Vehicle</Text>
          </View>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              backgroundColor: 'white',
              paddingBottom: 20,
            }}>
            <View style={styles.bottomSheet}>
              <View style={{paddingVertical: 20}}>
                <Carousel
                  ref={c => {
                    this._carousel = c;
                  }}
                  removeClippedSubviews={false}
                  data={this.state.vehiceData}
                  renderItem={this._renderVehicle}
                  sliderWidth={widthPercentageToDP('100%')}
                  itemWidth={widthPercentageToDP('25%')}
                  onSnapToItem={index => this.setState({activeSlide: index})}
                />
              </View>
              <View style={styles.billContainer}>
                <ListDetailItem
                  title="Trip Fare"
                  valueSuffix="Rs."
                  value="143.50"
                  reverseColor
                />
                <ListDetailItem
                  title="Subtotal"
                  valueSuffix="Rs."
                  value="143.50"
                  reverseColor
                />
                <ListDetailItem
                  title="Wait Time"
                  valueSuffix="Rs."
                  value="6.00"
                  reverseColor
                />
                <ListDetailItem
                  title="Before Taxes"
                  valueSuffix="Rs."
                  value="143.18"
                  reverseColor
                />
                <ListDetailItem
                  title="CGST (2.5%)"
                  valueSuffix="Rs."
                  value="6.00"
                  reverseColor
                />
                <ListDetailItem
                  titleComponent={
                    <CheckBox
                      title="View Insurance"
                      titleProps={{
                        style: {
                          color: '#7E7E7E',
                          borderBottomColor: '#7E7E7E',
                          borderBottomWidth: 1,
                          marginLeft: 10,
                        },
                        onPress: () =>
                          this.setState({
                            insuranceModalVisible: true,
                          }),
                      }}
                      checked={checked}
                      onPress={() =>
                        this.setState(prev => ({
                          checked: !prev.checked,
                        }))
                      }
                      containerStyle={[
                        styles.iconContainerStyle,
                        {marginBottom: 0},
                      ]}
                    />
                  }
                  valueSuffix="Rs."
                  value="3.58"
                  reverseColor
                />
                <ListDetailItem
                  title="SGST/UTGST (2.5%)"
                  valueSuffix="Rs."
                  value="6.00"
                  reverseColor
                />
                <ListDetailItem
                  title="Collected"
                  valueSuffix="Rs."
                  value="150.34"
                  valueStyle={{
                    color: '#117FB7',
                    fontFamily: 'Poppins-Medium',
                    fontSize: 18,
                  }}
                  reverseColor
                />
              </View>
              <CheckBox
                title="Terms & Conditions"
                titleProps={{
                  style: {
                    color: '#2C2C2C',
                    borderBottomColor: '#2C2C2C',
                    borderBottomWidth: 1,
                    marginLeft: 10,
                  },
                  onPress: () =>
                    this.setState({
                      conditionModalVisible: true,
                    }),
                }}
                checked={tchecked}
                onPress={() =>
                  this.setState(prev => ({
                    tchecked: !prev.tchecked,
                  }))
                }
                containerStyle={styles.iconContainerStyle}
              />
              <CheckBox
                title="I hereby declare that prohibited/hazardous items are not
                          shipped with this courier/parcel"
                titleProps={{
                  style: {
                    color: '#2C2C2C',
                    borderBottomColor: '#2C2C2C',
                    borderBottomWidth: 1,
                    marginLeft: 10,
                    width: '90%',
                  },
                  onPress: () =>
                    this.setState({
                      hazardModalVisible: true,
                    }),
                }}
                checked={hchecked}
                onPress={() =>
                  this.setState(prev => ({
                    hchecked: !prev.hchecked,
                  }))
                }
                containerStyle={styles.iconContainerStyle}
              />
              <Button
                title="Confirm"
                onPress={() =>
                  this.props.navigation.navigate('CPackagePromptScreen')
                }
              />
            </View>
          </ScrollView>
        </View>
        <CustomDialog
          visible={conditionModalVisible}
          onTouchOutside={() => this.setState({conditionModalVisible: false})}
          title="Terms & Conditions"
        />
        <CustomDialog
          visible={hazardModalVisible}
          onTouchOutside={() => this.setState({hazardModalVisible: false})}
          title="Prohibited/Hazardous items"
        />
        <CustomDialog
          visible={insuranceModalVisible}
          onTouchOutside={() => this.setState({insuranceModalVisible: false})}
          title="Insurance Details"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  billContainer: {
    marginBottom: 10,
  },
  iconContainerStyle: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    margin: 0,
    padding: 0,
    marginBottom: 20,
    marginLeft: 0,
  },
  icon: {
    width: 20,
    height: 20,
    padding: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  bottomSheet: {
    flexDirection: 'column',
    padding: 2,
    backgroundColor: 'white',
    marginHorizontal: 14,
    overflow: 'hidden',
  },
  custName: {
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    margin: 20,
    marginBottom: 10,
  },
  lineStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    borderWidth: 0.5,
    borderColor: 'lightgray',
    alignSelf: 'stretch',
  },
  dropOffContainer: {
    backgroundColor: '#ECECEC',
    borderRadius: 40,
    margin: 15,
    alignContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  dropOffInside: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'flex-end',
    alignItems: 'center',
    padding: 5,
  },
  recNameEd: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 10,
    fontFamily: 'Poppins-Regular',
  },
  mapImg: {
    width: 22,
    height: 22,
    marginRight: 10,
  },
  hlineStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    borderWidth: 0.5,
    borderColor: 'gray',
    alignSelf: 'stretch',
  },
  headerContainer: {
    backgroundColor: '#117EB6',
    alignContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  headerContainerInside: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'flex-end',
    alignItems: 'center',
  },
  headerTitle: {
    flex: 1,
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    color: 'white',
  },
  notiImg: {
    width: 22,
    height: 22,
  },
  continueCon: {
    margin: 10,
    marginBottom: 25,
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
    fontFamily: 'Poppins-Medium',
  },
});
