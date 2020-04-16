import Axios from 'axios';
import {getStorageParams, CREATE_VEHICLE_API} from '../constant';
import {
  ATTEMPT_CREATE_VEHICLE,
  CREATE_VEHICLE_SUCCESS,
  CREATE_VEHICLE_FAILED,
  UPDATE_CREATE_VEHICLE_PROPS,
} from './actionType';

export const updateCreateVehicleProps = (
  prop,
  value,
  isNotFormData = false,
) => ({
  type: UPDATE_CREATE_VEHICLE_PROPS,
  payload: {prop, value, isNotFormData},
});

export const createVehicleAttempt = data => dispatch =>
  getStorageParams().then(({headers}) => {
    dispatch({type: ATTEMPT_CREATE_VEHICLE});
    return Axios.post(CREATE_VEHICLE_API, data, {
      Accept: 'application/json',
    })
      .then(s => {
        dispatch({
          type: CREATE_VEHICLE_SUCCESS,
          payload: s,
        });
        return Promise.resolve(s);
      })
      .catch(e => {
        dispatch({
          type: CREATE_VEHICLE_FAILED,
          payload: e.response.data ? e.response.data : e,
        });
        return Promise.reject(e);
      });
  });
