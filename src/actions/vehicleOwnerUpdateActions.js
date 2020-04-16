import {
  UPDATE_VEHICLE_O_UPDATE_PROPS,
  ATTEMPT_VEHICLE_O_UPDATE,
  VEHICLE_O_UPDATE_SUCCESS,
  VEHICLE_O_UPDATE_FAILED,
} from './actionType';
import Axios from 'axios';
import {VEHICLE_OWNER_API, getStorageParams} from '../constant';

export const updateVOUpdateProps = (prop, value, isNotFormData = false) => ({
  type: UPDATE_VEHICLE_O_UPDATE_PROPS,
  payload: {prop, value, isNotFormData},
});

export const VOUpdateAttempt = data => dispatch =>
  getStorageParams().then(({headers}) => {
    dispatch({type: ATTEMPT_VEHICLE_O_UPDATE});
    return Axios.put(VEHICLE_OWNER_API, data, {
      headers,
    })
      .then(s => {
        dispatch({
          type: VEHICLE_O_UPDATE_SUCCESS,
          payload: s.data,
        });
        return Promise.resolve(s);
      })
      .catch(e => {
        console.log(e.response.data);
        dispatch({
          type: VEHICLE_O_UPDATE_FAILED,
          payload: e.response.data,
        });
        return Promise.reject(e);
      });
  });
