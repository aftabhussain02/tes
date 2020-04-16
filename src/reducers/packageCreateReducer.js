import {
  UPDATE_PACKAGE_CREATE_PROPS,
  ATTEMPT_PACKAGE_CREATE,
  PACKAGE_CREATE_FAILED,
  RESET_PACKAGE_CREATE,
  PACKAGE_CREATE_SUCCESS,
} from '../actions';

const intState = {
  formData: {
    receiver_name: 'receiver_name',
    receiver_mobile_number: 12345,
    receiver_address: 'receiver_address',
    type_of_goods: 'type_of_goods',
    weight: 'weight',
    length: '10',
    width: '10',
    height: '10',
    packed_in: 'packed_in',
    packed_date: '2019/09/28',
    quantity_of_goods: 'quantity_of_goods',
    driver_name: 'driver_name',
  },
  isLoading: false,
  errors: {},
  success: false,
};

export default (state = intState, action) => {
  switch (action.type) {
    case ATTEMPT_PACKAGE_CREATE:
      return {...state, isLoading: true, errors: {}};

    case UPDATE_PACKAGE_CREATE_PROPS:
      if (action.payload.isNotFormData) {
        return {...state, [action.payload.prop]: action.payload.value};
      }

      const formData = {
        ...state.formData,
        [action.payload.prop]: action.payload.value,
      };

      return {...state, formData};

    case PACKAGE_CREATE_SUCCESS:
      return {...intState, data: action.payload.data, success: true};

    case PACKAGE_CREATE_FAILED:
      return {
        ...state,
        isLoading: false,
        errors:
          action.payload.data && 'errors' in action.payload.data
            ? action.payload.data.errors
            : {},
        message: action.payload.message || '',
      };

    case RESET_PACKAGE_CREATE:
      return intState;

    default:
      return state;
  }
};
