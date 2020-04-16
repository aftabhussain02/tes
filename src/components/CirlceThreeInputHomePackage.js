import React from 'react';
import {Text, View, TextInput} from 'react-native';

export const CircleThreeInputHomePackage = ({params}) => (
  <View style={styles.dropOffContainer}>
    <View
      style={{
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'space-between',
      }}>
      <View style={{...styles.dropOffInside, width: '30%'}}>
        <TextInput
          style={styles.recNameEd}
          placeholder="Length"
          keyboardType="numeric"
        />
      </View>
      <View style={{...styles.dropOffInside, width: '30%'}}>
        <TextInput
          style={styles.recNameEd}
          placeholder="Width"
          keyboardType="numeric"
        />
      </View>
      <View style={{...styles.dropOffInside, width: '30%'}}>
        <TextInput
          style={styles.recNameEd}
          placeholder="Height"
          keyboardType="numeric"
        />
      </View>
    </View>
  </View>
);

const styles = {
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
};
