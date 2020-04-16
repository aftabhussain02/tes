import {
  ATTEMPT_LIST_VEHICLE,
  LIST_VEHICLE_FAILED,
  LIST_VEHICLE_SUCCESS,
  RESET_LIST_VEHICLE,
  DELETE_VEHICLE_SUCCESS,
} from '../actions';

const intState = {
  isLoading: true,
  errors: {},
  data: [],
  success: false,
};

export default (state = intState, action) => {
  switch (action.type) {
    case ATTEMPT_LIST_VEHICLE:
      return {...state, ...action.payload, isLoading: true, errors: {}};

    case LIST_VEHICLE_SUCCESS:
      return {...intState, success: true};

    case LIST_VEHICLE_FAILED:
      return {
        ...state,
        isLoading: false,
        status: false,
        errors:
          action.payload.data && 'errors' in action.payload.data
            ? action.payload.data.errors
            : {},
        message: action.payload.message || '',
      };

    case DELETE_VEHICLE_SUCCESS:
      const data = state.filter(({_id}) => _id != action.payload.data._id);
      return {...intState, ...data, success: true};

    case RESET_LIST_VEHICLE:
      return intState;

    default:
      return state;
  }
};
