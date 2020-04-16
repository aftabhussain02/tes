import React, {Component} from 'react';
import {Dimensions, StyleSheet, View, Modal, Text} from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {CurretnUserMarker, CustomMarker, MapButton} from '../../components';
import {Button, Icon} from 'react-native-elements';
import QRCodeScanner from 'react-native-qrcode-scanner';

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 37.771707;
const LONGITUDE = -122.4053769;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const GOOGLE_MAPS_APIKEY = 'AIzaSyCE5lVHkDVq9CpPbJl3zmU4kidWUNBrsZA';

class Example extends Component {
  constructor(props) {
    super(props);

    // AirBnB's Office, and Apple Park
    this.state = {
      coordinates: [
        {
          latitude: 37.3317876,
          longitude: -122.0054812,
        },
        {
          latitude: 37.771707,
          longitude: -122.2053769,
        },
      ],
      qrCodeModal: false,
    };

    this.mapView = null;
  }

  onMapPress = e => {
    this.setState({
      coordinates: [...this.state.coordinates, e.nativeEvent.coordinate],
    });
  };
  onSuccess = e => {
    this.setState({
      qrCodeModal: false,
    });
    this.props.navigation.navigate('VTrip');
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <MapView
          initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
          style={StyleSheet.absoluteFill}
          ref={c => (this.mapView = c)}
          onPress={this.onMapPress}>
          <MapView.Marker
            key={`coordinate_${0}`}
            anchorOffset={{x: -60, y: -50}}
            centerOffset={{x: -60, y: -50}}
            coordinate={this.state.coordinates[0]}>
            <CurretnUserMarker />
          </MapView.Marker>
          <MapView.Marker
            key={`coordinate_${1}`}
            coordinate={this.state.coordinates[1]}>
            <CustomMarker />
          </MapView.Marker>
          {this.state.coordinates.length >= 2 && (
            <MapViewDirections
              origin={this.state.coordinates[0]}
              waypoints={
                this.state.coordinates.length > 2
                  ? this.state.coordinates.slice(1, -1)
                  : null
              }
              destination={
                this.state.coordinates[this.state.coordinates.length - 1]
              }
              apikey={GOOGLE_MAPS_APIKEY}
              strokeWidth={6}
              strokeColor="black"
              optimizeWaypoints={true}
              onStart={params => {
                console.log(
                  `Started routing between "${params.origin}" and "${params.destination}"`,
                );
              }}
              onReady={result => {
                this.mapView.fitToCoordinates(result.coordinates, {
                  edgePadding: {
                    right: width / 20,
                    bottom: height / 20,
                    left: width / 20,
                    top: height / 20,
                  },
                });
              }}
              onError={errorMessage => {
                // console.log('GOT AN ERROR');
              }}
            />
          )}
        </MapView>
        <MapButton
          title="Scan Qr Code"
          onPress={() =>
            this.setState({
              qrCodeModal: true,
            })
          }
        />
        <Modal visible={this.state.qrCodeModal} animationType="slide">
          <QRCodeScanner
            onRead={this.onSuccess}
            topContent={
              <Icon
                name="close"
                type="font-awesome"
                color="black"
                size={30}
                underlayColor="transparent"
                containerStyle={{position: 'absolute', top: 20, left: 20}}
                onPress={() =>
                  this.setState({
                    qrCodeModal: false,
                  })
                }
              />
            }
          />
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

export default Example;
