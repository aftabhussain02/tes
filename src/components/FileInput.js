import React, {Component} from 'react';
import {TouchableWrapper} from './TouchableWrapper';
import {InputText} from './InputText';
import {Icon} from 'react-native-elements';
import PickImage from 'react-native-image-picker';

export class FileInput extends Component {
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
  render() {
    const props = {...this.props, containerStyle: undefined};

    return (
      <TouchableWrapper
        style={styles.containerStyle}
        onPress={this.chooseImage}>
        <InputText
          {...props}
          label={this.props.label}
          renderAccessory={() => <Icon name="cloud-upload" />}
          disabled
          title={this.props.title || 'hint: Upload bmp, jpg, jpeg or png'}
        />
      </TouchableWrapper>
    );
  }
}

const styles = {
  containerStyle: {
    width: '100%',
  },
};
