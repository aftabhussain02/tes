import React, {Component} from 'react';
import {
  ScrollView,
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
} from 'react-native';
import {Button} from 'react-native-elements';
import {connect} from 'react-redux';
import {InputText, FileInput, UploadPhoto, Form} from '../../components';
import {updateUpdateVehicleProps, updateVehicleAttempt} from '../../actions';
// import {UploadPhoto} from '../../components';

class EditVehicleOwnerDetail extends Component {
  state = {
    data: [
      {},
      {},
      {},
      {
        removeSource: true,
      },
    ],
  };
  onChangeText = (name, value) => {
    this.props.updateUpdateVehicleProps(name, value);
  };

  onSubmit = () => {
    this.refs.myForm.validate().then(() =>
      this.props
        .updateVehicleAttempt(this.props.formData)
        .then(s => console.log(s))
        .catch(e => console.log(e)),
    );
  };
  render() {
    return (
      <SafeAreaView style={styles.safeAreaStyle}>
        <View style={styles.containerViewStyle}>
          <ScrollView
            style={styles.containerStyle}
            contentContainerStyle={{padding: 20}}>
            <FlatList
              data={this.state.data}
              renderItem={({item}) => (
                <UploadPhoto
                  containerStyle={{width: 100, height: 100}}
                  source={
                    !item.removeSource
                      ? require('../../images/bike.png')
                      : undefined
                  }
                />
              )}
              ItemSeparatorComponent={() => <View style={{width: 20}} />}
              horizontal
            />
            <Form
              ref="myForm"
              errors={this.props.errors}
              onChangeText={this.onChangeText}>
              <InputText
                label="Vehicle Name"
                name="vehicle_name"
                value={this.props.formData.vehicle_name}
                disabled
              />
              <InputText
                label="Vehicle Model"
                name="vehicle_model"
                value={this.props.formData.vehicle_model}
              />
              <InputText
                label="Vehicle Type"
                name="vehicle_type"
                value={this.props.formData.vehicle_type}
              />
              <InputText
                label="Vehicle Capacity"
                name="vehicle_capacity"
                value={this.props.formData.vehicle_capacity}
              />
              <InputText
                label="Vehicle Registration Number"
                name="vehicle_registration_number"
                value={this.props.formData.vehicle_registration_number}
              />
              <FileInput label="Vehicle Registration Certificate" />
              <FileInput label="Vehicle Pollution Certificate" />
              <FileInput label="Vehicle Insurance Certificate" />
              <FileInput label="Vehicle National Permit Certificate" />
            </Form>
            <Button
              title="Submit"
              onPress={this.onSubmit}
              loading={this.props.isLoading}
              containerStyle={styles.submitStyle}
              disabled={this.props.isLoading}
            />
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    backgroundColor: '#19a0d4',
  },
  containerViewStyle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  submitStyle: {
    width: '96%',
    marginTop: 20,
    marginHorizontal: 8,
    marginBottom: 20,
  },
  containerStyle: {
    flex: 1,
    flexDirection: 'column',
  },
});

const mapStateToProps = state => {
  const {formData, isLoading, errors, message} = state.updateVehicle;
  return {formData, isLoading, errors, message};
};

export default connect(mapStateToProps, {
  updateVehicleAttempt,
  updateUpdateVehicleProps,
})(EditVehicleOwnerDetail);
