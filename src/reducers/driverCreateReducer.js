import {
  UPDATE_DRIVER_CREATE_PROPS,
  ATTEMPT_DRIVER_CREATE,
  DRIVER_CREATE_FAILED,
  RESET_DRIVER_CREATE,
  DRIVER_CREATE_SUCCESS,
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
    case ATTEMPT_DRIVER_CREATE:
      return {...state, isLoading: true, errors: {}};

    case UPDATE_DRIVER_CREATE_PROPS:
      if (action.payload.isNotFormData) {
        return {...state, [action.payload.prop]: action.payload.value};
      }

      const formData = {
        ...state.formData,
        [action.payload.prop]: action.payload.value,
      };

      return {...state, formData};

    case DRIVER_CREATE_SUCCESS:
      return {...intState, data: action.payload.data, success: true};

    case DRIVER_CREATE_FAILED:
      return {
        ...state,
        isLoading: false,
        errors:
          action.payload.data && 'errors' in action.payload.data
            ? action.payload.data.errors
            : {},
        message: action.payload.message || '',
      };

    case RESET_DRIVER_CREATE:
      return intState;

    default:
      return state;
  }
};
