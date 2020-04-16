import {
  UPDATE_VEHICLE_O_UPDATE_PROPS,
  ATTEMPT_VEHICLE_O_UPDATE,
  VEHICLE_O_UPDATE_FAILED,
  RESET_VEHICLE_O_UPDATE,
  VEHICLE_O_UPDATE_SUCCESS,
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
    case ATTEMPT_VEHICLE_O_UPDATE:
      return {...state, isLoading: true, errors: {}};

    case UPDATE_VEHICLE_O_UPDATE_PROPS:
      if (action.payload.isNotFormData) {
        return {...state, [action.payload.prop]: action.payload.value};
      }

      const formData = {
        ...state.formData,
        [action.payload.prop]: action.payload.value,
      };

      return {...state, formData};

    case VEHICLE_O_UPDATE_SUCCESS:
      return {...intState, success: true};
    case VEHICLE_O_UPDATE_FAILED:
      return {
        ...state,
        isLoading: false,
        errors:
          action.payload.data && 'errors' in action.payload.data
            ? action.payload.data.errors
            : {},
        message: action.payload.message || '',
      };

    case RESET_VEHICLE_O_UPDATE:
      return intState;

    default:
      return state;
  }
};
