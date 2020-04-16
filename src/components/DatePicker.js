import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {TextField} from 'react-native-material-textfield';
import {Icon, Button} from 'react-native-elements';
import moment from 'moment';
import {InputText} from './InputText';

export class DatePicker extends Component {
  state = {
    datePickerVisible: false,
  };

  toggleDatePicker = () => {
    this.setState(prev => ({
      datePickerVisible: !prev.datePickerVisible,
    }));
  };

  handleCancelDatePicker = () => {
    this.setState({
      datePickerVisible: false,
    });
  };

  handleConfirmDatePicker = date => {
    this.setState({
      datePickerVisible: false,
    });

    this.props.onChange(date);
  };

  renderDate = () => {
    const {date, format} = this.props;
    if (this.props.date) {
      const returnDate = moment(date)
        .format(format || 'MM-DD-YYYY')
        .toString();
      return returnDate;
    }
    return '';
  };

  render() {
    return (
      <View style={this.props.containerStyle}>
        <TouchableOpacity onPress={this.toggleDatePicker}>
          <InputText
            editable={false}
            label={this.props.label}
            value={this.renderDate()}
            renderAccessory={() => (
              <Icon
                name={this.props.mode == 'time' ? 'clock-o' : 'calendar'}
                size={14}
                color="#333"
                containerStyle={{
                  marginTop: 5,
                }}
              />
            )}
          />
        </TouchableOpacity>
        <DateTimePicker
          mode={this.props.mode}
          date={this.props.date ? this.props.date : new Date()}
          isVisible={this.state.datePickerVisible}
          onConfirm={this.handleConfirmDatePicker}
          onCancel={this.handleCancelDatePicker}
          baseColor="#333"
        />
      </View>
    );
  }
}
