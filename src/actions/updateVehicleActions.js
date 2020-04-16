import Axios from 'axios';
import {getStorageParams, UPDATE_VEHICLE_API} from '../constant';
import {
  ATTEMPT_UPDATE_VEHICLE,
  UPDATE_VEHICLE_SUCCESS,
  UPDATE_VEHICLE_FAILED,
  UPDATE_UPDATE_VEHICLE_PROPS,
} from './actionType';

export const updateUpdateVehicleProps = (
  prop,
  value,
  isNotFormData = false,
) => ({
  type: UPDATE_UPDATE_VEHICLE_PROPS,
  payload: {prop, value, isNotFormData},
});

export const updateVehicleAttempt = data => dispatch =>
  getStorageParams().then(({headers}) => {
    dispatch({type: ATTEMPT_UPDATE_VEHICLE});
    return Axios.put(UPDATE_VEHICLE_API, data, {
      Accept: 'application/json',
    })
      .then(s => {
        console.log(s);
        dispatch({
          type: UPDATE_VEHICLE_SUCCESS,
          payload: s,
        });
        return Promise.resolve(s);
      })
      .catch(e => {
        console.log(e);
        dispatch({
          type: UPDATE_VEHICLE_FAILED,
          payload: e.response.data ? e.response.data : e,
        });
        return Promise.reject(e);
      });
  });
