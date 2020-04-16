import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';
import {demoStyles} from '../../constant';
import {Card, Icon} from 'react-native-elements';
import {connect} from 'react-redux';
import {SwipeListView} from 'react-native-swipe-list-view';
import {TouchableWrapper} from '../../components';
import {listVehicle} from '../../actions/listVehicleActions';
import Spinner from 'react-native-loading-spinner-overlay';

var {width} = Dimensions.get('screen');

class ManageVehicleOwner extends Component {
  componentDidMount = () => {
    this.props.listVehicle();
  };
  renderRow = ({item}) => {
    return (
      <TouchableWrapper
        onPress={() => {
          this.props.navigation.navigate('ManageVehicleOwnerDetail');
        }}>
        <Card
          containerStyle={{
            paddingBottom: 0,
            paddingTop: 0,
            paddingLeft: 0,
            paddingRight: 0,
            borderRadius: 5,
            width: width - 20,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../../images/bike.png')}
              style={{width: 100, height: 100, alignSelf: 'center'}}
            />
            <View style={{flexDirection: 'column', marginTop: 10, flex: 1}}>
              <Text style={styles.headerText}>{item.vehicleName}</Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginBottom: 10,
                  marginTop: 10,
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.labelTextStyle}>Vehicle Type</Text>
                <Text style={styles.labelValueStyle}>{item.vehicleType}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginBottom: 10,
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.labelTextStyle}>Vehicle No</Text>
                <Text style={styles.labelValueStyle}>{item.vehicleNo}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginBottom: 10,
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.labelTextStyle}>Vehicle Capacity</Text>
                <Text style={styles.labelValueStyle}>
                  {item.vehicleCapacity}
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#19a0d4',
                width: '4%',
                justifyContent: 'center',
                borderBottomRightRadius: 5,
                borderTopRightRadius: 5,
              }}>
              <Image
                source={require('../../images/view-details.png')}
                style={styles.view}
              />
            </View>
          </View>
        </Card>
      </TouchableWrapper>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.safeAreaStyle}>
        <View style={styles.containerViewStyle}>
          <SwipeListView
            useFlatList={true}
            data={this.props.data}
            renderItem={(rowData, rowMap) => this.renderRow(rowData)}
            renderHiddenItem={(rowData, rowMap) => (
              <View style={[styles.hiddenContainer, demoStyles.elevationStyle]}>
                <Icon type="font-awesome" color="#fff" name="trash" size={30} />
              </View>
            )}
            rightOpenValue={-78}
            disableRightSwipe
          />
          <TouchableOpacity style={styles.floatingStyle}>
            <Icon name="add" type="material" color="#FFF" />
          </TouchableOpacity>
        </View>
        <Spinner visible={this.props.isLoading} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaStyle: {flex: 1, backgroundColor: '#19a0d4'},
  containerViewStyle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  headerText: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#262626',
    fontWeight: 'bold',
  },
  labelTextStyle: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#434343',
  },
  labelValueStyle: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#2C2C2C',
    marginEnd: 8,
  },
  view: {
    resizeMode: 'contain',
    paddingLeft: '90%',
    width: '0.5%',
    height: 70,
  },
  floatingStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    position: 'absolute',
    bottom: 10,
    right: 10,
    height: 60,
    backgroundColor: '#19a0d4',
    borderRadius: 30,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 25,
  },
  hiddenContainer: {
    height: '100%',
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DF5950',
    position: 'absolute',
    top: 18,
    right: 20,
  },
});

const mapStateToProps = state => {
  return {...state.listVehicle};
};

export default connect(mapStateToProps, {listVehicle})(ManageVehicleOwner);
