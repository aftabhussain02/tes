import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  SafeAreaView,
  Image,
} from 'react-native';
import {DrawerItems} from 'react-navigation';
import {evaluateOuterDrawerListItems} from '../../utils';
import OuterDrawerItem from './OuterDrawerItem';
import DrawerHeader from './DrawerHeader';
import VehicleOwnerHeader from './VehicleOwnerHeader';

const styles = StyleSheet.create({
  customDrawerTouch: {
    paddingLeft: 13,
    paddingTop: 15,
    fontWeight: 'bold',
  },
  customDrawerIcon: {paddingRight: 10},
  backButtonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 17,
    paddingLeft: 3,
    borderBottomColor: '#F0F0F0',
    borderBottomWidth: 1,
  },
});

class MainDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainDrawer: true,
      currentComponent: '',
    };
  }

  toggleMainDrawer = () =>
    this.setState(prevState => ({mainDrawer: !prevState.mainDrawer}));

  renderMainDrawerComponents = ({mainDrawerItems, items, restProps}) => {
    return Object.keys(mainDrawerItems).map(item => {
      const index = mainDrawerItems[item];
      return index.end > 0 ? (
        <OuterDrawerItem
          key={item}
          label={item}
          onPress={() => {
            this.setState({
              currentComponent: item,
              mainDrawer: false,
            });
          }}
        />
      ) : (
        <DrawerItems items={[items[index.start]]} {...restProps} />
      );
    });
  };

  navigateToCallback = routeName => {
    this.setState({mainDrawer: true});
    this.props.navigation.navigate(routeName);
  };

  render() {
    const {items, isVehicleDrawer, ...restProps} = this.props;
    const {mainDrawer, currentComponent} = this.state;
    const {onDeleteBTN} = this.props;
    // get items objects with unique items and indexes
    const scopedItemsObject = evaluateOuterDrawerListItems(items);

    if (mainDrawer) {
      return (
        <ScrollView>
          {!isVehicleDrawer ? (
            <DrawerHeader navigateToCallback={this.navigateToCallback} />
          ) : (
            <VehicleOwnerHeader
              navigateToCallback={this.navigateToCallback}
              {...this.props}
            />
          )}
          {this.renderMainDrawerComponents({
            mainDrawerItems: scopedItemsObject,
            items,
            restProps,
          })}
          <TouchableOpacity
            style={{flex: 1}}
            onPress={() => {
              //alert("Logout");
              Alert.alert(
                'Logout',
                'Are you sure you want to logout?',
                [
                  {text: 'No', onPress: () => console.log('Cancel Pressed!')},
                  {
                    text: 'Yes',
                    onPress: () => {
                      onDeleteBTN;
                      console.log('yes Pressed!');
                      //this.props.navigation.navigate('SignInScreen');
                    },
                  },
                ],
                {cancelable: false},
              );
            }}>
            <View style={{flexDirection: 'row', marginTop: 12}}>
              <Image
                source={require('../../images/exit.png')}
                style={{
                  tintColor: 'lightgray',
                  height: 22,
                  width: 22,
                  marginLeft: 18,
                  marginRight: 30,
                }}
              />

              <Text
                style={{
                  color: 'white',
                  fontSize: 15,
                  fontWeight: 'bold',
                }}>
                Logout
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      );
    }

    const index = scopedItemsObject[currentComponent];

    const scopedItemsArr = items.slice(index.start, index.end);

    return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView>
          <DrawerHeader navigateToCallback={this.navigateToCallback} />
          <TouchableOpacity
            onPress={this.toggleMainDrawer}
            style={styles.customDrawerTouch}>
            <View style={styles.backButtonRow}>
              <Image
                source={require('../../images/go-back.png')}
                style={{
                  tintColor: 'lightgray',
                  height: 22,
                  width: 22,
                  marginRight: 28,
                }}
              />

              <Text
                style={{
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: 16,
                }}>
                Back
              </Text>
            </View>
          </TouchableOpacity>
          <DrawerItems items={scopedItemsArr} {...restProps} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default MainDrawer;
