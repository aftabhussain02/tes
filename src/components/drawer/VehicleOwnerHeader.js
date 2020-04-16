import React, {Component} from 'react';
import {View, Text, Image, Modal} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import {LoginDialog} from '../login';

var radio_props = [
  {label: 'Customer', value: 0},
  {label: 'Vehicle Owner', value: 1},
];

class VehicleOwnerHeader extends Component {
  state = {
    modalVisible: false,
    value: 0,
  };

  loginContinuePress = () => {
    this.props.navigation.navigate('Auth');
  };

  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 180,
          alignItems: 'center',
          marginLeft: 20,
        }}>
        <Image
          source={require('../../images/profile-pic.png')}
          style={{height: 70, width: 70, borderRadius: 50}}
        />
        <View style={{marginLeft: 20}}>
          <Text
            style={{
              fontSize: 20,
              color: 'white',
              fontFamily: 'Poppins-Medium',
            }}>
            Username
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: 'white',
              fontFamily: 'Poppins-Regular',
            }}>
            User Id: CUST001
          </Text>
          <Button
            onPress={() => {
              this.props.navigation.toggleDrawer();
              this.setState({
                modalVisible: true,
              });
            }}
            containerStyle={{
              backgroundColor: 'transparent',
              borderWidth: 0,
              width: 'auto',
              padding: 0,
              margin: 0,
            }}
            buttonStyle={{padding: 0, marign: 0}}
            title="Switch Account"
            titleStyle={{fontFamily: 'Poppins-Bold'}}
            icon={() => (
              <Icon
                type="material"
                color="#fff"
                name="open-in-new"
                containerStyle={{paddingRight: 10}}
              />
            )}
          />
        </View>

        <LoginDialog
          visible={this.state.modalVisible}
          headerText="Login"
          subTitleText={`Please select your choice \n for Switch Account.`}
          radio_props={radio_props}
          onTouchOutside={() =>
            this.setState({
              modalVisible: false,
            })
          }
          radioFormValue={value => this.setState({value})}
          continueClicked={this.loginContinuePress}
        />
      </View>
    );
  }
}

export default VehicleOwnerHeader;
