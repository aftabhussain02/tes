import React, {Component} from 'react';
import {Icon} from 'react-native-elements';
import {TextField} from 'react-native-material-textfield';
import PickImage from 'react-native-image-picker';
import {View, TextInput, Text} from 'react-native';
import {CircleInputContainer} from './CircleInputContainer';
import {TouchableWrapper} from './TouchableWrapper';
import {CustomDropdown} from './CustomDropdown';

export class InputText extends Component {
  state = {
    visibleEyeEnable: false,
    error: '',
  };
  static defaultProps = {
    errors: {},
  };

  _renderVisibleEye() {
    if (this.props.secureTextEntry && !this.state.visibleEyeEnable) {
      return (
        <Icon
          type="font-awesome"
          name="eye-slash"
          onPress={this.visibleEyePress}
          color="#8C8C8C"
          containerStyle={styles.eyeStyle}
        />
      );
    } else if (this.state.visibleEyeEnable) {
      return (
        <Icon
          type="font-awesome"
          name="eye"
          onPress={this.visibleEyePress}
          color="#8C8C8C"
          containerStyle={styles.eyeStyle}
        />
      );
    } else if (this.props.isAddress) {
      return <Icon type="font-awesome" name="map-marker" color="#8C8C8C" />;
    }
    return null;
  }

  visibleEyePress = () => {
    this.setState(prev => ({
      visibleEyeEnable: !prev.visibleEyeEnable,
    }));
  };

  _renderAccessory() {
    if (this.props.secureTextEntry && !this.props.passwordShowDisabled) {
      return this._renderVisibleEye();
    } else if (this.props.renderAccessory) {
      return this.props.renderAccessory();
    }
    return null;
  }

  validateChanges = text => {
    this.props.onChangeText(this.props.name, text);
    return this.validator(text);
  };

  setError = error =>
    this.setState({
      error,
    });

  validator = text => {
    const {name, validators, value} = this.props;
    const errors = [];

    //assign value on external validation via form component
    if (!text && value) {
      text = value;
    }

    if (validators && Object.keys(validators).length) {
      if ('required' in validators) {
        if (!text) {
          errors.push(validators.required.message || 'This field is required');
        }
      } else if ('nullable' in validators && !text) {
        return {name, errors: []};
      }
      if ('max' in validators) {
        if (text.length > validators.max.value) {
          errors.push(
            validators.max.message ||
              'Max length for this field is' + validators.max,
          );
        }
      }
      if ('min' in validators) {
        if (text.length < validators.min.value) {
          errors.push(
            validators.min.message ||
              'Min length for this field is' + validators.min,
          );
        }
      }
      if ('confirmPassword' in validators) {
        if (text === validators.confirmPassword.value) {
          errors.push(
            validators.confirmPassword.message ||
              'Password and Confirm password does not match',
          );
        }
      }
      if ('numeric' in validators) {
        if (!isNaN(parseFloat(text)) && isFinite(text)) {
          errors.push(validators.numeric.message || 'Invalid number!');
        }
      }
    }
    this.setState({
      error: errors[0] || '',
      value: text,
    });

    return {name, errors};
  };

  chooseImage = () => {
    let options = {
      title: null,
      takePhotoButtonTitle: 'Camera',
      chooseFromLibraryButtonTitle: 'Gallery',
      multiple: false,
      mediaType: 'photo',
      noData: true,
    };

    PickImage.showImagePicker(options, item => {
      if (!item.didCancel) {
        // console.log(item);
        const source = {uri: item.uri};
        console.log(item);
      }
    });
  };

  renderInputJSX() {
    const props = {
      ...this.props,
      secureTextEntry:
        this.props.secureTextEntry && !this.state.visibleEyeEnable,
    };
    const {name, validators, errors} = props;

    const commonProps = {
      error: (name in errors && errors[name].message) || this.state.error,
      maxLength:
        (validators && 'max' in validators && validators.max) || undefined,
      ref: 'myInputCustom',
      keyboardType:
        this.props.label && this.props.label.toLowerCase().includes('number')
          ? 'numeric'
          : undefined,
      baseColor: '#848484',
      tintColor: '#848484',
      labelTextStyle: {
        fontFamily: 'Poppins-Regular',
        textTransform: 'capitalize',
        color: '#848484',
      },
      titleTextStyle: {
        fontFamily: 'Poppins-Regular',
        fontSize: 10,
      },
      style: {
        fontFamily: 'Poppins-Regular',
      },
      renderAccessory: () => this._renderAccessory(),
      containerStyle: [styles.containerStyle, this.props.containerStyle],
    };

    switch (this.props.inputType) {
      case 'circle':
        return (
          <CircleInputContainer error={commonProps.error}>
            <View
              style={[
                styles.circleContainerStyle,
                commonProps.error && {
                  backgroundColor: 'rgba(255, 0, 0, 0.1)',
                },
              ]}>
              <TextInput
                {...commonProps}
                {...this.props}
                style={styles.circleTextInputStyle}
              />
              {this.props.suffix && (
                <Text style={styles.circleSuffixStyle}>
                  {this.props.suffix}
                </Text>
              )}
            </View>
          </CircleInputContainer>
        );

      case 'imagePicker':
        return (
          <TouchableWrapper
            style={styles.containerStyle}
            onPress={this.chooseImage}>
            <TextField
              {...commonProps}
              {...props}
              inputContainerStyle={
                commonProps.error && {
                  borderBottomWidth: 1,
                  borderBottomColor: 'rgba(213,0,0,1)',
                }
              }
              label={this.props.label}
              renderAccessory={() => <Icon name="cloud-upload" />}
              disabled
              title={this.props.title || 'hint: Upload bmp, jpg, jpeg or png'}
            />
          </TouchableWrapper>
        );

      case 'dropdown':
        return <CustomDropdown {...props} />;

      default:
        return (
          <TextField
            {...commonProps}
            {...props}
            onChangeText={this.validateChanges}
          />
        );
    }
  }

  render() {
    return this.renderInputJSX();
  }
}

const styles = {
  containerStyle: {
    width: '100%',
  },
  eyeStyle: {},
  circleSuffixStyle: {color: '#929292', paddingRight: 20},
  circleTextInputStyle: {
    flex: 1,
    fontSize: 14,
    paddingLeft: 20,
    fontFamily: 'Poppins-Regular',
  },
  circleContainerStyle: {
    backgroundColor: '#ECECEC',
    borderRadius: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
};
