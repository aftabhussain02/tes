import {
  UPDATE_DRIVER_LIST_PROPS,
  ATTEMPT_DRIVER_LIST,
  DRIVER_LIST_SUCCESS,
  DRIVER_LIST_FAILED,
} from './actionType';
import Axios from 'axios';
import {DRIVER_LIST_API, getStorageParams} from '../constant';

export const updateDriverListProps = (prop, value, isNotFormData = false) => ({
  type: UPDATE_DRIVER_LIST_PROPS,
  payload: {prop, value, isNotFormData},
});

export const driverListAttempt = data => dispatch =>
  getStorageParams().then(({headers}) => {
    dispatch({type: ATTEMPT_DRIVER_LIST});
    return Axios.post(DRIVER_LIST_API, data, {
      Accept: 'application/json',
    })
      .then(s => {
        dispatch({
          type: DRIVER_LIST_SUCCESS,
          payload: s.data,
        });
        return Promise.resolve(s);
      })
      .catch(e => {
        dispatch({
          type: DRIVER_LIST_FAILED,
          payload: e.response.data,
        });
        return Promise.reject(e);
      });
  });
