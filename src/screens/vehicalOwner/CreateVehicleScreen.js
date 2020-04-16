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
import {
  InputText,
  FileInput,
  UploadPhoto,
  Form,
  ErrorModal,
} from '../../components';
import {updateCreateVehicleProps, createVehicleAttempt} from '../../actions';
// import {UploadPhoto} from '../../components';

class CreateVehicle extends Component {
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
    this.props.updateCreateVehicleProps(name, value);
  };

  onSubmit = () => {
    this.refs.myForm.validate().then(() =>
      this.props
        .createVehicleAttempt(this.props.formData)
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
              style={[styles.containerViewStyle, {marginTop: 0}]}
              errors={this.props.errors}
              onChangeText={this.onChangeText}>
              <InputText
                label="Vehicle Name"
                name="vehicle_name"
                value={this.props.formData.vehicle_name}
                validators={{required: true}}
              />
              <InputText
                label="Vehicle Model"
                name="vehicle_model"
                value={this.props.formData.vehicle_model}
                validators={{required: true}}
              />
              <InputText
                label="Vehicle Type"
                name="vehicle_type"
                value={this.props.formData.vehicle_type}
                validators={{required: true}}
              />
              <InputText
                label="Vehicle Capacity"
                name="vehicle_capacity"
                value={this.props.formData.vehicle_capacity}
                validators={{required: true}}
              />
              <InputText
                label="Vehicle Registration Number"
                name="vehicle_registration_number"
                value={this.props.formData.vehicle_registration_number}
                validators={{required: true}}
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

        <ErrorModal
          visible={!this.props.success && this.props.message}
          description={this.props.message}
          onPress={() =>
            this.props.updateCreateVehicleProps('message', '', true)
          }
        />
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
  const {formData, isLoading, errors, message} = state.createVehicle;
  console.log(state.createVehicle);
  return {formData, isLoading, errors, message};
};

export default connect(mapStateToProps, {
  createVehicleAttempt,
  updateCreateVehicleProps,
})(CreateVehicle);
