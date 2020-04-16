import {
  UPDATE_UPDATE_VEHICLE_PROPS,
  ATTEMPT_UPDATE_VEHICLE,
  UPDATE_VEHICLE_FAILED,
  UPDATE_VEHICLE_SUCCESS,
  RESET_UPDATE_VEHICLE,
} from '../actions';

const intState = {
  formData: {
    vehicle_name: 'vehicle_name',
    vehicle_owner: 'karteek',
    vehicle_model: 'vehicle_model',
    vehicle_type: 'vehicle_type',
    vehicle_capacity: 'vehicle_capacity',
    vehicle_registration_number: 'vehicle_registration_number',
    city: 'city',
    zip_code: 12345,
    state: 'state',
  },
  isLoading: false,
  errors: {},
  success: false,
};

export default (state = intState, action) => {
  switch (action.type) {
    case ATTEMPT_UPDATE_VEHICLE:
      return {...state, isLoading: true, errors: {}};

    case UPDATE_UPDATE_VEHICLE_PROPS:
      if (action.payload.isNotFormData) {
        return {...state, [action.payload.prop]: action.payload.value};
      }

      const formData = {
        ...state.formData,
        [action.payload.prop]: action.payload.value,
      };

      return {...state, formData};

    case UPDATE_VEHICLE_SUCCESS:
      return {...intState, success: true};
    case UPDATE_VEHICLE_FAILED:
      return {
        ...state,
        isLoading: false,
        errors:
          action.payload.data && 'errors' in action.payload.data
            ? action.payload.data.errors
            : {},
        message: action.payload.message || '',
      };

    case RESET_UPDATE_VEHICLE:
      return intState;

    default:
      return state;
  }
};
