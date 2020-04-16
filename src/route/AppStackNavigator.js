import React from 'react';
import {View} from 'react-native';
import {
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import {Icon} from 'react-native-elements';

import {BarIcon, BellIcon, DrawerImage, RNSwitch} from '../components';
import Splash from '../screens/customer/Splash';
import Login from '../screens/customer/Login';
import SignInScreen from '../screens/customer/SignInScreen';
import ForgotPassword from '../screens/customer/ForgotPassword';
import OTPScreen from '../screens/customer/OTPScreen';
import ChangePassword from '../screens/customer/ChangePassword';
import SignUp from '../screens/customer/SignUp';
import HomeScreen from '../screens/customer/HomeScreen';
import HomeDestination from '../screens/customer/HomeDestination';
import HomePackage from '../screens/customer/HomePackage';
import HomeVehicle from '../screens/customer/HomeVehicle';
import EditProfile from '../screens/customer/EditProfile';
import MyProfile from '../screens/customer/MyProfile';
import History from '../screens/customer/History';
import HistoryDetail from '../screens/customer/HistoryDetail';
import NotificationDetails from '../screens/customer/NotificationDetails';
import Tracking from '../screens/customer/Tracking';
import QRCode from '../screens/customer/QRCode';
import ReviewDriver from '../screens/customer/ReviewDriver';
import LegalInformation from '../screens/customer/LegalInformation';
import CountryLanguage from '../screens/customer/CountryLanguage';
import MainDrawer from '../components/drawer/MainDrawer';
import {colors} from '../constant';
import VehicleOwnerProfile from '../screens/vehicalOwner/VehicleOwnerProfile';
import EditVehicleOwnerProfile from '../screens/vehicalOwner/EditVehicleOwnerProfile';
import VHomeScreen from '../screens/vehicalOwner/VHomeScreen';
import VDriverList from '../screens/vehicalOwner/VDriverList';
import VDriverProfile from '../screens/vehicalOwner/VDriverProfile';
import VEditDriver from '../screens/vehicalOwner/VEditDriver';
import ManageVehicleOwner from '../screens/vehicalOwner/ManageVehicleOwner';
import ManageVehicleOwnerDetail from '../screens/vehicalOwner/ManageVehicleOwnerDetail';
import EditVehicleOwnerDetail from '../screens/vehicalOwner/EditVehicleOwnerDetail';
import PickupScreen from '../screens/vehicalOwner/PickupScreen';
import VHistory from '../screens/vehicalOwner/VHistory';
import VHistoryDetail from '../screens/vehicalOwner/VHistoryDetail';
import VNotifications from '../screens/vehicalOwner/VNotifications';
import VNotificationDetail from '../screens/vehicalOwner/VNotificationDetail';
import VDeliveryConfirmation from '../screens/customer/VDeliveryConfirmation';
import CPackagePromptScreen from '../screens/customer/CPackagePromptScreen';
import VSignUpScreen from '../screens/vehicalOwner/VSignupScreen';
import VSignInOtpScreen from '../screens/vehicalOwner/VSignInOtpScreen';
import VSignUpOtpScreen from '../screens/vehicalOwner/VSignUpOtpScreen';
import VNotificationSettings from '../screens/vehicalOwner/VNotificationSettings';
import Notifications from '../screens/customer/Notifications';
import NotificationSettings from '../screens/customer/NotificationSettings';
import VSwitchScreen from '../screens/vehicalOwner/VSwitchScreen';
import VTripScreen from '../screens/vehicalOwner/VTripScreen';
import VTripOtpScreen from '../screens/vehicalOwner/VTripOtpScreen';
import PaymentDetails from '../screens/customer/PaymentDetails';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import CreateVehicleScreen from '../screens/vehicalOwner/CreateVehicleScreen';

const SplashStack = createStackNavigator(
  {
    Splash: {
      screen: Splash,
    },
  },
  {
    headerMode: 'none',
  },
);

const AuthStack = createStackNavigator(
  {
    Login: {
      screen: Login,
    },
    SignInScreen: {
      screen: SignInScreen,
    },
    ForgotPassword: {
      screen: ForgotPassword,
    },
    OTPScreen: {
      screen: OTPScreen,
    },
    ChangePassword: {
      screen: ChangePassword,
    },
    SignUp: {
      screen: SignUp,
    },
    VSignInOtpScreen: {
      screen: VSignInOtpScreen,
    },
    VSignUpScreen: {
      screen: VSignUpScreen,
    },
    VSignUpOtpScreen: {
      screen: VSignUpOtpScreen,
    },
  },
  {
    headerMode: 'none',
  },
);

const EditProfileHeader = ({navigation, route}) => (
  <View style={{flexDirection: 'row'}}>
    <Icon
      name="edit"
      type="font-awesome"
      color="#fff"
      containerStyle={{marginRight: 20}}
      underlayColor={colors.primary}
      onPress={() => navigation.navigate(route)}
    />
    <BellIcon navigation={navigation} />
  </View>
);

export const homeHeader = (
  title,
  navigation,
  barButtonVisible,
  headerRight,
) => ({
  title,
  headerStyle: {
    backgroundColor: '#009FD6',
    fontFamily: 'Poppins-Medium',
  },
  headerTitleStyle: {
    fontFamily: 'Poppins-Medium',
  },
  headerTintColor: '#fff',
  headerLeft:
    barButtonVisible == true ? <BarIcon navigation={navigation} /> : undefined,
  headerRight: headerRight || <BellIcon navigation={navigation} />,
});

const SwitchHeader = (navigation, barButtonVisible, headerRight) => {
  return {
    headerTitle: <RNSwitch value />,
    headerStyle: {
      backgroundColor: '#009FD6',
      fontFamily: 'Poppins-Medium',
    },
    headerTitleStyle: {
      fontFamily: 'Poppins-Medium',
    },
    headerTintColor: '#fff',
    headerLeft:
      barButtonVisible == true ? (
        <BarIcon navigation={navigation} />
      ) : (
        undefined
      ),
    headerRight: headerRight || <BellIcon navigation={navigation} />,
  };
};

export const DeleteProfileHeader = ({navigation}) => (
  <View style={{flexDirection: 'row'}}>
    <Icon
      name="trash"
      type="font-awesome"
      color="#fff"
      containerStyle={{marginRight: 20}}
      underlayColor={colors.primary}
      onPress={navigation.getPramas}
    />
    <BellIcon navigation={navigation} />
  </View>
);

// Main Screens for Drawer Navigator

const CustomerHomeStack = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: ({navigation}) => homeHeader('Home', navigation, true),
    },
    HomeDestination: {
      screen: HomeDestination,
      navigationOptions: ({navigation}) => homeHeader('Home', navigation),
    },
    HomePackage: {
      screen: HomePackage,
      navigationOptions: ({navigation}) => homeHeader('Home', navigation),
    },
    HomeVehicle: {
      screen: HomeVehicle,
      navigationOptions: ({navigation}) => homeHeader('Home', navigation),
    },
    Tracking: {
      screen: Tracking,
      navigationOptions: ({navigation}) => homeHeader('Tracking', navigation),
    },
    CPackagePromptScreen: {
      screen: CPackagePromptScreen,
      navigationOptions: ({navigation}) =>
        homeHeader('Package Detail', navigation),
    },
    PaymentDetails: {
      screen: PaymentDetails,
      navigationOptions: ({navigation}) => homeHeader('Package', navigation),
    },
  },
  {
    headerLayoutPreset: 'left',
  },
);

