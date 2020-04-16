import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import {MyProfileImage} from '../../components/MyProfileImage';
import {ListDetailItem} from '../../components';
import Spinner from 'react-native-loading-spinner-overlay';
import {customerSignInAttempt} from '../../actions';

class MyProfile extends Component {
  componentDidMount() {
    this.props.customerSignInAttempt({first_name: 'first_name'});
  }
  render() {
    const {
      first_name,
      mobile_number,
      have_creminal_record,
      address,
      last_name,
      email,
      isLoading,
    } = this.props;
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#19a0d4'}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'white',
          }}>
          <ScrollView style={styles.containerStyle}>
            <MyProfileImage />
            <View style={styles.insideContainer}>
              <ListDetailItem
                title="Full Name"
                value={first_name + ' ' + last_name}
              />
              <ListDetailItem title="Email Address" value={email} />
              <ListDetailItem title="Mobile Number" value={mobile_number} />
              <ListDetailItem title="Address" value={address} />
              <ListDetailItem
                title="Address Proof"
                value="loremipsum@gmail.com"
              />
              <ListDetailItem
                title="Have any Criminal Record"
                value={have_creminal_record}
              />
            </View>
          </ScrollView>
          <Spinner visible={isLoading} />
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
  containerStyle: {flex: 1, flexDirection: 'column', width: '100%'},
  insideContainer: {
    padding: 20,
  },
});

const mapStateToProps = state => {
  const {isLoading, data} = state.customerSignIn;
  return {...data, isLoading};
};

export default connect(mapStateToProps, {customerSignInAttempt})(MyProfile);
