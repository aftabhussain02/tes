import React, {Component} from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  FlatList,
  TextInput,
  Dimensions,
  Image,
} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import {colors, demoStyles} from '../../constant';
import {
  ParcelPromptCard,
  PromptModal,
  CustomMarker,
  CurretnUserMarker,
  CustomCallOut,
} from '../../components';
import {Text} from 'react-native-elements';

const {width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 0;

export default class VHomeScreen extends Component {
  constructor(props) {
    super(props);
    this.sheetRef = React.createRef();
    this.state = {
      bottomSheetOpen: false,
      rejectModal: false,
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      markers: [
        {
          key: 1,
          coordinate: {
            longitude: -122.42561001330613,
            latitude: 37.790037314014825,
          },
        },
        {
          key: 2,
          coordinate: {
            longitude: -122.41587560623886,
            latitude: 37.7764965652524,
          },
        },
        {
          key: 3,
          coordinate: {
            longitude: -122.44651079177856,
            latitude: 37.784438055085005,
          },
        },
        {
          key: 4,
          coordinate: {
            longitude: -122.43962958455087,
            latitude: 37.76649806877401,
          },
        },

        ,
      ],
    };
  }

  renderContent = () => {
    return (
      <View style={[demoStyles.elevationStyle, styles.contentContainer]}>
        <FlatList
          data={[{}, {}, {}, {}, {}]}
          renderItem={() => (
            <ParcelPromptCard
              onReject={this.toggleRejectModal}
              onAccept={() => this.props.navigation.navigate('VPickupScreen')}
            />
          )}
          ItemSeparatorComponent={() => <View style={{height: 10}} />}
          contentContainerStyle={{
            flexGrow: 1,
            padding: 10,
            paddingBottom: 80,
          }}
        />
      </View>
    );
  };

  renderHeader = (absolute = false) => {
    return (
      <TouchableOpacity
        onPress={this.openOrClose}
        style={[
          demoStyles.elevationStyle,
          styles.header,
          absolute && {position: 'absolute', bottom: 0},
        ]}>
        <View style={styles.panelHandle} />
      </TouchableOpacity>
    );
  };

  openOrClose = () => {
    if (this.state.bottomSheetOpen) {
      this.sheetRef.current.snapTo(0);
    } else {
      this.setState({
        bottomSheetOpen: true,
      });
      this.sheetRef.current.snapTo(1);
    }
  };

  toggleRejectModal = () =>
    this.setState(prev => ({
      rejectModal: !prev.rejectModal,
    }));

  sheetOpenValue = new Animated.Value(1);
  overlayOpacity = Animated.interpolate(this.sheetOpenValue, {
    inputRange: [0, 1],
    outputRange: [0.7, 0],
  });

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={this.state.region}>
          {this.state.markers.map(marker => (
            <Marker key={marker.key} coordinate={marker.coordinate}>
              <CustomMarker />
              <CustomCallOut />
            </Marker>
          ))}

          <Marker
            key="0"
            coordinate={{
              longitude: -122.43962958401033,
              latitude: 37.76649806802422,
            }}>
            <CurretnUserMarker />
          </Marker>
        </MapView>
        <Animated.View
          pointerEvents="none"
          style={[
            StyleSheet.absoluteFill,
            {opacity: this.overlayOpacity, backgroundColor: '#eee'},
          ]}
        />
        <BottomSheet
          ref={this.sheetRef}
          snapPoints={[0, hp('70%')]}
          renderContent={this.renderContent}
          renderHeader={this.renderHeader}
          initialSnap={0}
          callbackNode={this.sheetOpenValue}
          enabledInnerScrolling={false}
          enabledContentTapInteraction={false}
          onCloseStart={() =>
            this.setState({
              bottomSheetOpen: false,
            })
          }
        />
        {!this.state.bottomSheetOpen && this.renderHeader(true)}
        <PromptModal
          visible={this.state.rejectModal}
          heading="Reason For Rejection"
          onCancel={this.toggleRejectModal}>
          <Text style={{color: '#7F7F7F'}}> Cancel order with reason </Text>
          <TextInput
            multiline
            numberOfLines={4}
            style={{borderRadius: 10, borderColor: '#7F7F7F', borderWidth: 1}}
          />
        </PromptModal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  header: {
    height: 60,
    backgroundColor: 'rgba(255,255,255,0.8)',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    alignSelf: 'center',
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  },
  panelHandle: {
    width: 60,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
  },
  contentContainer: {
    height: hp('70%'),
    width: '90%',
    backgroundColor: 'rgba(255,255,255,0.8)',
    alignSelf: 'center',
  },
});
