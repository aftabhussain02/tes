import {
  LOGIN_VEHICLE_O_UPDATE_PROPS,
  ATTEMPT_VEHICLE_O_LOGIN,
  VEHICLE_O_LOGIN_FAILED,
  RESET_VEHICLE_O_LOGIN,
  VEHICLE_O_LOGIN_SUCCESS,
} from '../actions';

const intState = {
  formData: {
    mobile: '80',
  },
  isLoading: false,
  errors: {},
  success: false,
  message: '',
};

export default (state = intState, action) => {
  switch (action.type) {
    case ATTEMPT_VEHICLE_O_LOGIN:
      return {...state, isLoading: true, errors: {}};

    case LOGIN_VEHICLE_O_UPDATE_PROPS:
      if (action.payload.isNotFormData) {
        return {...state, [action.payload.prop]: action.payload.value};
      }

      const formData = {
        ...state.formData,
        [action.payload.prop]: action.payload.value,
      };

      return {...state, formData};

    case VEHICLE_O_LOGIN_SUCCESS:
      return {...intState, success: true};

    case VEHICLE_O_LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
        success: false,
        errors:
          action.payload.data && 'errors' in action.payload.data
            ? action.payload.data.errors
            : {},
        message: action.payload.message || '',
      };

    case RESET_VEHICLE_O_LOGIN:
      return intState;

    default:
      return state;
  }
};