const CustomerProfileStack = createStackNavigator(
  {
    MyProfile: {
      screen: MyProfile,
      navigationOptions: ({navigation}) =>
        homeHeader(
          'My Profile',
          navigation,
          true,
          <EditProfileHeader navigation={navigation} route="EditProfile" />,
        ),
    },
    EditProfile: {
      screen: EditProfile,
      navigationOptions: ({navigation}) =>
        homeHeader('Edit Profile', navigation),
    },
  },
  {
    headerLayoutPreset: 'left',
  },
);

const CustomerHistoryStack = createStackNavigator(
  {
    History: {
      screen: History,
      navigationOptions: ({navigation}) =>
        homeHeader('History', navigation, true),
    },
    HistoryDetail: {
      screen: HistoryDetail,
      navigationOptions: ({navigation}) => homeHeader('History', navigation),
    },
  },
  {
    headerLayoutPreset: 'left',
  },
);

const CustomerQrcodeStack = createStackNavigator(
  {
    QRCode: {
      screen: QRCode,
      navigationOptions: ({navigation}) =>
        homeHeader('History', navigation, true),
    },
  },
  {
    headerLayoutPreset: 'left',
  },
);

const CustomerReviewDriverStack = createStackNavigator(
  {
    ReviewDriver: {
      screen: ReviewDriver,
      navigationOptions: ({navigation}) =>
        homeHeader('Review Driver', navigation, true),
    },
  },
  {
    headerLayoutPreset: 'left',
  },
);

