import React, {PureComponent} from 'react';
import {LoginDialog} from '../../components';
import {View} from 'react-native';

const radio_props = [
  {label: 'Customer', value: 0},
  {label: 'Vehicle Owner', value: 1},
];

class VSwitchScreen extends PureComponent {
  state = {
    dialogVisible: false,
    ldialogVisible: false,
  };

  setDialogVisible(visible) {
    this.setState({dialogVisible: visible});
  }

  setLDialogVisible(visible) {
    this.setState({ldialogVisible: visible});
  }

  render() {
    return <View style={{height: 300, width: 300, backgroundColor: '#333'}} />;
  }
}

export default VSwitchScreen;
