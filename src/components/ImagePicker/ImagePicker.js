import React from 'react';
import styles from './ImagePickerStyle';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
// import { CameraIconSvg, CloseIconSvg } from "js/UIElements/SvgImages";
import PickImage from 'react-native-image-picker';

class ImagePicker extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {error: ''};
  }

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
        this.updateFieldValue(source);
      }
    });
  };

  updateFieldValue = value => {
    this.props.updateFieldValue(value);
    if (this.state.error != '') {
      this.setState({error: ''});
    }
  };

  clearImage = () => {
    this.updateFieldValue('');
  };
  render() {
    const {
      label,
      containerCustomStyle,
      labelStyle,
      imagePickerContainerCustomStyle,
      selectLabel,
      value,
    } = this.props;
    //console.log(value);

    return (
      <View style={[styles.container, containerCustomStyle]}>
        {!!label ? (
          <Text style={[styles.label, labelStyle]}>{label}</Text>
        ) : null}
        {!!value ? (
          <View
            style={[
              styles.imagePickerContainer,
              imagePickerContainerCustomStyle,
            ]}>
            <ImageBackground
              resizeMode="cover"
              source={value}
              style={styles.image}
              imageStyle={{borderRadius: 40}}
            />
            <View style={styles.imageLayer} />
            <TouchableOpacity
              style={styles.closeButtonCotainer}
              activeOpacity={0.8}
              onPress={this.clearImage}>
              <Image
                source={require('../../images/close.png')}
                style={{width: 20, height: 20}}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            style={[
              styles.imagePickerContainer,
              imagePickerContainerCustomStyle,
            ]}
            activeOpacity={0.8}
            onPress={this.chooseImage}>
            {/* <CameraIconSvg /> */}
            <Text style={styles.selectLabel}>{selectLabel}</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

ImagePicker.defaultProps = {
  label: '',
  value: '',
  selectLabel: 'Select an Image',
  containerCustomStyle: {},
  labelStyle: {},
  imagePickerContainerCustomStyle: {},
};

export default ImagePicker;
