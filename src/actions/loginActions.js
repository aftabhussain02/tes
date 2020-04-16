import {
  LOGIN_VEHICLE_O_UPDATE_PROPS,
  ATTEMPT_VEHICLE_O_LOGIN,
  VEHICLE_O_LOGIN_SUCCESS,
  VEHICLE_O_LOGIN_FAILED,
} from './actionType';
import Axios from 'axios';
import {VEHICLE_OWNER_LOGIN_API, getStorageParams} from '../constant';

export const updateLoginProps = (prop, value, isNotFormData = false) => ({
  type: LOGIN_VEHICLE_O_UPDATE_PROPS,
  payload: {prop, value, isNotFormData},
});

export const vehicleLoginAttempt = data => dispatch =>
  getStorageParams().then(({headers}) => {
    dispatch({type: ATTEMPT_VEHICLE_O_LOGIN});
    return Axios.post(VEHICLE_OWNER_LOGIN_API, data, {
      headers,
    })
      .then(s => {
        console.log(s);
        dispatch({
          type: VEHICLE_O_LOGIN_SUCCESS,
          payload: s.data,
        });
        return Promise.resolve(s);
      })
      .catch(e => {
        dispatch({
          type: VEHICLE_O_LOGIN_FAILED,
          payload: e.response.data,
        });
        return Promise.reject(e);
      });
  });

export const dispatchType = type => ({
  type,
});
