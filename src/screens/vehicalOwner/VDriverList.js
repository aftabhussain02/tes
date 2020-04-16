import React, {PureComponent} from 'react';
import {View, StyleSheet} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import {Icon} from 'react-native-elements';
import {demoStyles} from '../../constant';
import {DriverListItem, FloatingIcon} from '../../components';

class VDriverList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [{}, {}],
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <SwipeListView
          data={this.state.data}
          renderItem={() => (
            <DriverListItem
              onPress={() => this.props.navigation.navigate('VDriverProfile')}
            />
          )}
          ItemSeparatorComponent={() => <View style={{height: 14}} />}
          contentContainerStyle={{padding: 14}}
          renderHiddenItem={() => (
            <View style={[styles.hiddenContainer, demoStyles.elevationStyle]}>
              <Icon type="font-awesome" color="#fff" name="trash" size={30} />
            </View>
          )}
          rightOpenValue={-78}
          disableRightSwipe
        />
        <FloatingIcon name="plus" type="antdesign" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  hiddenContainer: {
    height: '100%',
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DF5950',
    position: 'absolute',
    top: 0,
    right: 0,
  },
});

export default VDriverList;
