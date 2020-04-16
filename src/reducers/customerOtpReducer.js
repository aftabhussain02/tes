import {
  UPDATE_CUSTOMER_OTP_PROPS,
  ATTEMPT_CUSTOMER_OTP,
  CUSTOMER_OTP_FAILED,
  RESET_CUSTOMER_OTP,
  CUSTOMER_OTP_SUCCESS,
} from '../actions';

const intState = {
  formData: {
    mobile_number: '8080808080',
    criminal_record_details: 'namesdaadss',
    have_creminal_record: 'no',
    address: 'adddress',
    email: 'test@mailinator.com',
    experience_in_driving: 'no',
    vehicle_type: 'vehicle_registration_number',
    last_name: 'test',
    first_name: 'test',
  },
  isLoading: false,
  errors: {},
  success: false,
};

export default (state = intState, action) => {
  switch (action.type) {
    case ATTEMPT_CUSTOMER_OTP:
      return {...state, isLoading: true, errors: {}};

    case UPDATE_CUSTOMER_OTP_PROPS:
      if (action.payload.isNotFormData) {
        return {...state, [action.payload.prop]: action.payload.value};
      }

      const formData = {
        ...state.formData,
        [action.payload.prop]: action.payload.value,
      };

      return {...state, formData};

    case CUSTOMER_OTP_SUCCESS:
      return {...intState, success: true};
    case CUSTOMER_OTP_FAILED:
      return {
        ...state,
        isLoading: false,
        errors:
          action.payload.data && 'errors' in action.payload.data
            ? action.payload.data.errors
            : {},
        message: action.payload.message || '',
      };

    case RESET_CUSTOMER_OTP:
      return intState;

    default:
      return state;
  }
};
