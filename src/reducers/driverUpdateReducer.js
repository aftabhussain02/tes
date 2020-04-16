import {
  UPDATE_DRIVER_UPDATE_PROPS,
  ATTEMPT_DRIVER_UPDATE,
  DRIVER_UPDATE_FAILED,
  RESET_DRIVER_UPDATE,
  DRIVER_UPDATE_SUCCESS,
  CUSTOMER_SIGN_IN_SUCCESS,
} from '../actions';

const intState = {
  formData: {
    mobile_number: '',
    criminal_record_details: '',
    have_creminal_record: '',
    address: '',
    email: '',
    experience_in_driving: '',
    vehicle_type: '',
    last_name: '',
    first_name: '',
  },
  isLoading: false,
  errors: {},
  success: false,
};

export default (state = intState, action) => {
  switch (action.type) {
    case ATTEMPT_DRIVER_UPDATE:
      return {...state, isLoading: true, errors: {}};

    case UPDATE_DRIVER_UPDATE_PROPS:
      if (action.payload.isNotFormData) {
        return {...state, [action.payload.prop]: action.payload.value};
      }

      const formData = {
        ...state.formData,
        [action.payload.prop]: action.payload.value,
      };

      return {...state, formData};

    case DRIVER_UPDATE_SUCCESS:
      return {...intState, success: true};

    case CUSTOMER_SIGN_IN_SUCCESS:
      console.log('inside', action.payload);
      return {...intState, formData: action.payload.data, success: true};

    case DRIVER_UPDATE_FAILED:
      return {
        ...state,
        isLoading: false,
        errors:
          action.payload.data && 'errors' in action.payload.data
            ? action.payload.data.errors
            : {},
        message: action.payload.message || '',
      };

    case RESET_DRIVER_UPDATE:
      return intState;

    default:
      return state;
  }
};
