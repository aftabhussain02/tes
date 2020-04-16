import {
  UPDATE_DRIVER_LIST_PROPS,
  ATTEMPT_DRIVER_LIST,
  DRIVER_LIST_FAILED,
  RESET_CUSTOMER_SIGNUP,
  DRIVER_LIST_SUCCESS,
} from '../actions';

const intState = {
  data: [],
  isLoading: false,
  errors: {},
  success: false,
};

export default (state = intState, action) => {
  switch (action.type) {
    case ATTEMPT_DRIVER_LIST:
      return {...state, isLoading: true, errors: {}};

    case UPDATE_DRIVER_LIST_PROPS:
      if (action.payload.isNotFormData) {
        return {...state, [action.payload.prop]: action.payload.value};
      }

      const formData = {
        ...state.formData,
        [action.payload.prop]: action.payload.value,
      };

      return {...state, formData};

    case DRIVER_LIST_SUCCESS:
      return {...intState, data: action.payload.data, success: true};

    case DRIVER_LIST_FAILED:
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

    case RESET_CUSTOMER_SIGNUP:
      return intState;

    default:
      return state;
  }
};
