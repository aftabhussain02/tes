import React from 'react';
import {Text, View} from 'react-native';
import {Dialog} from 'react-native-simple-dialogs';

export const CustomDialog = ({
  visible,
  title,
  descriptions,
  onTouchOutside,
  children,
}) => (
  <Dialog
    visible={visible}
    title=""
    animationType="fade"
    backgroundColor="black"
    dialogStyle={{borderRadius: 10}}
    onTouchOutside={onTouchOutside}>
    {children || (
      <View style={{flexDirection: 'column', alignItems: 'center'}}>
        <Text
          style={{
            fontSize: 13,
            color: 'black',
            fontFamily: 'Poppins-Bold',
          }}>
          {title}
        </Text>
        <Text style={styles.registerSubText}>{descriptions}</Text>
      </View>
    )}
  </Dialog>
);

const styles = {};
