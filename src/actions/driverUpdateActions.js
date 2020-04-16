import {
  UPDATE_DRIVER_UPDATE_PROPS,
  ATTEMPT_DRIVER_UPDATE,
  DRIVER_UPDATE_SUCCESS,
  DRIVER_UPDATE_FAILED,
} from './actionType';
import Axios from 'axios';
import {DRIVER_UPDATE_API, getStorageParams} from '../constant';

export const updateDriverUpdateProps = (
  prop,
  value,
  isNotFormData = false,
) => ({
  type: UPDATE_DRIVER_UPDATE_PROPS,
  payload: {prop, value, isNotFormData},
});

export const customerDriverAttempt = data => dispatch =>
  getStorageParams().then(({headers}) => {
    dispatch({type: ATTEMPT_DRIVER_UPDATE});
    return Axios.put(DRIVER_UPDATE_API, data, {
      Accept: 'application/json',
    })
      .then(s => {
        dispatch({
          type: DRIVER_UPDATE_SUCCESS,
          payload: s.data,
        });
        return Promise.resolve(s);
      })
      .catch(e => {
        dispatch({
          type: DRIVER_UPDATE_FAILED,
          payload: e.response.data,
        });
        return Promise.reject(e);
      });
  });
