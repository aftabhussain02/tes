import React, {Component} from 'react';
import EditProfileInside from './EditProfileInside';
import Password from './Password';
import MyProfile from './MyProfile';

import {
  createMaterialTopTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import {MyProfileImage} from '../../components';
import ProfilePaymentDetail from './ProfilePaymentDetail';
import {homeHeader, DeleteProfileHeader} from '../../route/AppStackNavigator';

class ProfileMenu extends Component {
  render() {
    return (
      //whatever you wanted at the top
      <MyProfileImage onPress={() => console.log('hey')} />
    );
  }
}

const EditProfile = createStackNavigator({
  EditProfileTabs: {
    screen: createMaterialTopTabNavigator(
      {
        //Tabs
        EditProfileInside: {
          screen: EditProfileInside,
          navigationOptions: ({navigation}) =>
            homeHeader(
              'My Profile',
              navigation,
              true,
              <DeleteProfileHeader navigation={navigation} />,
            ),
        },
        ProfilePaymentDetails: {
          screen: ProfilePaymentDetail,
          navigationOptions: ({navigation}) => ({
            title: 'Payment Details',
          }),
        },
        MyProfile_MyProfile: {
          screen: MyProfile,
          navigationOptions: ({navigation}) => ({
            title: 'MyProfile',
          }),
        },
        Password: {
          screen: Password,
          navigationOptions: ({navigation}) => ({
            title: 'Password',
          }),
        },
      },
      {
        //Settings
        order: ['EditProfileInside', 'ProfilePaymentDetails', 'Password'],
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

export default EditProfile;
