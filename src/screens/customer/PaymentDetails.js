import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {RadioButton, InputText, CustomDropdown} from '../../components';
import {Button, Icon} from 'react-native-elements';

export default class PaymentDetails extends Component {
  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 16,
            marginHorizontal: 16,
            marginBottom: 16,
          }}>
          <Text style={{fontFamily: 'Poppins-Bold', color: '#333'}}>
            Select options to pay
          </Text>
          <Text style={{fontFamily: 'Poppins-Bold', color: '#409fd7'}}>
            Rs 150.34
          </Text>
        </View>
        <View
          style={{width: '100%', flexDirection: 'row', marginHorizontal: 16}}>
          <View style={{flexDirection: 'column', justifyContent: 'flex-start'}}>
            <RadioButton
              title="Bank of India-UPI"
              checkedTitleStyle={{color: '#000'}}
              titleStyle={{paddingLeft: 10}}
              checked={true}
            />
            <Text
              style={{
                marginStart: 36,
                color: 'gray',
                fontWeight: 'Poppins-Regular',
              }}>
              A/C No. ****4285
            </Text>
          </View>
        </View>
        <Button
          title="PAY RS.150.34"
          checkedTitleStyle={{color: '#000'}}
          containerStyle={styles.submitStyle}
          onPress={() => this.props.navigation.navigate('Tracking')}
        />
        <View
          style={{
            backgroundColor: '#f0f0f0',
            height: 4,
            marginHorizontal: 16,
          }}
        />
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            marginHorizontal: 16,
            justifyContent: 'flex-start',
            marginTop: 24,
          }}>
          <RadioButton
            title="Debit Card"
            checkedTitleStyle={{color: '#000'}}
            titleStyle={{paddingLeft: 10}}
            checked={true}
          />
        </View>
        <View
          style={{
            backgroundColor: '#F0F0F0',
            borderRadius: 10,
            flexDirection: 'column',
            marginTop: 20,
            marginHorizontal: 16,
            paddingHorizontal: 16,
            paddingBottom: 10,
          }}>
          <InputText
            label="Card Number"
            renderAccessory={() => (
              <Icon type="font-awesome" name="cc-mastercard" color="#8C8C8C" />
            )}
          />
          <InputText label="Card Holder Name" />
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
            }}>
            <CustomDropdown
              label="Expire Date"
              containerStyle={{width: '45%'}}
            />
            <CustomDropdown containerStyle={{width: '45%'}} label="" />
          </View>
          <View style={{width: '50%'}}>
            <InputText label="CVV" secureTextEntry />
          </View>
        </View>
        <Button
          title="PAY RS.150.34"
          containerStyle={styles.submitStyle}
          onPress={() => this.props.navigation.navigate('Tracking')}
        />
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            marginHorizontal: 16,
            marginBottom: 30,
          }}>
          <View style={{flexDirection: 'column', justifyContent: 'flex-start'}}>
            <RadioButton
              titleStyle={{paddingLeft: 10}}
              checkedTitleStyle={{color: '#000'}}
              title="Credit Card"
            />
          </View>
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            marginHorizontal: 16,
          }}>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'flex-start',
              marginBottom: 20,
            }}>
            <RadioButton
              titleStyle={{paddingLeft: 10}}
              title="Cash on Delivery"
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  submitStyle: {
    width: '96%',
    marginTop: 20,
    marginHorizontal: 8,
    marginBottom: 24,
  },
});