const CustomerLegalInformationStack = createStackNavigator(
  {
    LegalInformation: {
      screen: LegalInformation,
      navigationOptions: ({navigation}) =>
        homeHeader('Legal Information', navigation, true),
    },
  },
  {
    headerLayoutPreset: 'left',
  },
);
const CustomerNotificationStack = createStackNavigator(
  {
    Notifications: {
      screen: Notifications,
      navigationOptions: ({navigation}) =>
        homeHeader('Notification', navigation, true, () => null),
    },
    NotificationDetails: {
      screen: NotificationDetails,
      navigationOptions: ({navigation}) =>
        homeHeader('Notification', navigation, false, () => null),
    },
  },
  {
    headerLayoutPreset: 'left',
  },
);

const CustomerCountryLanguageStack = createStackNavigator(
  {
    CountryLanguage: {
      screen: CountryLanguage,
      navigationOptions: ({navigation}) =>
        homeHeader('Select Country Language', navigation, true),
    },
  },
  {
    headerLayoutPreset: 'left',
  },
);

const NotificationSettingsStack = createStackNavigator(
  {
    NotificationSettings: {
      screen: NotificationSettings,
      navigationOptions: ({navigation}) =>
        homeHeader('Notification Settings', navigation, true),
    },
  },
  {
    headerLayoutPreset: 'left',
  },
);

const SwitchStack = createStackNavigator(
  {
    SwitchScreen: {
      screen: VSwitchScreen,
      navigationOptions: ({navigation}) =>
        homeHeader('Select Country Language', navigation, true),
    },
  },
  {
    headerLayoutPreset: 'left',
    mode: 'modal',
    headerMode: 'none',
    cardStyle: {
      backgroundColor: 'transparent',
      opacity: 0.1,
    },
    transitionConfig: () => ({
      containerStyle: {
        backgroundColor: 'transparent',
      },
    }),
  },
);

const CustomerStack = createDrawerNavigator(
  {
    Notification_Notifications: {
      screen: CustomerNotificationStack,
      path: 'CustomerNotifications',
      navigationOptions: {
        drawerLabel: () => null,
      },
    },
    //Screens
    HomeScreen_HomeScreen: {
      screen: CustomerHomeStack,
      path: 'HomeScreen',
      navigationOptions: {
        drawerLabel: 'Home',
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        drawerIcon: <DrawerImage source={require('../images/house.png')} />,
      },
    },
    MyProfile_MyProfile: {
      screen: CustomerProfileStack,
      path: 'MyProfile',
      navigationOptions: {
        drawerLabel: 'My Profile',
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        drawerIcon: <DrawerImage source={require('../images/profiles.png')} />,
      },
    },
    History_History: {
      screen: CustomerHistoryStack,
      path: 'History',
      navigationOptions: {
        drawerLabel: 'History',
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        drawerIcon: <DrawerImage source={require('../images/history.png')} />,
      },
    },
    QRCode_QRCode: {
      screen: CustomerQrcodeStack,
      path: 'QRCode',
      navigationOptions: {
        drawerLabel: 'QR Code',
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        drawerIcon: (
          <DrawerImage source={require('../images/qrcode-white.png')} />
        ),
      },
    },
    ReviewDriver_ReviewDriver: {
      screen: CustomerReviewDriverStack,
      path: 'ReviewDriver',
      navigationOptions: {
        drawerLabel: 'Review Driver',
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        drawerIcon: <DrawerImage source={require('../images/driver.png')} />,
      },
    },
    Settings_LegalInformation: {
      screen: CustomerLegalInformationStack,
      navigationOptions: {
        drawerLabel: 'Legal Information',
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        drawerIcon: (
          <DrawerImage source={require('../images/settings-white.png')} />
        ),
      },
    },
    Settings_Notification: {
      screen: NotificationSettingsStack,
      navigationOptions: {
        drawerLabel: 'Notification',
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        drawerIcon: (
          <DrawerImage source={require('../images/settings-white.png')} />
        ),
      },
    },
    Settings_CountryLanguage: {
      screen: CustomerCountryLanguageStack,
      navigationOptions: {
        drawerLabel: 'Country Language',
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        drawerIcon: (
          <DrawerImage source={require('../images/settings-white.png')} />
        ),
      },
    },
  },
  {
    initialRouteName: 'HomeScreen_HomeScreen',
    drawerWidth: widthPercentageToDP('80%'),
    drawerBackgroundColor: '#329fd1',
    contentOptions: {
      labelStyle: {
        fontFamily: 'Poppins-Bold',
        color: 'white',
        fontSize: 15,
      },
    },
    contentComponent: props => <MainDrawer {...props} />,
  },
);

