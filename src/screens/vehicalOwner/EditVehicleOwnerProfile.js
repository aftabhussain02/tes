import React, {Component} from 'react';
import {
  View,
  Text,
  Platform,
  ToolbarAndroid,
  ImageBackground,
  Image,
  Dimensions,
} from 'react-native';
import {
  createMaterialTopTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import EditVehicleOwnerProfileInside from '../vehicalOwner/EditVehicleOwnerProfileInside';
import EditVehicleOwnerProfileDocument from '../vehicalOwner/EditVehicleOwnerProfileDocument';
import EditVehicleOwnerProfilePassword from '../vehicalOwner/EditVehicleOwnerProfilePassword';
import EditVehicleOwnerProfilePaymentDetails from '../vehicalOwner/EditVehicleOwnerProfilePaymentDetails';
import {MyProfileImage} from '../../components';

var {height} = Dimensions.get('screen');

class ProfileMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <MyProfileImage onPress={() => console.log('heyus')} />;
  }
}

const EditVehicleOwnerProfile = createStackNavigator({
  EditVehicleOwnerProfileTabs: {
    screen: createMaterialTopTabNavigator(
      {
        EditVehicleOwnerProfileInside: {
          screen: EditVehicleOwnerProfileInside,
          navigationOptions: ({navigation}) => ({
            title: 'Edit Profile',
          }),
        },
        EditVehicleOwnerProfileDocument: {
          screen: EditVehicleOwnerProfileDocument,
          navigationOptions: ({navigation}) => ({
            title: 'Document',
          }),
        },
        EditVehicleOwnerProfilePassword: {
          screen: EditVehicleOwnerProfilePassword,
          navigationOptions: ({navigation}) => ({
            title: 'Password',
          }),
        },
        EditVehicleOwnerProfilePaymentDetails: {
          screen: EditVehicleOwnerProfilePaymentDetails,
          navigationOptions: ({navigation}) => ({
            title: 'Payment Details',
          }),
        },
      },
      {
        order: [
          'EditVehicleOwnerProfileInside',
          'EditVehicleOwnerProfilePaymentDetails',
          'EditVehicleOwnerProfileDocument',
          'EditVehicleOwnerProfilePassword',
        ],
        tabBarPosition: 'top',
        swipeEnabled: true,
        animationEnabled: true,
        tabBarOptions: {
          activeTintColor: '#FFFFFF',
          inactiveTintColor: '#F8F8F8',
          style: {
            backgroundColor: '#19a0d4',
          },
          labelStyle: {
            textAlign: 'center',
            fontSize: 12,
          },
          indicatorStyle: {
            borderBottomColor: '#ffffff',
            borderBottomWidth: 2,
          },
        },
      },
    ),

    navigationOptions: ({navigation}) => ({
      header: <ProfileMenu navigation={navigation} />,
    }),
  },
});

export default EditVehicleOwnerProfile;
