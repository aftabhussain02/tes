import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

class CustomButton extends Component {
  render() {
    const {text, onPress} = this.props;
    return (
      <TouchableOpacity style={styles.buttonStyle} onPress={() => onPress()}>
        <Text style={styles.textStyle}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  textStyle: {
    flex: 1,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },

  buttonStyle: {
    marginTop: 60,
    justifyContent: 'center',
    padding: 10,
    borderRadius: 30,
    flexDirection: 'row',
    backgroundColor: '#009fd6',
  },
});

export default CustomButton;
