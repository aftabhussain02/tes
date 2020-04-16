import React from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-elements';
import {colors} from '../constant';
import {Dialog} from 'react-native-simple-dialogs';

export const PromptModal = ({
  visible,
  heading,
  onSubmit,
  children,
  onCancel,
}) => (
  <Dialog
    visible={visible}
    title=""
    animationType="fade"
    backgroundColor="black"
    dialogStyle={{borderRadius: 10}}
    onTouchOutside={onCancel}
    contentStyle={{padding: 0, margin: 0}}>
    <View>
      <Text style={styles.headingStyle}>{heading}</Text>
      <View style={{paddingHorizontal: 24, paddingBottom: 12}}>{children}</View>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Button
          title="Cancel"
          onPress={onCancel}
          buttonStyle={{
            backgroundColor: '#fff',
            borderTopWidth: 0.5,
            borderLeftWidth: 0.5,
            borderColor: '#E2E2E2',
            borderRadius: 0,
            borderBottomLeftRadius: 10,
            fontFamily: 'Poppins-Regular',
          }}
          containerStyle={{width: '50%'}}
          titleStyle={{color: colors.text}}
        />
        <Button
          title="Submit"
          onPress={onSubmit}
          buttonStyle={{
            backgroundColor: '#fff',
            borderTopWidth: 0.5,
            borderLeftWidth: 0.5,
            borderColor: '#E2E2E2',
            borderRadius: 0,
            borderBottomEndRadius: 10,
            fontFamily: 'Poppins-Regular',
          }}
          containerStyle={{width: '50%'}}
          titleStyle={{color: '#333'}}
        />
      </View>
    </View>
  </Dialog>
);
const styles = {
  headingStyle: {
    fontSize: 20,
    paddingTop: 10,
    fontFamily: 'Poppins-Bold',
    paddingBottom: 10,
    alignSelf: 'center',
    color: '#333',
  },
};
