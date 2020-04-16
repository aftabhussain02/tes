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
import {Button} from 'react-native-elements';
import ImagePicker from '../../components/ImagePicker';
import {InputText, CircleThreeInputHomePackage, Form} from '../../components';
import {demoStyles} from '../../constant';
import {connect} from 'react-redux';
import {updatePackageCreateProps, packageCreateAttempt} from '../../actions';

var {height} = Dimensions.get('screen');

class HomePackage extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({tintColor}) => (
      <Image
        source={require('../../images/house.png')}
        style={[styles.icon, {tintColor: 'white'}]}
      />
    ),
  };
  constructor(props) {
    super(props);
    this.state = {imageUrl: ''};
  }

  updateImage = params => {
    this.setState({imageUrl: params});
  };

  onActionSelected = position => {
    if (position === 0) {
      // index of 'Settings'

      this.props.navigation.navigate('Notifications');
    }
  };

  onChangeText = (name, value) => {
    this.props.updatePackageCreateProps(name, value);
  };

  render() {
    const {imageUrl} = this.state;
    return (
      <View style={styles.container}>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <View>
            <MapView
              provider={PROVIDER_GOOGLE}
              style={{height: height / 4}}
              region={{
                latitude: 23.0231,
                longitude: 72.5068,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              showsUserLocation
            />
          </View>
          <View style={[demoStyles.elevationStyle, styles.heading]}>
            <Text style={styles.custName}>
              Enter receiver and package details
            </Text>
          </View>
          <ScrollView
            contentContainerStyle={{flexGrow: 1, backgroundColor: 'white'}}>
            <View style={styles.bottomSheet}>
              <Form
                ref="myForm"
                errors={this.props.errors}
                onChangeText={this.onChangeText}>
                <InputText
                  inputType="circle"
                  placeholder="Receiver name"
                  name="receiver_name"
                  value={this.props.formData.receiver_name}
                  validators={{required: true}}
                />
                <InputText
                  inputType="circle"
                  placeholder="Receiver mobile number"
                  keyboardType="numeric"
                  name="receiver_mobile_number"
                  value={this.props.formData.receiver_mobile_number.toString()}
                  validators={{required: true}}
                />
                <InputText
                  inputType="circle"
                  placeholder="Receiver address"
                  name="receiver_address"
                  value={this.props.formData.receiver_address}
                  validators={{required: true}}
                />
                <InputText
                  inputType="circle"
                  placeholder="Types of goods"
                  name="type_of_goods"
                  value={this.props.formData.type_of_goods}
                  validators={{required: true}}
                />
                <InputText
                  inputType="circle"
                  placeholder="Weight"
                  suffix="Kg"
                  keyboardType="numeric"
                  name="type_of_goods"
                  value={this.props.formData.type_of_goods}
                  validators={{required: true}}
                />
                <CircleThreeInputHomePackage />
                <InputText
                  inputType="circle"
                  placeholder="Packed in Cotton box / Wooden box / bag.etc"
                  name="packed_in"
                  value={this.props.formData.packed_in}
                  validators={{required: true}}
                />
                <InputText
                  inputType="circle"
                  placeholder="Quantity of goods"
                  name="quantity_of_goods"
                  value={this.props.formData.quantity_of_goods}
                  validators={{required: true}}
                />
              </Form>
              <View style={styles.imageContainer}>
                <ImagePicker
                  icker
                  name={'imageUrl'}
                  value={imageUrl}
                  updateFieldValue={this.updateImage}
                />
              </View>
              <View style={styles.imageContainer}>
                <ImagePicker
                  name={'imageUrl'}
                  value={imageUrl}
                  updateFieldValue={this.updateImage}
                />
              </View>
              <View style={styles.imageContainer}>
                <ImagePicker
                  name={'imageUrl'}
                  value={imageUrl}
                  updateFieldValue={this.updateImage}
                />
              </View>
              <Button
                title="Continue"
                onPress={() => this.props.navigation.navigate('HomeVehicle')}
                containerStyle={{width: '90%', marginBottom: 20}}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  heading: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
  },
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

    backgroundColor: 'white',
    shadowRadius: 8,
    shadowOpacity: 1,
  },
  custName: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    margin: 20,
    marginBottom: 10,
  },
  imageContainer: {
    margin: 15,
    alignContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'flex-end',
    borderBottomColor: '#ECECEC',
    borderBottomWidth: 0.5,
  },
  dropOffContainer: {
    backgroundColor: '#ECECEC',
    borderRadius: 40,
    margin: 10,
    alignContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  dropOffInside: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'flex-end',
    alignItems: 'center',
  },
  recNameEd: {
    flex: 1,
    fontSize: 14,
    paddingLeft: 20,
    fontFamily: 'Poppins-Regular',
  },
  mapImg: {
    width: 22,
    height: 22,
    marginRight: 10,
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
});

const mapStateToProps = state => {
  return {...state.packageCreate};
};

export default connect(mapStateToProps, {
  updatePackageCreateProps,
  packageCreateAttempt,
})(HomePackage);
