import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import Swiper from 'react-native-swiper';
import {ListDetailItem} from '../../components';
import {Icon} from 'react-native-elements';
import {demoStyles} from '../../constant';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
const {width} = Dimensions.get('window');

const Slide = props => {
  return (
    <View style={styles.slide}>
      <Image
        onLoad={props.loadHandle.bind(null, props.i)}
        style={styles.image}
        source={require('../../images/bike.png')}
      />
    </View>
  );
};

export default class ManageVehicleOwnerDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgList: [
        '../../images/bike.png',
        '../../images/bike.png',
        '../../images/bike.png',
        '../../images/bike.png',
      ],
      loadQueue: [0, 0, 0, 0],
    };
    this.loadHandle = this.loadHandle.bind(this);
  }
  loadHandle(i) {
    let loadQueue = this.state.loadQueue;
    loadQueue[i] = 1;
    this.setState({
      loadQueue,
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.safeAreaStyle}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <Swiper
            loadMinimal
            loadMinimalSize={1}
            style={styles.wrapper}
            loop={false}
            height={heightPercentageToDP('35%')}
            containerStyle={[demoStyles.elevationStyle, {margin: 20}]}>
            {this.state.imgList.map((item, i) => (
              <Slide
                loadHandle={this.loadHandle}
                loaded={!!this.state.loadQueue[i]}
                uri={item}
                i={i}
                key={i}
              />
            ))}
          </Swiper>
          <View style={{marginHorizontal: 20, marginTop: 16}}>
            <ListDetailItem title="Vehicle Name" value="Box Truck" />
            <ListDetailItem title="Vehicle Model" value="Lorem Ipsum" />
            <ListDetailItem title="Vehicle Type" value="Tractor Type" />
            <ListDetailItem title="Vehicle Capacity" value="5000 kg" />
            <ListDetailItem title="Vehicle Number" value="GJ 01 BJ 8484" />
            <ListDetailItem
              title="Vehicle Registration Number"
              value="110345794783"
            />

            <ListDetailItem
              title="Vehicle Registration Certificate"
              valueComponent={
                <Icon type="font-awesome" color="#7E7E7E" name="image" />
              }
            />

            <ListDetailItem
              title="Vehicle Pollution Certificate"
              valueComponent={
                <Icon type="font-awesome" color="#7E7E7E" name="image" />
              }
            />
            <ListDetailItem
              title="Vehicle Insurance Certificate"
              valueComponent={
                <Icon type="font-awesome" color="#7E7E7E" name="image" />
              }
            />
            <ListDetailItem
              title="Vehicle National Permit Certificate"
              valueComponent={
                <Icon type="font-awesome" color="#7E7E7E" name="image" />
              }
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaStyle: {flex: 1, backgroundColor: '#fff'},
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  image: {
    width,
    flex: 1,
    margin: 10,
    height: 300,
    resizeMode: 'contain',
  },

  loadingView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.5)',
  },
});