const VehicleHomeStack = createStackNavigator(
  {
    VHomeScreen: {
      screen: VHomeScreen,
      navigationOptions: ({navigation}) => SwitchHeader(navigation, true),
    },
    VPickupScreen: {
      screen: PickupScreen,
      navigationOptions: ({navigation}) => SwitchHeader(navigation),
    },
    VTrip: {
      screen: VTripScreen,
      navigationOptions: ({navigation}) => homeHeader('', navigation, true),
    },
    VTripOtp: {
      screen: VTripOtpScreen,
      navigationOptions: ({navigation}) => homeHeader('', navigation, true),
    },
    VDeliveryConfirmation: {
      screen: VDeliveryConfirmation,
      navigationOptions: ({navigation}) =>
        homeHeader('Delivery Confirmation', navigation, true),
    },
  },
  {
    headerLayoutPreset: 'center',
  },
);

const VehicleProfileStack = createStackNavigator(
  {
    VehicleOwnerProfile: {
      screen: VehicleOwnerProfile,
      navigationOptions: ({navigation}) =>
        homeHeader(
          'My Profile',
          navigation,
          true,
          <EditProfileHeader
            navigation={navigation}
            route="EditVehicleOwnerProfile"
          />,
        ),
    },
    EditVehicleOwnerProfile: {
      screen: EditVehicleOwnerProfile,
      navigationOptions: ({navigation}) =>
        homeHeader('Edit Profile', navigation),
    },
  },
  {
    headerLayoutPreset: 'left',
  },
);

const DriverStack = createStackNavigator(
  {
    VDriverList: {
      screen: VDriverList,
      navigationOptions: ({navigation}) =>
        homeHeader('Manage Driver', navigation, true),
    },
    VDriverProfile: {
      screen: VDriverProfile,
      navigationOptions: ({navigation}) =>
        homeHeader(
          'Manage Driver',
          navigation,
          false,
          <EditProfileHeader navigation={navigation} route="VEditDriver" />,
        ),
    },
    VEditDriver: {
      screen: VEditDriver,
      navigationOptions: ({navigation}) =>
        homeHeader('Edit Driver', navigation),
    },
  },
  {
    headerLayoutPreset: 'left',
  },
);

const VehicleOwnerStack = createStackNavigator(
  {
    ManageVehicleOwner: {
      screen: ManageVehicleOwner,
      navigationOptions: ({navigation}) =>
        homeHeader('Manage Vehicle', navigation, true),
    },
    ManageVehicleOwnerDetail: {
      screen: ManageVehicleOwnerDetail,
      navigationOptions: ({navigation}) =>
        homeHeader(
          'Manage Vehicle',
          navigation,
          false,
          <EditProfileHeader
            navigation={navigation}
            route="EditVehicleOwnerDetail"
          />,
        ),
    },
    CreateVehicle: {
      screen: CreateVehicleScreen,
      navigationOptions: ({navigation}) =>
        homeHeader('Create Vehicle', navigation),
    },
    EditVehicleOwnerDetail: {
      screen: EditVehicleOwnerDetail,
      navigationOptions: ({navigation}) =>
        homeHeader('Edit Vehicle', navigation),
    },
  },
  {
    headerLayoutPreset: 'left',
  },
);

