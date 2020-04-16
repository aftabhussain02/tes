import React, {Component} from 'react';
import {View, ScrollView, StyleSheet, Image} from 'react-native';
import {ListDetailItem} from '../../components';
import {Button} from 'react-native-elements';
import {colors, demoStyles} from '../../constant';

export default class CPackagePromptScreen extends Component {
  onReject = () => {
    this.props.navigation.navigate('PaymentDetails');
  };

  onAccept = () => {
    this.props.navigation.navigate('PaymentDetails');
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.qrDetailContainer}>
            <View style={styles.headerContainer}>
              <Image
                source={require('../../images/package.png')}
                style={[styles.iconStyle, {marginRight: '2%'}]}
              />
              <View style={{width: '80%'}}>
                <ListDetailItem
                  title="Sender Name"
                  value="Receiver Name"
                  titleStyle={styles.headerStyle}
                  valueStyle={styles.headerStyle}
                  containerStyle={{paddingBottom: 0}}
                />
                <ListDetailItem
                  title="9090909090"
                  value="9090909090"
                  titleStyle={styles.greyTextStyle}
                  valueStyle={styles.greyTextStyle}
                />
                <ListDetailItem
                  title="935 Ridgewood St. Piscataway, NJ 08854"
                  value="935 Ridgewood St. Piscataway, NJ 08854"
                  titleStyle={styles.normalTextStyle}
                  valueStyle={styles.normalTextStyle}
                  containerStyle={styles.itemContainerStyle}
                />
              </View>
              <Image
                source={require('../../images/package.png')}
                style={[styles.iconStyle, {marginLeft: '2%'}]}
              />
            </View>
            <View
              style={{
                paddingBottom: 10,
                borderColor: colors.borderColor,
                borderBottomWidth: 1,
                marginBottom: 10,
              }}>
              <ListDetailItem
                title="Parcel Details"
                titleStyle={styles.greyTextStyle}
                containerStyle={styles.itemContainerStyle}
                reverseColor
              />
              <ListDetailItem
                title="Types Of Goods"
                value="Private Goods"
                containerStyle={styles.itemContainerStyle}
                reverseColor
              />
              <ListDetailItem
                title="Weight"
                value="380 Kg"
                containerStyle={styles.itemContainerStyle}
                reverseColor
              />
              <ListDetailItem
                title="Dimensions"
                value="1800 x 1200"
                containerStyle={styles.itemContainerStyle}
                reverseColor
              />
              <ListDetailItem
                title="Packed In"
                value="Lorem Ipsum"
                containerStyle={styles.itemContainerStyle}
                reverseColor
              />
              <ListDetailItem
                title="Quantity"
                value="1500"
                containerStyle={styles.itemContainerStyle}
                reverseColor
              />
            </View>
            <View>
              <ListDetailItem
                title="Estimate"
                titleStyle={styles.greyTextStyle}
                containerStyle={styles.itemContainerStyle}
                reverseColor
              />
              <ListDetailItem
                title="Trip Fare"
                value="143.50"
                valueSuffix="Rs."
                containerStyle={styles.itemContainerStyle}
                reverseColor
              />
              <ListDetailItem
                title="SubTotal"
                value="143.50"
                valueSuffix="Rs."
                containerStyle={styles.itemContainerStyle}
                reverseColor
              />
              <ListDetailItem
                title="Before Taxes"
                value="143.18"
                valueSuffix="Rs."
                containerStyle={styles.itemContainerStyle}
                reverseColor
              />
              <ListDetailItem
                title="CGST (2.5%)"
                value="3.58"
                valueSuffix="Rs."
                containerStyle={styles.itemContainerStyle}
                reverseColor
              />
              <ListDetailItem
                title="SGST/UTGST (2.5%)"
                value="3.58"
                valueSuffix="Rs."
                containerStyle={styles.itemContainerStyle}
                reverseColor
              />
              <ListDetailItem
                title="Insurance"
                value="3.58"
                valueSuffix="Rs."
                containerStyle={styles.itemContainerStyle}
                reverseColor
              />
              <ListDetailItem
                title="Collected"
                value="150.53"
                valueSuffix="Rs."
                valueStyle={{
                  color: '#117FB7',
                  fontSize: 20,
                  fontFamily: 'Poppins-Medium',
                }}
                containerStyle={styles.itemContainerStyle}
                reverseColor
              />
            </View>
            <View style={styles.buttonsContainer}>
              <Button
                title="Reject"
                containerStyle={[styles.buttonContainerStyle]}
                buttonStyle={[styles.buttonStyle, {backgroundColor: '#CF4E39'}]}
                onPress={this.onReject}
              />
              <Button
                title="Accept"
                containerStyle={[styles.buttonContainerStyle]}
                buttonStyle={[styles.buttonStyle, {backgroundColor: '#33B577'}]}
                onPress={this.onAccept}
              />
            </View>
          </View>
        </ScrollView>
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
    flexDirection: 'column',
    position: 'relative',
    width: '100%',
    backgroundColor: '#19a0d4',
  },
  qrDetailContainer: {
    flex: 1,
    flexDirection: 'column',
    margin: 30,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 14,
    alignItems: 'center',
  },

  headerStyle: {fontFamily: 'Poppins-Bold', fontSize: 16, color: '#2B2B2B'},
  greyTextStyle: {color: '#757575'},
  normalTextStyle: {color: '#2B2B2B'},
  iconStyle: {
    width: '8%',
    height: 30,
  },
  headerContainer: {
    paddingBottom: 10,
    borderColor: colors.borderColor,
    borderBottomWidth: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonsContainer: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 6,
  },
  buttonContainerStyle: {
    width: '45%',
  },
  buttonStyle: {
    padding: 2,
    borderRadius: 20,
  },
  itemContainerStyle: {
    paddingBottom: 4,
  },
});
