import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

var {height, width} = Dimensions.get('screen');

export default class HomeScreen extends Component {
  onActionSelected = position => {
    if (position === 0) {
      // index of 'Settings'

      this.props.navigation.navigate('Notifications');
    }
  };

  render() {
    return (
      <ScrollView contentContainerStyle={{flex: 1}}>
        <View style={styles.container}>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}>
            <MapView
              provider={PROVIDER_GOOGLE}
              style={{flex: 1}}
              region={{
                latitude: 23.0231,
                longitude: 72.5068,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              showsUserLocation={true}
            />
            <View style={styles.bottomSheet}>
              <Text style={styles.custName}>Hi username</Text>

              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'stretch',
                  justifyContent: 'center',
                  alignContent: 'stretch',
                }}>
                <View style={styles.lineStyle} />
              </View>

              <View style={styles.dropOffContainer}>
                <View style={styles.dropOffInside}>
                  <Text
                    onPress={() => {
                      this.props.navigation.navigate('HomeDestination');
                    }}
                    style={styles.dropOfftxt}>
                    Search package destination
                  </Text>
                  <View
                    style={{
                      marginRight: 15,
                      flexDirection: 'column',
                      alignSelf: 'stretch',
                      justifyContent: 'center',
                      alignContent: 'stretch',
                    }}>
                    <View style={styles.hlineStyle} />
                  </View>
                  <Image
                    style={styles.mapImg}
                    source={require('../../images/map.png')}></Image>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
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
  },
  bottomSheet: {
    flexDirection: 'column',
    alignItems: 'center',
    height: height / 5,
    backgroundColor: 'white',
    shadowRadius: 8,
    shadowOpacity: 1,
  },
  custName: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    margin: 15,
    marginBottom: 15,
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
    padding: 12,
  },
  dropOfftxt: {
    flex: 1,
    fontSize: 14,
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
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: 'white',
  },
  notiImg: {
    width: 10,
    height: 10,
  },
});
