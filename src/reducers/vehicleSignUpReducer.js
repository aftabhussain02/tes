import {
  UPDATE_VEHICLE_SIGN_UP_PROPS,
  ATTEMPT_VEHICLE_SIGN_UP,
  VEHICLE_SIGN_UP_FAILED,
  RESET_VEHICLE_SIGNUP,
  VEHICLE_SIGN_UP_SUCCESS,
} from '../actions';

const intState = {
  formData: {
    state: 'test',
    zip_code: '313001',
    city: 'unda',
    street: 'test',
    house_number: '123010',
    work_address: 'test',
    home_address: 'test',
    working_hours: '1540',
    vehicle_number: '005605',
    business_type: 'test',
    last_name: 'test',
    first_name: 'test',
  },
  isLoading: false,
  errors: {},
  success: false,
};

export default (state = intState, action) => {
  switch (action.type) {
    case ATTEMPT_VEHICLE_SIGN_UP:
      return {...state, isLoading: true, errors: {}};

    case UPDATE_VEHICLE_SIGN_UP_PROPS:
      if (action.payload.isNotFormData) {
        return {...state, [action.payload.prop]: action.payload.value};
      }

      const formData = {
        ...state.formData,
        [action.payload.prop]: action.payload.value,
      };

      return {...state, formData};

    case VEHICLE_SIGN_UP_SUCCESS:
      return {...intState, success: true};
    case VEHICLE_SIGN_UP_FAILED:
      console.log(action.payload.data);

      return {
        ...state,
        isLoading: false,
        errors:
          action.payload.data && 'errors' in action.payload.data
            ? action.payload.data.errors
            : {},
        message: action.payload.message || '',
      };

    case RESET_VEHICLE_SIGNUP:
      return intState;

    default:
      return state;
  }
};
