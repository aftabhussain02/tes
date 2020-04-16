import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import {Button} from 'react-native-elements';

export const LoginTextInput = ({setLDialogVisible, value, onChangeText}) => {
  return (
    <View style={styles.edbtnContainer}>
      <View style={styles.edContainer}>
        <TextInput
          keyboardType="phone-pad"
          placeholder="Mobile Number"
          style={styles.edMobile}
          maxLength={10}
          value={value}
          onChangeText={onChangeText}
        />
        <Button
          disabled={!value}
          onPress={() => setLDialogVisible(true)}
          title="NEXT"
          containerStyle={{width: 80}}
          buttonStyle={[
            {height: 40, borderRadius: 20},
            !value && {backgroundColor: 'gray'},
          ]}
          titleStyle={{
            textTransform: 'uppercase',
            fontFamily: 'Poppins-Bold',
            marginBottom: -2,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  edbtnContainer: {
    backgroundColor: 'white',
    borderRadius: 40,
    margin: 20,
    marginTop: 20,
    alignContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  edContainer: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'flex-end',
    alignItems: 'center',
    padding: 12,
  },
  edMobile: {
    flex: 1,
    fontSize: 14,
    paddingLeft: 10,
    paddingBottom: 5,
    fontFamily: 'Poppins-Bold',
    color: '#494949',
  },
  nextStyle: {
    color: 'white',
    justifyContent: 'center',
    fontFamily: 'Poppins-Bold',
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  nextView: {
    backgroundColor: '#009fd6',
    borderRadius: 30,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
