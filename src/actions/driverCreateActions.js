import {
  UPDATE_DRIVER_CREATE_PROPS,
  ATTEMPT_DRIVER_CREATE,
  DRIVER_CREATE_SUCCESS,
  DRIVER_CREATE_FAILED,
} from './actionType';
import Axios from 'axios';
import {DRIVER_CREATE_API, getStorageParams} from '../constant';

export const updateDriverCreateProps = (
  prop,
  value,
  isNotFormData = false,
) => ({
  type: UPDATE_DRIVER_CREATE_PROPS,
  payload: {prop, value, isNotFormData},
});

export const driverCreateAttempt = data => dispatch =>
  getStorageParams().then(({headers}) => {
    dispatch({type: ATTEMPT_DRIVER_CREATE});
    return Axios.post(DRIVER_CREATE_API, data, {
      Accept: 'application/json',
    })
      .then(s => {
        console.log(s);
        dispatch({
          type: DRIVER_CREATE_SUCCESS,
          payload: s.data,
        });
        return Promise.resolve(s);
      })
      .catch(e => {
        console.log(e);
        dispatch({
          type: DRIVER_CREATE_FAILED,
          payload: e.response.data,
        });
        return Promise.reject(e);
      });
  });
