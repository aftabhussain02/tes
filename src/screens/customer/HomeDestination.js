import React, {Component} from 'react';
import {
  View,
  TextInput,
  ScrollView,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import {DestinationItem} from '../../components';

export default class HomeDestination extends Component {
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
    data: [
      {
        title: 'Lorem text is simply dummy text of the prevei usisdfiusd fhkas',
        subTitle: 'Lorem, Ipsum',
      },
      {
        title: 'Lorem text is simply dummy text of the prevei usisdfiusd fhkas',
        subTitle: 'Lorem, Ipsum',
      },
      {
        title: 'Lorem text is simply dummy text of the prevei usisdfiusd fhkas',
        subTitle: 'Lorem, Ipsum',
      },
      {
        title: 'Lorem text is simply dummy text of the prevei usisdfiusd fhkas',
        subTitle: 'Lorem, Ipsum',
      },
      {
        title: 'Lorem text is simply dummy text of the prevei usisdfiusd fhkas',
        subTitle: 'Lorem, Ipsum',
      },
      {
        title: 'Lorem text is simply dummy text of the prevei usisdfiusd fhkas',
        subTitle: 'Lorem, Ipsum',
      },
      {
        title: 'Lorem text is simply dummy text of the prevei usisdfiusd fhkas',
        subTitle: 'Lorem, Ipsum',
      },
    ],
  };

  onActionSelected = position => {
    if (position === 0) {
      // index of 'Settings'

      this.props.navigation.navigate('Notifications');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            margin: '6%',
            marginBottom: 0,
            paddingTop: '2%',
            backgroundColor: 'white',
            alignItems: 'center',
          }}>
          <View style={styles.inputContainerStyle}>
            <Image
              style={styles.dotImg}
              source={require('../../images/pin.png')}
            />
            <View style={styles.dropOffInside}>
              <TextInput
                style={styles.dropOfftxt}
                placeholder="Location of pickup"
                value="935 Ridgewood St"
              />

              <Image
                style={styles.mapImg}
                source={require('../../images/place-gray.png')}
              />
            </View>
          </View>
          <View style={styles.inputContainerStyle}>
            <Image
              style={styles.dotImg}
              source={require('../../images/pin-blue.png')}
            />
            <View style={styles.dropOffInside}>
              <TextInput
                style={styles.dropOfftxt}
                placeholder="Enter Destination"
              />
              <Image
                style={styles.mapImg}
                source={require('../../images/place-gray.png')}
              />
            </View>
          </View>
        </View>
        <FlatList
          data={this.state.data}
          keyExtractor={(_, key) => key.toString()}
          renderItem={({item}) => (
            <DestinationItem
              {...item}
              onPress={() => this.props.navigation.navigate('HomePackage')}
            />
          )}
          extraData={this.state.data}
          contentContainerStyle={{flexGrow: 1}}
        />
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
    backgroundColor: 'white',
    flexDirection: 'column',
  },

  dropOffContainer: {
    backgroundColor: '#ECECEC',
    borderRadius: 4,
    margin: 10,
    alignContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  dropOffInside: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ECECEC',
    alignContent: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    height: 34,
  },
  dropOfftxt: {
    flex: 1,
    fontFamily: 'Poppins-Regular',
    alignSelf: 'flex-end',
    margin: 0,
    padding: 0,
    fontSize: 18,
    paddingLeft: 10,
  },
  mapImg: {
    width: 20,
    height: 20,
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
  dotImg: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 6,
  },
  inputContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
  },
});
