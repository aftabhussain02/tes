import React from 'react';
import {View, Image} from 'react-native';
import {ListDetailItem} from './ListDetailItem';
import {colors, demoStyles} from '../constant';
import {Button} from 'react-native-elements';

export const ParcelPromptCard = ({onPress, onAccept, onReject}) => (
  <View style={styles.container}>
    <View style={styles.headerContainer}>
      <Image
        source={require('../images/package.png')}
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
        source={require('../images/package.png')}
        style={[styles.iconStyle, {marginLeft: '2%'}]}
      />
    </View>
    <View>
      <ListDetailItem
        title="Parcel Details"
        titleStyle={styles.greyTextStyle}
        containerStyle={styles.itemContainerStyle}
      />
      <ListDetailItem
        title="Types Of Goods"
        value="Private Goods"
        titleStyle={styles.normalTextStyle}
        valueStyle={styles.normalTextStyle}
        containerStyle={styles.itemContainerStyle}
      />
      <ListDetailItem
        title="Weight"
        value="380 Kg"
        titleStyle={styles.normalTextStyle}
        valueStyle={styles.normalTextStyle}
        containerStyle={styles.itemContainerStyle}
      />
      <ListDetailItem
        title="Dimensions"
        value="1800 x 1200"
        titleStyle={styles.normalTextStyle}
        valueStyle={styles.normalTextStyle}
        containerStyle={styles.itemContainerStyle}
      />
      <ListDetailItem
        title="Packed In"
        value="Lorem Ipsum"
        titleStyle={styles.normalTextStyle}
        valueStyle={styles.normalTextStyle}
        containerStyle={styles.itemContainerStyle}
      />
      <ListDetailItem
        title="Quantity"
        value="1500"
        titleStyle={styles.normalTextStyle}
        valueStyle={styles.normalTextStyle}
        containerStyle={styles.itemContainerStyle}
      />
    </View>
    <View style={styles.buttonsContainer}>
      <Button
        title="Reject"
        containerStyle={[styles.buttonContainerStyle]}
        buttonStyle={[styles.buttonStyle, {backgroundColor: '#CF4E39'}]}
        onPress={onReject}
      />
      <Button
        title="Accept"
        containerStyle={[styles.buttonContainerStyle]}
        buttonStyle={[styles.buttonStyle, {backgroundColor: '#33B577'}]}
        onPress={onAccept}
      />
    </View>
  </View>
);

const styles = {
  container: [
    demoStyles.elevationStyle,
    {borderRadius: 10, padding: 14, backgroundColor: '#fff'},
  ],
  headerStyle: {fontFamily: 'Poppins-Bold', fontSize: 12, color: '#2B2B2B'},
  greyTextStyle: {color: '#7F7F7F', fontSize: 10},
  normalTextStyle: {color: '#2B2B2B', fontSize: 10},
  iconStyle: {
    width: '8%',
    height: 30,
  },
  headerContainer: {
    paddingBottom: 10,
    borderColor: colors.borderColor,
    flexDirection: 'row',
    borderBottomWidth: 1,
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
};
