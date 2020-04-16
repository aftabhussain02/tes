import {
  UPDATE_CUSTOMER_UPDATE_PROPS,
  ATTEMPT_CUSTOMER_UPDATE,
  CUSTOMER_UPDATE_SUCCESS,
  CUSTOMER_UPDATE_FAILED,
} from './actionType';
import Axios from 'axios';
import {CUSTOMER_UPDATE_API, getStorageParams} from '../constant';

export const updateCustomerUpdateProps = (
  prop,
  value,
  isNotFormData = false,
) => ({
  type: UPDATE_CUSTOMER_UPDATE_PROPS,
  payload: {prop, value, isNotFormData},
});

export const customerUpdateAttempt = data => dispatch =>
  getStorageParams().then(({headers}) => {
    dispatch({type: ATTEMPT_CUSTOMER_UPDATE});
    return Axios.put(CUSTOMER_UPDATE_API, data, {
      Accept: 'application/json',
    })
      .then(s => {
        dispatch({
          type: CUSTOMER_UPDATE_SUCCESS,
          payload: s.data,
        });
        return Promise.resolve(s);
      })
      .catch(e => {
        dispatch({
          type: CUSTOMER_UPDATE_FAILED,
          payload: e.response.data,
        });
        return Promise.reject(e);
      });
  });
