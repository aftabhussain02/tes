import {
  UPDATE_CUSTOMER_SIGN_IN_PROPS,
  ATTEMPT_CUSTOMER_SIGN_IN,
  CUSTOMER_SIGN_IN_FAILED,
  RESET_CUSTOMER_SIGN_IN,
  CUSTOMER_SIGN_IN_SUCCESS,
} from '../actions';

const intState = {
  formData: {
    first_name: 'test',
  },
  data: {
    first_name: '',
    mobile_number: '',
    criminal_record_details: '',
    have_creminal_record: '',
    address: '',
    experience_in_driving: '',
    vehicle_type: '',
    last_name: '',
    email: '',
  },
  isLoading: false,
  errors: {},
  success: false,
};

export default (state = intState, action) => {
  switch (action.type) {
    case ATTEMPT_CUSTOMER_SIGN_IN:
      return {...state, isLoading: true, errors: {}};

    case UPDATE_CUSTOMER_SIGN_IN_PROPS:
      if (action.payload.isNotFormData) {
        return {...state, [action.payload.prop]: action.payload.value};
      }

      const formData = {
        ...state.formData,
        [action.payload.prop]: action.payload.value,
      };

      return {...state, formData};

    case CUSTOMER_SIGN_IN_SUCCESS:
      return {...intState, data: action.payload.data, success: true};

    case CUSTOMER_SIGN_IN_FAILED:
      return {
        ...state,
        isLoading: false,
        errors:
          action.payload.data && 'errors' in action.payload.data
            ? action.payload.data.errors
            : {},
        message: action.payload.message || '',
      };

    case RESET_CUSTOMER_SIGN_IN:
      return intState;

    default:
      return state;
  }
};
