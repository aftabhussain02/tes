import {
  UPDATE_DRIVER_DELETE_PROPS,
  ATTEMPT_DRIVER_DELETE,
  DRIVER_DELETE_SUCCESS,
  DRIVER_DELETE_FAILED,
} from './actionType';
import Axios from 'axios';
import {DRIVER_DELETE_API, getStorageParams} from '../constant';

export const updateCustomerDeleteProps = (
  prop,
  value,
  isNotFormData = false,
) => ({
  type: UPDATE_DRIVER_DELETE_PROPS,
  payload: {prop, value, isNotFormData},
});

export const customerDeleteAttempt = data => dispatch =>
  getStorageParams().then(({headers}) => {
    dispatch({type: ATTEMPT_DRIVER_DELETE});
    return Axios.post(DRIVER_DELETE_API, data, {
      Accept: 'application/json',
    })
      .then(s => {
        dispatch({
          type: DRIVER_DELETE_SUCCESS,
          payload: s.data,
        });
        return Promise.resolve(s);
      })
      .catch(e => {
        dispatch({
          type: DRIVER_DELETE_FAILED,
          payload: e.response.data,
        });
        return Promise.reject(e);
      });
  });