const VehicleHistoryStack = createStackNavigator(
  {
    VHistory: {
      screen: VHistory,
      navigationOptions: ({navigation}) =>
        homeHeader('History', navigation, true),
    },
    VHistoryDetail: {
      screen: VHistoryDetail,
      navigationOptions: ({navigation}) => homeHeader('History', navigation),
    },
  },
  {
    headerLayoutPreset: 'left',
  },
);

const VNotificationStack = createStackNavigator(
  {
    VNotifications: {
      screen: VNotifications,
      navigationOptions: ({navigation}) =>
        homeHeader('Notifications', navigation, true, () => null),
    },
    VNotificationDetail: {
      screen: VNotificationDetail,
      navigationOptions: ({navigation}) =>
        homeHeader('Notifications', navigation, false, () => null),
    },
  },
  {
    headerLayoutPreset: 'left',
  },
);

const VehicleStack = createDrawerNavigator(
  {
    Notification_Notifications: {
      screen: VNotificationStack,
      path: 'VNotification',
      navigationOptions: {
        drawerLabel: () => null,
      },
    },
    HomeScreen_VHomeScreen: {
      screen: VehicleHomeStack,
      path: 'VHomeScreen',
      navigationOptions: {
        drawerLabel: 'Home',
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        drawerIcon: <DrawerImage source={require('../images/house.png')} />,
      },
    },
    MyProfile_VMyProfile: {
      screen: VehicleProfileStack,
      path: 'VMyProfile',
      navigationOptions: {
        drawerLabel: 'My Profile',
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        drawerIcon: <DrawerImage source={require('../images/profiles.png')} />,
      },
    },
    VehicleScreen_VehicleScreen: {
      screen: VehicleOwnerStack,
      path: 'Vehicle',
      navigationOptions: {
        drawerLabel: 'Manage Vehicle',
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        drawerIcon: (
          <DrawerImage source={require('../images/steering-wheel.png')} />
        ),
      },
    },
    DriverScreen_DriverScreen: {
      screen: DriverStack,
      path: 'Driver',
      navigationOptions: {
        drawerLabel: 'Manage Driver',
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        drawerIcon: <DrawerImage source={require('../images/driver.png')} />,
      },
    },
    History_VHistory: {
      screen: VehicleHistoryStack,
      path: 'History',
      navigationOptions: {
        drawerLabel: 'History',
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        drawerIcon: <DrawerImage source={require('../images/history.png')} />,
      },
    },
    Settings_LegalInformation: {
      screen: CustomerLegalInformationStack,
      navigationOptions: {
        drawerLabel: 'Legal Information',
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        drawerIcon: (
          <DrawerImage source={require('../images/settings-white.png')} />
        ),
      },
    },
    Settings_Notification: {
      screen: NotificationSettingsStack,
      navigationOptions: {
        drawerLabel: 'Notification',
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        drawerIcon: (
          <DrawerImage source={require('../images/settings-white.png')} />
        ),
      },
    },
    Settings_CountryLanguage: {
      screen: CustomerCountryLanguageStack,
      navigationOptions: {
        drawerLabel: 'Country Language',
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        drawerIcon: (
          <DrawerImage source={require('../images/settings-white.png')} />
        ),
      },
    },
  },
  {
    initialRouteName: 'HomeScreen_VHomeScreen',
    drawerWidth: widthPercentageToDP('80%'),
    drawerBackgroundColor: '#329fd1',
    contentOptions: {
      labelStyle: {
        fontFamily: 'Poppins-Bold',
        color: 'white',
        fontSize: 15,
      },
    },
    contentComponent: props => <MainDrawer {...props} isVehicleDrawer />,
  },
);

const AppNavigator = createSwitchNavigator(
  {
    Splash: SplashStack,
    Auth: AuthStack,
    CustomerScreens: CustomerStack,
    VehicleScreens: VehicleStack,
  },
  {
    initialRouteName: 'Splash',
  },
);

export default createAppContainer(AppNavigator);
